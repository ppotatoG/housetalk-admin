(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{8337:function(e,r,t){Promise.resolve().then(t.bind(t,9141))},6690:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var o=t(7437);t(2265);let a={default:{base:"bg-indigo-950",hover:"hover:bg-indigo-900",darkBase:"dark:bg-indigo-900",darkHover:"dark:hover:bg-indigo-100",text:"text-white",border:"border-indigo-950",darkText:"text-indigo-900",darkBorder:"dark:border-indigo-200"},error:{base:"bg-red-500",hover:"hover:bg-red-600",darkBase:"dark:bg-red-600",darkHover:"dark:hover:bg-red-700",text:"text-white",border:"border-red-500",darkText:"text-red-600",darkBorder:"dark:border-red-600"},warning:{base:"bg-yellow-500",hover:"hover:bg-yellow-600",darkBase:"dark:bg-yellow-600",darkHover:"dark:hover:bg-yellow-700",text:"text-white",border:"border-yellow-500",darkText:"text-yellow-600",darkBorder:"dark:border-yellow-600"}};var d=e=>{let{variant:r,color:t="default",text:d,onClick:n,padding:s="px-4 py-2",type:i="button",children:l,size:c="medium",className:u}=e,x=[s,u,"rounded","focus:outline-none","transition-colors","duration-200","w-fit","ml-auto","hover:opacity-90"].join(" "),b=a[t],f=[b.base,b.hover,b.darkBase,b.darkHover,b.text,b.border,b.darkBorder].join(" "),k=["border",b.border,b.darkText,"dark:text-".concat(t,"-600")].join(" ");return(0,o.jsx)("button",{className:"".concat(x," ").concat({small:"text-xs !px-2 !py-1",medium:"",large:"text-xl"}[c]," ").concat("filled"===r?f:k),onClick:n,type:i,children:d||l})}},9141:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var o=t(7437),a=t(4033),d=t(2265),n=t(6690);function s(e){let{message:r,children:t,useHeader:s=!0}=e,i=(0,a.useRouter)(),[l,c]=(0,d.useState)(50);(0,d.useEffect)(()=>{let e=setInterval(()=>{c(e=>e-1),l<=0&&i.push("/dashboard")},100);return()=>clearInterval(e)},[l,i]);let u=(50-l)/50*100;return(0,o.jsx)("section",{className:"bg-white dark:bg-gray-900",children:(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 text-center",style:{height:"calc(100vh - ".concat(s?"6rem":"0px",")")},children:[(0,o.jsx)("h2",{className:"text-6xl font-extrabold text-indigo-950",children:r}),(0,o.jsxs)("p",{className:"text-sm text-gray-500",children:[(l/10).toFixed(0),"초 후 대시보드 페이지로 이동됩니다."]}),(0,o.jsx)("div",{className:"w-full max-w-md bg-gray-200 rounded",children:(0,o.jsx)("div",{className:"bg-indigo-950 h-2 rounded transition-all",style:{width:"".concat(u,"%")}})}),t,(0,o.jsxs)("div",{className:"flex gap-4 justify-center",children:[(0,o.jsx)(n.Z,{onClick:()=>i.push("/dashboard"),variant:"filled",className:"ml-auto mr-auto",text:"Home"}),(0,o.jsx)(n.Z,{onClick:i.back,variant:"outlined",className:"ml-auto mr-auto",text:"Back"})]})]})})}},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=t(2265),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var o,d={},l=null,c=null;for(o in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)n.call(r,o)&&!i.hasOwnProperty(o)&&(d[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===d[o]&&(d[o]=r[o]);return{$$typeof:a,type:e,key:l,ref:c,props:d,_owner:s.current}}r.Fragment=d,r.jsx=l,r.jsxs=l},7437:function(e,r,t){"use strict";e.exports=t(622)},4033:function(e,r,t){e.exports=t(8165)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=8337)}),_N_E=e.O()}]);