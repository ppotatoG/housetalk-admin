(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9781:function(e,t,l){Promise.resolve().then(l.bind(l,379))},379:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return v}});var n=l(7437),a=l(8788),r=l.n(a);l(4729),l(2836),l(6518),l(2265);var s=l(3014),i=l(3633),o=l.n(i),c=l(3198),d=l(8941),u=()=>{let e=(0,c.v9)(e=>e.loading);return e?(0,n.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,n.jsx)(o(),{type:d.br.type,color:d.br.color})}):(0,n.jsx)(n.Fragment,{})},x=l(5496),f=l(4975),p=l(9150);let m={default:{style:"text-blue-500 bg-blue-100 rounded-full w-12 h-12 text-2xl",icon:(0,n.jsx)(p.ocf,{})},error:{style:"text-red-500 bg-red-100 rounded-full w-12 h-12 text-2xl",icon:(0,n.jsx)(p.SV5,{})},warning:{style:"text-yellow-500 bg-yellow-100 rounded-full w-12 h-12 text-2xl",icon:(0,n.jsx)(p.SR5,{})},success:{style:"text-green-500 bg-green-100 rounded-full w-12 h-12 text-2xl",icon:(0,n.jsx)(p.KP3,{})}};var g=e=>{let{type:t}=e,l=m[t];return(0,n.jsx)("div",{className:"flex justify-center items-center ".concat(m[t].style),children:l.icon})},y=e=>{let{id:t,title:l,description:a,type:r="default",callbackButton:s}=e,i=(0,c.I0)(),o=e=>{e.stopPropagation()};return(0,n.jsx)("div",{className:"fixed left-0 top-0 z-[1055] h-full w-full flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-900 bg-opacity-40 dark:bg-opacity-40 dark:bg-neutral-900",id:t,"aria-labelledby":"exampleModalLabel",onClick:()=>i((0,f.Mr)(t)),children:(0,n.jsx)("div",{className:"pointer-events-none transition-all duration-300 ease-in-out",onClick:e=>o(e),children:(0,n.jsxs)("div",{className:"pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg dark:bg-neutral-600 p-6 gap-8",children:[(0,n.jsxs)("div",{className:"flex gap-4 rounded-t-md",children:[(0,n.jsx)(g,{type:r}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h5",{className:"text-xl font-medium text-neutral-800 dark:text-neutral-200",children:l}),(0,n.jsx)("div",{className:"text-gray-400 mt-1",children:a})]})]}),(0,n.jsxs)("div",{className:"flex items-center justify-end gap-4 rounded-b-md",children:[(0,n.jsx)(x.Z,{variant:"outlined",color:r,text:"닫기",className:"!m-0",onClick:()=>i((0,f.Mr)(t))}),s&&(0,n.jsx)(x.Z,{variant:"filled",color:r,text:s.text,className:"!m-0",onClick:()=>{i({type:"modalCallback",payload:{callbackType:s.type,message:s.message}}),i((0,f.Mr)(t))}})]})]})})})},h=l(7368);let b=()=>{let e=(0,c.v9)(e=>e.modal);return 0===e.length?(0,n.jsx)(n.Fragment,{}):(0,n.jsx)(n.Fragment,{children:e.map(e=>(0,n.jsx)(y,{title:e.title,description:e.description,type:e.type,id:e.id,callbackButton:e.callbackButton},e.id))})};function j(e){let{children:t}=e;return(0,n.jsxs)(c.zt,{store:h.Z,children:[t,(0,n.jsx)(b,{})]})}function v(e){let{children:t}=e;return(0,n.jsx)("html",{lang:"ko",children:(0,n.jsx)("body",{className:r().className,suppressHydrationWarning:!0,children:(0,n.jsxs)(j,{children:[t,(0,n.jsx)(s.Ix,{}),(0,n.jsx)(u,{})]})})})}},9061:function(e,t,l){"use strict";l.d(t,{QP:function(){return r},Zk:function(){return s}});var n=l(64);let a=(0,n.oM)({name:"loading",initialState:!1,reducers:{showLoading:()=>!0,hideLoading:()=>!1}}),{showLoading:r,hideLoading:s}=a.actions;t.ZP=a.reducer},4975:function(e,t,l){"use strict";l.d(t,{K4:function(){return r},Mr:function(){return s}});var n=l(64);let a=(0,n.oM)({name:"modal",initialState:[],reducers:{showModal:(e,t)=>{e.push(t.payload)},closeModal:(e,t)=>{let l=e.findIndex(e=>e.id===t.payload);-1!==l&&e.splice(l,1)},closeAllModals:()=>[]}}),{showModal:r,closeModal:s,closeAllModals:i}=a.actions;t.ZP=a.reducer},7368:function(e,t,l){"use strict";l.d(t,{Z:function(){return c}});var n=l(64),a=l(9061),r=l(4975),s=l(3014),i=()=>e=>t=>("modalCallback"===t.type&&("TOAST_SUCCESS"===t.payload.callbackType?(0,s.Am)(t.payload.message,{hideProgressBar:!0,autoClose:2e3,type:"success",position:"top-right"}):"back"===t.payload.callbackType&&window.history.back()),e(t));let o=(0,n.xC)({reducer:{modal:r.ZP,loading:a.ZP},middleware:e=>e().concat(i)});var c=o},4729:function(){}},function(e){e.O(0,[712,64,198,565,496,971,596,744],function(){return e(e.s=9781)}),_N_E=e.O()}]);