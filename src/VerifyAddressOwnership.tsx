import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Input, QRCode } from "antd";
import { constants } from "ethers";
import { isAddress, isValidName, verifyMessage } from "ethers/lib/utils.js";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAccount, useEnsAddress, useSignMessage } from "wagmi";
import { baseUrl } from "./constants";

function VerifyAddressOwnership() {
  const { signatureFromParams = "", ensNameFromParams = "" } = useParams<{
    signatureFromParams: string;
    ensNameFromParams: string;
  }>();
  console.log({ signatureFromParams, ensNameFromParams });

  const { isConnected } = useAccount();
  const [ensNameInput, setEnsNameInput] = useState(ensNameFromParams);
  const messageToSign = "Welcome to proof shake baby";
  const {
    data: signature = "0x0",
    isSuccess: isSigned,
    signMessage,
  } = useSignMessage({
    message: messageToSign,
  });

  const { data: ensNameOwner, isSuccess: isOwnerAddressRetrieved } =
    useEnsAddress({
      name: ensNameInput,
      enabled: isConnected && isValidName(ensNameInput),
    });

  const userAddress =
    isSigned || signatureFromParams !== ""
      ? verifyMessage(
          messageToSign,
          signatureFromParams === "" ? signature : signatureFromParams
        )
      : constants.AddressZero;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Input
          disabled={signatureFromParams !== ""}
          style={{ width: "50%" }}
          placeholder="Enter your ENS name to verify or public Address"
          onChange={(e) => setEnsNameInput(e.target.value)}
          defaultValue={ensNameFromParams}
        />
        <Button
          disabled={
            !isConnected || ensNameInput === "" || !isValidName(ensNameInput)
          }
          style={{ width: "20%", margin: "0 20px" }}
          onClick={() => signMessage()}
        >
          Generate Proof
        </Button>
      </div>

      <div>
        {(isOwnerAddressRetrieved || isAddress(ensNameInput)) &&
          (isSigned || signatureFromParams !== "") && (
            <>
              {/* <p style={{ textAlign: "center" }}>
                Signature:{" "}
                {signatureFromParams === "" ? signature : signatureFromParams}
              </p> */}
              <h1 style={{ textAlign: "center" }}>
                Verified address: {userAddress}
              </h1>

              {!isAddress(ensNameInput) && (
                <>
                  {ensNameOwner ? (
                    <h1 style={{ textAlign: "center" }}>
                      Owner of '{ensNameInput}' is {ensNameOwner}
                    </h1>
                  ) : (
                    <h1 style={{ textAlign: "center" }}>
                      '{ensNameInput}' doesn't have an owner
                    </h1>
                  )}
                </>
              )}

              {/* {isAddress(ensNameInput) ? (
              <h1 style={{ textAlign: "center" }}>
                Address gotten from Signature: {userAddress}
              </h1>
            ) : null} */}

              {ensNameOwner === userAddress ? (
                <h3 style={{ textAlign: "center" }}>
                  Proof is valid <CheckOutlined style={{ color: "green" }} />
                </h3>
              ) : (
                <h3 style={{ textAlign: "center" }}>
                  Proof is invalid <CloseOutlined style={{ color: "red" }} />
                </h3>
              )}
              {signatureFromParams === "" && (
                <>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <QRCode
                      value={`${baseUrl}/verifyAddressOwernship/${signature}/${ensNameInput}`}
                    />
                  </div>
                  {/* <div>
                    {`${baseUrl}/verifyAddressOwernship/${signature}/${ensNameInput}`}
                  </div> */}
                </>
              )}
            </>
          )}
      </div>
    </>
  );
}

export default VerifyAddressOwnership;