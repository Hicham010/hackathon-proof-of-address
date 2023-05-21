import { useEffect } from "react";
import VerifyTokenOwnership from "./VerifyTokenOwnership";
import { message } from "antd";
import { Route, Switch } from "react-router-dom";
import Challenge from "./Challenge";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Prover from "./Prover";
// import Verifier from "./Verifier";
import VerifyAddressOwnership from "./VerifyAddressOwnership";
import FrontPage from "./FrontPage";

function App() {
  useEffect(() => {
    message.error({
      content: "No Internet Connection",
      key: "test",
      duration: navigator.onLine ? Infinity : 0,
    });
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "end", padding: "3%" }}>
        <ConnectButton
          showBalance={true}
          accountStatus={"full"}
        />
      </div>

      <Switch>
        <Route
          exact
          path={"/"}
        >
          <FrontPage />
        </Route>
        <Route path={"/verifyOwernship"}>
          <VerifyTokenOwnership />
        </Route>
        <Route
          path={
            "/verifyAddressOwernship/:signatureFromParams?/:ensNameFromParams?"
          }
        >
          <VerifyAddressOwnership />
        </Route>
        <Route path={"/challenge"}>
          <Challenge />
        </Route>
        <Route path={"/prover/:sessionid/:ensName"}>
          <Prover />
        </Route>
        {/* <Route path={"/verifier/:signature/:ensName"}>
          <Verifier />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
