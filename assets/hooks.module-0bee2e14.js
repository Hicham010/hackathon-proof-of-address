import{c as he}from"./index-fec56c64.js";var Oe={exports:{}};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */(function(e){var t,n,o,l,r,p,v,b,k,_,P,d,f,m,T,E,C,H,I,A,q,V,W;(function(g){var D=typeof he=="object"?he:typeof self=="object"?self:typeof this=="object"?this:{};g(i(D,i(e.exports)));function i(u,a){return u!==D&&(typeof Object.create=="function"?Object.defineProperty(u,"__esModule",{value:!0}):u.__esModule=!0),function(s,h){return u[s]=a?a(s,h):h}}})(function(g){var D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,u){i.__proto__=u}||function(i,u){for(var a in u)u.hasOwnProperty(a)&&(i[a]=u[a])};t=function(i,u){D(i,u);function a(){this.constructor=i}i.prototype=u===null?Object.create(u):(a.prototype=u.prototype,new a)},n=Object.assign||function(i){for(var u,a=1,s=arguments.length;a<s;a++){u=arguments[a];for(var h in u)Object.prototype.hasOwnProperty.call(u,h)&&(i[h]=u[h])}return i},o=function(i,u){var a={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&u.indexOf(s)<0&&(a[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,s=Object.getOwnPropertySymbols(i);h<s.length;h++)u.indexOf(s[h])<0&&Object.prototype.propertyIsEnumerable.call(i,s[h])&&(a[s[h]]=i[s[h]]);return a},l=function(i,u,a,s){var h=arguments.length,c=h<3?u:s===null?s=Object.getOwnPropertyDescriptor(u,a):s,w;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(i,u,a,s);else for(var $=i.length-1;$>=0;$--)(w=i[$])&&(c=(h<3?w(c):h>3?w(u,a,c):w(u,a))||c);return h>3&&c&&Object.defineProperty(u,a,c),c},r=function(i,u){return function(a,s){u(a,s,i)}},p=function(i,u){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,u)},v=function(i,u,a,s){function h(c){return c instanceof a?c:new a(function(w){w(c)})}return new(a||(a=Promise))(function(c,w){function $(x){try{S(s.next(x))}catch(L){w(L)}}function N(x){try{S(s.throw(x))}catch(L){w(L)}}function S(x){x.done?c(x.value):h(x.value).then($,N)}S((s=s.apply(i,u||[])).next())})},b=function(i,u){var a={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},s,h,c,w;return w={next:$(0),throw:$(1),return:$(2)},typeof Symbol=="function"&&(w[Symbol.iterator]=function(){return this}),w;function $(S){return function(x){return N([S,x])}}function N(S){if(s)throw new TypeError("Generator is already executing.");for(;a;)try{if(s=1,h&&(c=S[0]&2?h.return:S[0]?h.throw||((c=h.return)&&c.call(h),0):h.next)&&!(c=c.call(h,S[1])).done)return c;switch(h=0,c&&(S=[S[0]&2,c.value]),S[0]){case 0:case 1:c=S;break;case 4:return a.label++,{value:S[1],done:!1};case 5:a.label++,h=S[1],S=[0];continue;case 7:S=a.ops.pop(),a.trys.pop();continue;default:if(c=a.trys,!(c=c.length>0&&c[c.length-1])&&(S[0]===6||S[0]===2)){a=0;continue}if(S[0]===3&&(!c||S[1]>c[0]&&S[1]<c[3])){a.label=S[1];break}if(S[0]===6&&a.label<c[1]){a.label=c[1],c=S;break}if(c&&a.label<c[2]){a.label=c[2],a.ops.push(S);break}c[2]&&a.ops.pop(),a.trys.pop();continue}S=u.call(i,a)}catch(x){S=[6,x],h=0}finally{s=c=0}if(S[0]&5)throw S[1];return{value:S[0]?S[1]:void 0,done:!0}}},W=function(i,u,a,s){s===void 0&&(s=a),i[s]=u[a]},k=function(i,u){for(var a in i)a!=="default"&&!u.hasOwnProperty(a)&&(u[a]=i[a])},_=function(i){var u=typeof Symbol=="function"&&Symbol.iterator,a=u&&i[u],s=0;if(a)return a.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&s>=i.length&&(i=void 0),{value:i&&i[s++],done:!i}}};throw new TypeError(u?"Object is not iterable.":"Symbol.iterator is not defined.")},P=function(i,u){var a=typeof Symbol=="function"&&i[Symbol.iterator];if(!a)return i;var s=a.call(i),h,c=[],w;try{for(;(u===void 0||u-- >0)&&!(h=s.next()).done;)c.push(h.value)}catch($){w={error:$}}finally{try{h&&!h.done&&(a=s.return)&&a.call(s)}finally{if(w)throw w.error}}return c},d=function(){for(var i=[],u=0;u<arguments.length;u++)i=i.concat(P(arguments[u]));return i},f=function(){for(var i=0,u=0,a=arguments.length;u<a;u++)i+=arguments[u].length;for(var s=Array(i),h=0,u=0;u<a;u++)for(var c=arguments[u],w=0,$=c.length;w<$;w++,h++)s[h]=c[w];return s},m=function(i){return this instanceof m?(this.v=i,this):new m(i)},T=function(i,u,a){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=a.apply(i,u||[]),h,c=[];return h={},w("next"),w("throw"),w("return"),h[Symbol.asyncIterator]=function(){return this},h;function w(j){s[j]&&(h[j]=function(G){return new Promise(function(re,Je){c.push([j,G,re,Je])>1||$(j,G)})})}function $(j,G){try{N(s[j](G))}catch(re){L(c[0][3],re)}}function N(j){j.value instanceof m?Promise.resolve(j.value.v).then(S,x):L(c[0][2],j)}function S(j){$("next",j)}function x(j){$("throw",j)}function L(j,G){j(G),c.shift(),c.length&&$(c[0][0],c[0][1])}},E=function(i){var u,a;return u={},s("next"),s("throw",function(h){throw h}),s("return"),u[Symbol.iterator]=function(){return this},u;function s(h,c){u[h]=i[h]?function(w){return(a=!a)?{value:m(i[h](w)),done:h==="return"}:c?c(w):w}:c}},C=function(i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var u=i[Symbol.asyncIterator],a;return u?u.call(i):(i=typeof _=="function"?_(i):i[Symbol.iterator](),a={},s("next"),s("throw"),s("return"),a[Symbol.asyncIterator]=function(){return this},a);function s(c){a[c]=i[c]&&function(w){return new Promise(function($,N){w=i[c](w),h($,N,w.done,w.value)})}}function h(c,w,$,N){Promise.resolve(N).then(function(S){c({value:S,done:$})},w)}},H=function(i,u){return Object.defineProperty?Object.defineProperty(i,"raw",{value:u}):i.raw=u,i},I=function(i){if(i&&i.__esModule)return i;var u={};if(i!=null)for(var a in i)Object.hasOwnProperty.call(i,a)&&(u[a]=i[a]);return u.default=i,u},A=function(i){return i&&i.__esModule?i:{default:i}},q=function(i,u){if(!u.has(i))throw new TypeError("attempted to get private field on non-instance");return u.get(i)},V=function(i,u,a){if(!u.has(i))throw new TypeError("attempted to set private field on non-instance");return u.set(i,a),a},g("__extends",t),g("__assign",n),g("__rest",o),g("__decorate",l),g("__param",r),g("__metadata",p),g("__awaiter",v),g("__generator",b),g("__exportStar",k),g("__createBinding",W),g("__values",_),g("__read",P),g("__spread",d),g("__spreadArrays",f),g("__await",m),g("__asyncGenerator",T),g("__asyncDelegator",E),g("__asyncValues",C),g("__makeTemplateObject",H),g("__importStar",I),g("__importDefault",A),g("__classPrivateFieldGet",q),g("__classPrivateFieldSet",V)})})(Oe);var ht=Oe.exports,Q,y,Ee,$e,M,pe,Ce,ie,je,ee={},He=[],Ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_e=Array.isArray;function F(e,t){for(var n in t)e[n]=t[n];return e}function xe(e){var t=e.parentNode;t&&t.removeChild(e)}function ue(e,t,n){var o,l,r,p={};for(r in t)r=="key"?o=t[r]:r=="ref"?l=t[r]:p[r]=t[r];if(arguments.length>2&&(p.children=arguments.length>3?Q.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)p[r]===void 0&&(p[r]=e.defaultProps[r]);return z(e,p,o,l,null)}function z(e,t,n,o,l){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++Ee};return l==null&&y.vnode!=null&&y.vnode(r),r}function Qe(){return{current:null}}function X(e){return e.children}function J(e,t){this.props=e,this.context=t}function K(e,t){if(t==null)return e.__?K(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?K(e):null}function Te(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Te(e)}}function le(e){(!e.__d&&(e.__d=!0)&&M.push(e)&&!te.__r++||pe!==y.debounceRendering)&&((pe=y.debounceRendering)||Ce)(te)}function te(){var e,t,n,o,l,r,p,v;for(M.sort(ie);e=M.shift();)e.__d&&(t=M.length,o=void 0,l=void 0,p=(r=(n=e).__v).__e,(v=n.__P)&&(o=[],(l=F({},r)).__v=r.__v+1,ce(v,r,l,n.__n,v.ownerSVGElement!==void 0,r.__h!=null?[p]:null,o,p??K(r),r.__h),Ie(o,r),r.__e!=p&&Te(r)),M.length>t&&M.sort(ie));te.__r=0}function De(e,t,n,o,l,r,p,v,b,k){var _,P,d,f,m,T,E,C=o&&o.__k||He,H=C.length;for(n.__k=[],_=0;_<t.length;_++)if((f=n.__k[_]=(f=t[_])==null||typeof f=="boolean"||typeof f=="function"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?z(null,f,null,null,f):_e(f)?z(X,{children:f},null,null,null):f.__b>0?z(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(d=C[_])===null||d&&f.key==d.key&&f.type===d.type)C[_]=void 0;else for(P=0;P<H;P++){if((d=C[P])&&f.key==d.key&&f.type===d.type){C[P]=void 0;break}d=null}ce(e,f,d=d||ee,l,r,p,v,b,k),m=f.__e,(P=f.ref)&&d.ref!=P&&(E||(E=[]),d.ref&&E.push(d.ref,null,f),E.push(P,f.__c||m,f)),m!=null?(T==null&&(T=m),typeof f.type=="function"&&f.__k===d.__k?f.__d=b=Ne(f,b,e):b=Ae(e,f,d,C,m,b),typeof n.type=="function"&&(n.__d=b)):b&&d.__e==b&&b.parentNode!=e&&(b=K(d))}for(n.__e=T,_=H;_--;)C[_]!=null&&(typeof n.type=="function"&&C[_].__e!=null&&C[_].__e==n.__d&&(n.__d=Ue(o).nextSibling),Me(C[_],C[_]));if(E)for(_=0;_<E.length;_++)Ve(E[_],E[++_],E[++_])}function Ne(e,t,n){for(var o,l=e.__k,r=0;l&&r<l.length;r++)(o=l[r])&&(o.__=e,t=typeof o.type=="function"?Ne(o,t,n):Ae(n,o,o,l,o.__e,t));return t}function Fe(e,t){return t=t||[],e==null||typeof e=="boolean"||(_e(e)?e.some(function(n){Fe(n,t)}):t.push(e)),t}function Ae(e,t,n,o,l,r){var p,v,b;if(t.__d!==void 0)p=t.__d,t.__d=void 0;else if(n==null||l!=r||l.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(l),p=null;else{for(v=r,b=0;(v=v.nextSibling)&&b<o.length;b+=1)if(v==l)break e;e.insertBefore(l,r),p=r}return p!==void 0?p:l.nextSibling}function Ue(e){var t,n,o;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(o=Ue(n)))return o}return null}function Xe(e,t,n,o,l){var r;for(r in n)r==="children"||r==="key"||r in t||ne(e,r,null,n[r],o);for(r in t)l&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||ne(e,r,t[r],n[r],o)}function de(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ke.test(t)?n:n+"px"}function ne(e,t,n,o,l){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||de(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||de(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o||e.addEventListener(t,r?ye:ve,r):e.removeEventListener(t,r?ye:ve,r);else if(t!=="dangerouslySetInnerHTML"){if(l)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function ve(e){return this.l[e.type+!1](y.event?y.event(e):e)}function ye(e){return this.l[e.type+!0](y.event?y.event(e):e)}function ce(e,t,n,o,l,r,p,v,b){var k,_,P,d,f,m,T,E,C,H,I,A,q,V,W,g=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(b=n.__h,v=t.__e=n.__e,t.__h=null,r=[v]),(k=y.__b)&&k(t);try{e:if(typeof g=="function"){if(E=t.props,C=(k=g.contextType)&&o[k.__c],H=k?C?C.props.value:k.__:o,n.__c?T=(_=t.__c=n.__c).__=_.__E:("prototype"in g&&g.prototype.render?t.__c=_=new g(E,H):(t.__c=_=new J(E,H),_.constructor=g,_.render=Ze),C&&C.sub(_),_.props=E,_.state||(_.state={}),_.context=H,_.__n=o,P=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),g.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=F({},_.__s)),F(_.__s,g.getDerivedStateFromProps(E,_.__s))),d=_.props,f=_.state,_.__v=t,P)g.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(g.getDerivedStateFromProps==null&&E!==d&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(E,H),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(E,_.__s,H)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(_.props=E,_.state=_.__s,_.__d=!1),_.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(D){D&&(D.__=t)}),I=0;I<_._sb.length;I++)_.__h.push(_._sb[I]);_._sb=[],_.__h.length&&p.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(E,_.__s,H),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(d,f,m)})}if(_.context=H,_.props=E,_.__P=e,A=y.__r,q=0,"prototype"in g&&g.prototype.render){for(_.state=_.__s,_.__d=!1,A&&A(t),k=_.render(_.props,_.state,_.context),V=0;V<_._sb.length;V++)_.__h.push(_._sb[V]);_._sb=[]}else do _.__d=!1,A&&A(t),k=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++q<25);_.state=_.__s,_.getChildContext!=null&&(o=F(F({},o),_.getChildContext())),P||_.getSnapshotBeforeUpdate==null||(m=_.getSnapshotBeforeUpdate(d,f)),De(e,_e(W=k!=null&&k.type===X&&k.key==null?k.props.children:k)?W:[W],t,n,o,l,r,p,v,b),_.base=t.__e,t.__h=null,_.__h.length&&p.push(_),T&&(_.__E=_.__=null),_.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Ye(n.__e,t,n,o,l,r,p,b);(k=y.diffed)&&k(t)}catch(D){t.__v=null,(b||r!=null)&&(t.__e=v,t.__h=!!b,r[r.indexOf(v)]=null),y.__e(D,t,n)}}function Ie(e,t){y.__c&&y.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(o){o.call(n)})}catch(o){y.__e(o,n.__v)}})}function Ye(e,t,n,o,l,r,p,v){var b,k,_,P=n.props,d=t.props,f=t.type,m=0;if(f==="svg"&&(l=!0),r!=null){for(;m<r.length;m++)if((b=r[m])&&"setAttribute"in b==!!f&&(f?b.localName===f:b.nodeType===3)){e=b,r[m]=null;break}}if(e==null){if(f===null)return document.createTextNode(d);e=l?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,d.is&&d),r=null,v=!1}if(f===null)P===d||v&&e.data===d||(e.data=d);else{if(r=r&&Q.call(e.childNodes),k=(P=n.props||ee).dangerouslySetInnerHTML,_=d.dangerouslySetInnerHTML,!v){if(r!=null)for(P={},m=0;m<e.attributes.length;m++)P[e.attributes[m].name]=e.attributes[m].value;(_||k)&&(_&&(k&&_.__html==k.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(Xe(e,d,P,l,v),_)t.__k=[];else if(De(e,_e(m=t.props.children)?m:[m],t,n,o,l&&f!=="foreignObject",r,p,r?r[0]:n.__k&&K(n,0),v),r!=null)for(m=r.length;m--;)r[m]!=null&&xe(r[m]);v||("value"in d&&(m=d.value)!==void 0&&(m!==e.value||f==="progress"&&!m||f==="option"&&m!==P.value)&&ne(e,"value",m,P.value,!1),"checked"in d&&(m=d.checked)!==void 0&&m!==e.checked&&ne(e,"checked",m,P.checked,!1))}return e}function Ve(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(o){y.__e(o,n)}}function Me(e,t,n){var o,l;if(y.unmount&&y.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||Ve(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){y.__e(r,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&Me(o[l],t,n||typeof e.type!="function");n||e.__e==null||xe(e.__e),e.__=e.__e=e.__d=void 0}function Ze(e,t,n){return this.constructor(e,n)}function Re(e,t,n){var o,l,r;y.__&&y.__(e,t),l=(o=typeof n=="function")?null:n&&n.__k||t.__k,r=[],ce(t,e=(!o&&n||t).__k=ue(X,null,[e]),l||ee,ee,t.ownerSVGElement!==void 0,!o&&n?[n]:l?null:t.firstChild?Q.call(t.childNodes):null,r,!o&&n?n:l?l.__e:t.firstChild,o),Ie(r,e)}function We(e,t){Re(e,t,We)}function et(e,t,n){var o,l,r,p,v=F({},e.props);for(r in e.type&&e.type.defaultProps&&(p=e.type.defaultProps),t)r=="key"?o=t[r]:r=="ref"?l=t[r]:v[r]=t[r]===void 0&&p!==void 0?p[r]:t[r];return arguments.length>2&&(v.children=arguments.length>3?Q.call(arguments,2):n),z(e.type,v,o||e.key,l||e.ref,null)}function tt(e,t){var n={__c:t="__cC"+je++,__:e,Consumer:function(o,l){return o.children(l)},Provider:function(o){var l,r;return this.getChildContext||(l=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(p){this.props.value!==p.value&&l.some(function(v){v.__e=!0,le(v)})},this.sub=function(p){l.push(p);var v=p.componentWillUnmount;p.componentWillUnmount=function(){l.splice(l.indexOf(p),1),v&&v.call(p)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n}Q=He.slice,y={__e:function(e,t,n,o){for(var l,r,p;t=t.__;)if((l=t.__c)&&!l.__)try{if((r=l.constructor)&&r.getDerivedStateFromError!=null&&(l.setState(r.getDerivedStateFromError(e)),p=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,o||{}),p=l.__d),p)return l.__E=l}catch(v){e=v}throw e}},Ee=0,$e=function(e){return e!=null&&e.constructor===void 0},J.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=F({},this.state),typeof e=="function"&&(e=e(F({},n),this.props)),e&&F(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),le(this))},J.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),le(this))},J.prototype.render=X,M=[],Ce=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ie=function(e,t){return e.__v.__b-t.__v.__b},te.__r=0,je=0;const pt=Object.freeze(Object.defineProperty({__proto__:null,Component:J,Fragment:X,cloneElement:et,createContext:tt,createElement:ue,createRef:Qe,h:ue,hydrate:We,get isValidElement(){return $e},get options(){return y},render:Re,toChildArray:Fe},Symbol.toStringTag,{value:"Module"}));var U,O,oe,me,B=0,Le=[],Y=[],be=y.__b,ge=y.__r,we=y.diffed,Se=y.__c,ke=y.unmount;function R(e,t){y.__h&&y.__h(O,e,B||t),B=0;var n=O.__H||(O.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Y}),n.__[e]}function Ge(e){return B=1,Be(ze,e)}function Be(e,t,n){var o=R(U++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):ze(void 0,t),function(v){var b=o.__N?o.__N[0]:o.__[0],k=o.t(b,v);b!==k&&(o.__N=[k,o.__[1]],o.__c.setState({}))}],o.__c=O,!O.u)){var l=function(v,b,k){if(!o.__c.__H)return!0;var _=o.__c.__H.__.filter(function(d){return d.__c});if(_.every(function(d){return!d.__N}))return!r||r.call(this,v,b,k);var P=!1;return _.forEach(function(d){if(d.__N){var f=d.__[0];d.__=d.__N,d.__N=void 0,f!==d.__[0]&&(P=!0)}}),!(!P&&o.__c.props===v)&&(!r||r.call(this,v,b,k))};O.u=!0;var r=O.shouldComponentUpdate,p=O.componentWillUpdate;O.componentWillUpdate=function(v,b,k){if(this.__e){var _=r;r=void 0,l(v,b,k),r=_}p&&p.call(this,v,b,k)},O.shouldComponentUpdate=l}return o.__N||o.__}function nt(e,t){var n=R(U++,3);!y.__s&&se(n.__H,t)&&(n.__=e,n.i=t,O.__H.__h.push(n))}function qe(e,t){var n=R(U++,4);!y.__s&&se(n.__H,t)&&(n.__=e,n.i=t,O.__h.push(n))}function _t(e){return B=5,fe(function(){return{current:e}},[])}function rt(e,t,n){B=6,qe(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function fe(e,t){var n=R(U++,7);return se(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ot(e,t){return B=8,fe(function(){return e},t)}function it(e){var t=O.context[e.__c],n=R(U++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(O)),t.props.value):e.__}function ut(e,t){y.useDebugValue&&y.useDebugValue(t?t(e):e)}function lt(e){var t=R(U++,10),n=Ge();return t.__=e,O.componentDidCatch||(O.componentDidCatch=function(o,l){t.__&&t.__(o,l),n[1](o)}),[n[0],function(){n[1](void 0)}]}function at(){var e=R(U++,11);if(!e.__){for(var t=O.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function ct(){for(var e;e=Le.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Z),e.__H.__h.forEach(ae),e.__H.__h=[]}catch(t){e.__H.__h=[],y.__e(t,e.__v)}}y.__b=function(e){O=null,be&&be(e)},y.__r=function(e){ge&&ge(e),U=0;var t=(O=e.__c).__H;t&&(oe===O?(t.__h=[],O.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Y,n.__N=n.i=void 0})):(t.__h.forEach(Z),t.__h.forEach(ae),t.__h=[])),oe=O},y.diffed=function(e){we&&we(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Le.push(t)!==1&&me===y.requestAnimationFrame||((me=y.requestAnimationFrame)||ft)(ct)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Y&&(n.__=n.__V),n.i=void 0,n.__V=Y})),oe=O=null},y.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Z),n.__h=n.__h.filter(function(o){return!o.__||ae(o)})}catch(o){t.some(function(l){l.__h&&(l.__h=[])}),t=[],y.__e(o,n.__v)}}),Se&&Se(e,t)},y.unmount=function(e){ke&&ke(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{Z(o)}catch(l){t=l}}),n.__H=void 0,t&&y.__e(t,n.__v))};var Pe=typeof requestAnimationFrame=="function";function ft(e){var t,n=function(){clearTimeout(o),Pe&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);Pe&&(t=requestAnimationFrame(n))}function Z(e){var t=O,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),O=t}function ae(e){var t=O;e.__c=e.__(),O=t}function se(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function ze(e,t){return typeof t=="function"?t(e):t}const dt=Object.freeze(Object.defineProperty({__proto__:null,useCallback:ot,useContext:it,useDebugValue:ut,useEffect:nt,useErrorBoundary:lt,useId:at,useImperativeHandle:rt,useLayoutEffect:qe,useMemo:fe,useReducer:Be,useRef:_t,useState:Ge},Symbol.toStringTag,{value:"Module"}));export{rt as A,Re as D,We as E,et as F,tt as G,lt as P,Fe as S,ot as T,at as V,_t as _,qe as a,J as b,fe as c,Qe as d,pt as e,dt as f,Ge as h,X as k,y as l,nt as p,it as q,Be as s,ht as t,ut as x,ue as y};
