"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[605],{1770:function(e,a,t){var l=t(7437);a.Z=e=>{let{title:a}=e;return(0,l.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,l.jsx)("span",{className:"h-6 w-1 bg-blue-600 dark:bg-blue-200"}),(0,l.jsx)("h2",{className:"text-2xl font-semibold",children:a})]})}},4090:function(e,a,t){t.d(a,{Y8:function(){return i},cD:function(){return f},Ap:function(){return b},e9:function(){return j},rn:function(){return v},xv:function(){return N},aX:function(){return w}});var l=t(7437),s=t(2265),r=e=>{let{required:a}=e;return a?(0,l.jsx)("span",{className:"text-red-500 ml-1",children:"*"}):null},n=t(8941),i=e=>{let{labelText:a,value:t,setValue:s,radioList:i,required:c=!1,className:d,height:o=9,titleWidthClass:u}=e;return(0,l.jsxs)("div",{className:"border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ".concat(d||""," ").concat(o&&"h-".concat(o)),children:[(0,l.jsxs)("div",{className:"bg-gray-200 flex items-center h-full dark:bg-gray-800 px-2 ".concat(u||"w-1/3"),children:[a,c&&(0,l.jsx)(r,{required:c})]}),(0,l.jsx)("div",{className:"px-2 flex gap-8 items-center h-full ".concat(u?"w-full":"w-2/3"),children:i.map(e=>(0,l.jsxs)("label",{className:"relative flex items-center gap-2 cursor-pointer py-3",htmlFor:e.id,children:[(0,l.jsx)("input",{id:e.id,name:"type",type:"radio",onChange:()=>s(e),className:"appearance-none rounded-full h-3 w-3 border border-indigo-950"}),(0,l.jsx)("span",{className:t.id===e.id?"absolute h-3 w-3 flex justify-center items-center":"hidden",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-2 w-2",viewBox:"0 0 16 16",fill:n.DM["indigo-950"],children:(0,l.jsx)("circle",{cx:"8",cy:"8",r:"6"})})}),(0,l.jsx)("span",{children:e.label})]},e.id))})]})},c=t(2067),d=t.n(c),o=t(6848),u=t(4606),x=t(7846),m=e=>{let{label:a,value:t,setValue:s,timeType:r}=e,i="HOUR"===r?23:59;return(0,l.jsxs)("div",{className:"flex border border-gray-200",children:[(0,l.jsxs)("label",{htmlFor:a,className:"flex justify-between w-16",children:[(0,l.jsx)("input",{className:"w-full block px-2",type:"number",name:a,id:a,value:t,min:0,max:i,onChange:e=>{s(Math.min(i,Math.max(0,Number(e.target.value))))}}),(0,l.jsx)("button",{className:"text-gray-400 pr-2",type:"button",onClick:()=>{s(0)},"aria-label":"Delete",children:(0,l.jsx)(x.bqj,{})})]}),(0,l.jsx)("p",{className:"border-l border-gray-200 bg-gray-50 text-gray-300 text-xs px-2 flex items-center",children:n.Y8[r]})]})},h=t(9150),g=e=>{let{required:a,handleDisableToggle:t}=e;return a?null:(0,l.jsx)("button",{className:"absolute left-auto right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-950","aria-label":"Disable toggle",onClick:t,type:"button",children:(0,l.jsx)(h.LHV,{})})},f=e=>{let{minValue:a,setMinValue:t,maxValue:n,setMaxValue:i,labelRangeDate:c,required:x=!1,disabled:h=!1,className:f,useHour:b=!1,useMinute:p=!1,useSecond:j=!1,height:y=9,titleWidthClass:v}=e,[N,w]=(0,s.useState)(null),[k,M]=(0,s.useState)(h);(0,s.useEffect)(()=>{k&&!x&&(t(new Date),i(new Date))},[k,t,i,x]);let C=(e,a)=>{e instanceof Date&&("min"===a?t(e):i(e)),w(null)};return(0,l.jsxs)("div",{className:"border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ".concat(f||""," ").concat(y&&"h-".concat(y)),children:[(0,l.jsxs)("div",{className:"bg-gray-200 flex items-center h-full dark:bg-gray-800 px-2 ".concat(v||"w-1/3"),children:[c,x&&(0,l.jsx)(r,{required:x})]}),(0,l.jsxs)("div",{className:"px-2 h-full flex gap-4 items-center relative ".concat(k&&"bg-gray-50 text-gray-300"," ").concat(v?"w-full":"w-2/3"),children:[(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsxs)("button",{type:"button",className:"flex gap-2 items-center",disabled:h,onClick:()=>{k||w(e=>"min"===e?null:"min")},children:[d()(a).format("YYYY-MM-DD"),(0,l.jsx)(u.N4h,{})]}),b&&(0,l.jsx)(m,{value:a.getHours(),label:"minValue_hours",timeType:"HOUR",setValue:e=>{let l=new Date(a);l.setHours(e),t(l)}}),p&&(0,l.jsx)(m,{value:a.getMinutes(),label:"minValue_minutes",timeType:"MINUTE",setValue:e=>{let l=new Date(a);l.setMinutes(e),t(l)}}),j&&(0,l.jsx)(m,{value:a.getSeconds(),label:"minValue_seconds",timeType:"SECOND",setValue:e=>{let l=new Date(a);l.setMinutes(e),t(l)}})]}),"~",(0,l.jsxs)("div",{className:"flex gap-4",children:[(0,l.jsxs)("button",{type:"button",className:"flex gap-2 items-center",disabled:h,onClick:()=>{k||w(e=>"max"===e?null:"max")},children:[d()(n).format("YYYY-MM-DD"),(0,l.jsx)(u.N4h,{})]}),b&&(0,l.jsx)(m,{value:n.getHours(),label:"maxValue_hours",timeType:"HOUR",setValue:e=>{let a=new Date(n);a.setHours(e),i(a)}}),p&&(0,l.jsx)(m,{value:n.getMinutes(),label:"maxValue_minutes",timeType:"MINUTE",setValue:e=>{let a=new Date(n);a.setMinutes(e),i(a)}}),j&&(0,l.jsx)(m,{value:n.getSeconds(),label:"maxValue_seconds",timeType:"SECOND",setValue:e=>{let a=new Date(n);a.setMinutes(e),i(a)}})]}),!x&&(0,l.jsx)(g,{required:x,handleDisableToggle:()=>{M(!k),w(null)}}),(0,l.jsxs)("div",{className:"absolute z-20",style:{top:"120%"},children:[!h&&"min"===N&&(0,l.jsx)(o.Z,{locale:"ko",onChange:e=>C(e,"min"),value:a}),!h&&"max"===N&&(0,l.jsx)(o.Z,{locale:"ko",onChange:e=>C(e,"max"),value:n})]})]})]})},b=e=>{let{value:a,labelText:t,radioList:s}=e;return(0,l.jsxs)("div",{className:"h-9 relative border border-gray-200 dark:border-gray-800 flex items-center",children:[(0,l.jsx)("div",{className:"bg-gray-200 dark:bg-gray-800 h-full leading-9 px-2 w-1/3",children:t}),(0,l.jsx)("div",{className:"px-3 w-2/3 flex gap-8 items-center",children:s.map(e=>(0,l.jsxs)("label",{className:"relative flex items-center gap-2 cursor-pointer py-3",htmlFor:e,children:[(0,l.jsx)("input",{id:e,name:"type",type:"radio",readOnly:!0,checked:a===e,className:"appearance-none rounded-full h-3 w-3 border ".concat(a===e?"border-indigo-950":"border-gray-300")}),(0,l.jsx)("span",{className:a===e?"absolute h-3 w-3 flex justify-center items-center":"hidden",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-2 w-2",viewBox:"0 0 16 16",fill:n.DM["indigo-950"],children:(0,l.jsx)("circle",{cx:"8",cy:"8",r:"6"})})}),(0,l.jsx)("span",{className:a===e?"":"text-gray-300",children:e})]},e))})]})},p=t(5496),j=e=>{let{value:a,labelText:t,handleReset:s,handleUseRouter:r,callbackMessage:n,handleCallback:i}=e;return(0,l.jsxs)("div",{className:"h-9 relative border border-gray-200 dark:border-gray-800 flex items-center",children:[(0,l.jsx)("div",{className:"bg-gray-200 dark:bg-gray-800 h-full leading-9 px-2 w-1/3",children:t}),(0,l.jsxs)("div",{className:"h-full leading-9 px-2 w-2/3 flex justify-between items-center",children:[a,s&&(0,l.jsx)(p.Z,{variant:"outlined",onClick:s,size:"small",children:"초기화"}),r&&(0,l.jsx)(p.Z,{variant:"outlined",onClick:r,size:"small",children:"상세"}),n&&i&&(0,l.jsx)(p.Z,{variant:"outlined",onClick:i,size:"small",children:n})]})]})},y=t(2410),v=e=>{let{label:a,searchTerm:t,setSearchTerm:n,placeholder:i,required:c=!1,disabled:d=!1,selectedOption:o,setTypeOption:u,typeOptions:x}=e,[m,h]=(0,s.useState)(!1),[f,b]=(0,s.useState)(d);return(0,l.jsxs)("div",{className:"flex items-center h-9 border border-gray-200 dark:border-gray-800 w-1/2",children:[(0,l.jsxs)("div",{className:"h-full leading-9 relative w-1/3",children:[(0,l.jsxs)("button",{className:"relative bg-gray-200 dark:bg-gray-800 px-2 h-full w-full text-left",type:"button",onClick:()=>h(!m),disabled:f,children:[o.name,c&&(0,l.jsx)(r,{required:c}),(0,l.jsx)(y.Vmf,{className:"absolute top-1/2 right-2 transform -translate-y-1/2 transition-transform duration-200 ".concat(m?"":"transform rotate-180")})]}),m&&!f&&(0,l.jsx)("div",{className:"absolute mt-1 z-10 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform transform duration-100 ease-out",children:(0,l.jsx)("div",{className:"py-1",children:x.map(e=>(0,l.jsx)("button",{className:"text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ".concat(e.id===o.id?"font-bold":""),onClick:()=>{u(e),h(!1)},children:e.name},e.id))})})]}),(0,l.jsx)("label",{htmlFor:a,className:"w-2/3 h-full",children:(0,l.jsx)("input",{className:"block w-full h-full leading-8 px-2 ".concat(f?"bg-gray-50 text-gray-300":""),type:"text",id:a,value:t,placeholder:i||void 0,onChange:e=>n(e.target.value),disabled:f,required:c})}),!c&&(0,l.jsx)(g,{required:c,handleDisableToggle:()=>{c||(n(""),b(e=>!e))}})]})},N=e=>{let{label:a,value:t,setValue:n,labelText:i,placeholder:c,type:d,required:o=!1,disabled:u=!1,className:x,height:m=9,titleWidthClass:h}=e,[f,b]=(0,s.useState)(u);return(0,s.useEffect)(()=>{f&&!o&&n("")},[f,n,o]),(0,l.jsxs)("div",{className:"border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ".concat(x||""," ").concat(m&&"h-".concat(m)),children:[(0,l.jsxs)("label",{htmlFor:a,className:"h-full leading-9 bg-gray-200 dark:bg-gray-800 px-2 flex items-center ".concat(h||"w-1/3"),children:[i,o&&(0,l.jsx)(r,{required:o})]}),(0,l.jsx)("input",{className:"h-full leading-9 px-2 pr-8 ".concat(f?"bg-gray-50 text-gray-300":""," ").concat(h?"w-full":"w-2/3"),type:d||"text",id:a,value:t,placeholder:c,disabled:f,onChange:e=>n(e.target.value),required:o}),!o&&(0,l.jsx)(g,{required:o,handleDisableToggle:()=>{b(!f)}})]})},w=e=>{let{id:a,value:t,setValue:r,labelText:n,handleSave:i}=e,[c,d]=(0,s.useState)(!1),o=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(c){var e;null===(e=o.current)||void 0===e||e.focus()}},[c]),(0,l.jsxs)("div",{className:"h-9 relative border border-gray-200 dark:border-gray-800 flex items-center",children:[(0,l.jsx)("div",{className:"h-full leading-9 bg-gray-200 dark:bg-gray-800 px-2 w-1/3",children:n}),(0,l.jsxs)("div",{className:"h-full leading-9 px-2 w-2/3 flex justify-between items-center",children:[(0,l.jsx)("label",{htmlFor:a,className:"h-full py-1",children:(0,l.jsx)("input",{className:"w-60 block h-full ".concat(c?"bg-indigo-50":"bg-transparent"),type:"text",name:"",id:a,value:t,disabled:!c,ref:o,onChange:e=>{r(e.target.value)}})}),(0,l.jsx)(p.Z,{variant:c?"filled":"outlined",onClick:()=>{c?(i(),d(!1)):d(!0)},size:"small",children:c?"수정완료":"수정"})]})]})}},7469:function(e,a,t){t.r(a),t.d(a,{default:function(){return b}});var l=t(7437),s=t(2265),r=()=>(0,l.jsxs)("header",{className:"h-16 z-10 sticky top-0 left-0 bg-white flex items-center justify-end gap-4 p-4 shadow-md shadow-gray-200 dark:shadow-gray-800",children:[(0,l.jsxs)("p",{children:["안녕하세요, ",(0,l.jsx)("b",{children:"홍길동"}),"님"]}),(0,l.jsx)("button",{className:"border border-solid border-gray-400 dark:border-gray-300 rounded-md px-2 py-1",children:"로그아웃"})]}),n=t(8941),i=t(2167),c=t(7870),d=t(4033),o=t(227);let u=(e,a)=>e.some(e=>{if(e.path){let t=new RegExp(e.path);if(t.test(a))return!0}return!!(e.subMenu&&u(e.subMenu,a))}),x=(e,a)=>e.reduce((e,t)=>{let l=e+a;return t.subMenu&&(l+=x(t.subMenu,a)),l},0),m=(e,a,t,l)=>{let s=n.xw.levels[e]||{},r="function"==typeof s.text?s.text(a,t,l):s.text,i="function"==typeof s.font?s.font(l):s.font;return[n.xw.common,s.background,s.border,s.height,r,i,s.padding,"pl-".concat(4*e)].filter(Boolean).join(" ")};var h=e=>{var a;let{menu:t,level:r,isOpen:n,onClick:i}=e,c=(0,d.usePathname)(),u=c===t.path,x=(0,s.useMemo)(()=>m(r,u,n,t),[r,u,n,t]),h=n?o.zob:o.uaK;return(0,l.jsxs)("button",{className:"flex justify-between items-center ".concat(x),onClick:i,children:[t.name,0===r&&(null===(a=t.subMenu)||void 0===a?void 0:a.length)&&(0,l.jsx)(h,{className:"w-3"})]})};let g=e=>{let{menu:a,level:t}=e,r=(0,d.useRouter)(),n=(0,d.usePathname)(),o=(0,s.useMemo)(()=>a.subMenu||[],[a.subMenu]),m=!!(a.subMenu&&a.subMenu.length),[f,b]=(0,s.useState)(!1),[p,j]=(0,s.useState)(0);(0,s.useEffect)(()=>{j(f?x(o,36):0)},[f,o]),(0,s.useEffect)(()=>{let e=n===a.path,l=u(o,n);0===t?b(e||l):0!==t&&m&&b(!0)},[n,o,a,t,m]);let y=(0,s.useCallback)(()=>{a.path?r.push(a.path):m&&0===t&&b(e=>!e)},[a.path,m,t,r]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h,{menu:a,level:t,isOpen:f,onClick:y}),(0,l.jsx)(i.M,{children:f&&m&&(0,l.jsx)(c.E.div,{initial:"closed",animate:"open",exit:"closed",variants:{open:{opacity:1,height:p},closed:{opacity:0,height:0,overflow:"hidden"}},style:{overflow:"hidden"},children:o.map(e=>(0,l.jsx)(g,{menu:e,level:t+1},e.id))})})]})};var f=()=>(0,l.jsx)("nav",{className:"z-20 sticky top-0 left-0 bg-indigo-950 overflow-y-auto max-h-screen",children:n.sk.map(e=>(0,l.jsx)(g,{menu:e,level:0},e.id))});function b(e){let{children:a}=e;return(0,l.jsxs)("div",{className:"grid grid-cols-[12rem,1fr] h-screen text-gray-950 dark:text-gray-50 text-sm overflow-auto font-normal ",children:[(0,l.jsx)(f,{}),(0,l.jsxs)("div",{className:"flex flex-col relative bg-white z-0",children:[(0,l.jsx)(r,{}),(0,l.jsx)("div",{className:"p-4",children:(0,l.jsx)("main",{children:a})})]})]})}},7606:function(e,a,t){t.r(a),t.d(a,{default:function(){return c}});var l=t(7437),s=t(4033),r=t(2265),n=t(5496),i=t(8941);function c(e){let{message:a,children:t,useHeader:c=!0}=e,d=(0,s.useRouter)(),[o,u]=(0,r.useState)(i.RR);(0,r.useEffect)(()=>{let e=setInterval(()=>{u(e=>e-1),o<=0&&d.push("/dashboard")},100);return()=>clearInterval(e)},[o,d]);let x=(i.RR-o)/i.RR*100;return(0,l.jsx)("section",{className:"bg-white dark:bg-gray-900",children:(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 text-center",style:{height:"calc(100vh - ".concat(c?i.Cg:"0px",")")},children:[(0,l.jsx)("h2",{className:"text-6xl font-extrabold text-indigo-950",children:a}),(0,l.jsxs)("p",{className:"text-sm text-gray-500",children:[(o/10).toFixed(0),"초 후 대시보드 페이지로 이동됩니다."]}),(0,l.jsx)("div",{className:"w-full max-w-md bg-gray-200 rounded",children:(0,l.jsx)("div",{className:"bg-indigo-950 h-2 rounded transition-all",style:{width:"".concat(x,"%")}})}),t,(0,l.jsxs)("div",{className:"flex gap-4 justify-center",children:[(0,l.jsx)(n.Z,{onClick:()=>d.push("/dashboard"),variant:"filled",className:"ml-auto mr-auto",text:"Home"}),(0,l.jsx)(n.Z,{onClick:d.back,variant:"outlined",className:"ml-auto mr-auto",text:"Back"})]})]})})}},6644:function(e,a,t){t.r(a),t.d(a,{default:function(){return s}});var l=t(7437);function s(e){let{children:a}=e;return(0,l.jsx)("div",{className:"flex items-center justify-center w-screen h-screen",children:a})}t(2265)}}]);