(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9781:function(e,t,l){Promise.resolve().then(l.bind(l,7812))},7812:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return b}});var a=l(7437),n=l(8788),s=l.n(n);l(4729),l(2836),l(6518),l(2265);var r=l(3014),i=l(3198),o=l(5496),d=l(4975),c=l(9150);let u={default:{style:"text-blue-500 bg-blue-100 rounded-full w-12 h-12 text-2xl",icon:(0,a.jsx)(c.ocf,{})},error:{style:"text-red-500 bg-red-100 rounded-full w-12 h-12 text-2xl",icon:(0,a.jsx)(c.SV5,{})},warning:{style:"text-yellow-500 bg-yellow-100 rounded-full w-12 h-12 text-2xl",icon:(0,a.jsx)(c.SR5,{})},success:{style:"text-green-500 bg-green-100 rounded-full w-12 h-12 text-2xl",icon:(0,a.jsx)(c.KP3,{})}};var x=e=>{let{type:t}=e,l=u[t];return(0,a.jsx)("div",{className:"flex justify-center items-center ".concat(u[t].style),children:l.icon})},p=e=>{let{id:t,title:l,description:n,type:s="default",callbackButton:r}=e,c=(0,i.I0)(),u=e=>{e.stopPropagation()};return(0,a.jsx)("div",{className:"fixed left-0 top-0 z-[1055] h-full w-full flex items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-900 bg-opacity-40 dark:bg-opacity-40 dark:bg-neutral-900",id:t,"aria-labelledby":"exampleModalLabel",onClick:()=>c((0,d.Mr)(t)),children:(0,a.jsx)("div",{className:"pointer-events-none transition-all duration-300 ease-in-out",onClick:e=>u(e),children:(0,a.jsxs)("div",{className:"pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg dark:bg-neutral-600 p-6 gap-8",children:[(0,a.jsxs)("div",{className:"flex gap-4 rounded-t-md",children:[(0,a.jsx)(x,{type:s}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h5",{className:"text-xl font-medium text-neutral-800 dark:text-neutral-200",children:l}),(0,a.jsx)("div",{className:"text-gray-400 mt-1",children:n})]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-end gap-4 rounded-b-md",children:[(0,a.jsx)(o.Z,{variant:"outlined",color:s,text:"닫기",className:"!m-0",onClick:()=>c((0,d.Mr)(t))}),r&&(0,a.jsx)(o.Z,{variant:"filled",color:s,text:r.text,className:"!m-0",onClick:()=>{c({type:"modalCallback",payload:{callbackType:r.type,message:r.message}}),c((0,d.Mr)(t))}})]})]})})})},f=l(64),m=()=>e=>t=>("modalCallback"===t.type&&("TOAST_SUCCESS"===t.payload.callbackType?(0,r.Am)(t.payload.message,{hideProgressBar:!0,autoClose:2e3,type:"success",position:"top-right"}):"back"===t.payload.callbackType&&window.history.back()),e(t));let h=(0,f.xC)({reducer:{modal:d.ZP},middleware:e=>e().concat(m)}),y=()=>{let e=(0,i.v9)(e=>e.modal);return 0===e.length?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(a.Fragment,{children:e.map(e=>(0,a.jsx)(p,{title:e.title,description:e.description,type:e.type,id:e.id,callbackButton:e.callbackButton},e.id))})};function g(e){let{children:t}=e;return(0,a.jsxs)(i.zt,{store:h,children:[t,(0,a.jsx)(y,{})]})}function b(e){let{children:t}=e;return(0,a.jsx)("html",{lang:"ko",children:(0,a.jsx)("body",{className:s().className,suppressHydrationWarning:!0,children:(0,a.jsxs)(g,{children:[t,(0,a.jsx)(r.Ix,{})]})})})}},4975:function(e,t,l){"use strict";l.d(t,{K4:function(){return s},Mr:function(){return r}});var a=l(64);let n=(0,a.oM)({name:"modal",initialState:[],reducers:{showModal:(e,t)=>{e.push(t.payload)},closeModal:(e,t)=>{let l=e.findIndex(e=>e.id===t.payload);-1!==l&&e.splice(l,1)},closeAllModals:()=>[]}}),{showModal:s,closeModal:r,closeAllModals:i}=n.actions;t.ZP=n.reducer},4729:function(){}},function(e){e.O(0,[712,141,872,496,971,596,744],function(){return e(e.s=9781)}),_N_E=e.O()}]);