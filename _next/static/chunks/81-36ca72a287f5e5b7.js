"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{6690:function(e,a,t){t.d(a,{Z:function(){return s}});var r=t(7437);t(2265);let l={default:{base:"bg-indigo-950",hover:"hover:bg-indigo-900",darkBase:"dark:bg-indigo-900",darkHover:"dark:hover:bg-indigo-100",text:"text-white",border:"border-indigo-950",darkText:"text-indigo-900",darkBorder:"dark:border-indigo-200"},error:{base:"bg-red-500",hover:"hover:bg-red-600",darkBase:"dark:bg-red-600",darkHover:"dark:hover:bg-red-700",text:"text-white",border:"border-red-500",darkText:"text-red-600",darkBorder:"dark:border-red-600"},warning:{base:"bg-yellow-500",hover:"hover:bg-yellow-600",darkBase:"dark:bg-yellow-600",darkHover:"dark:hover:bg-yellow-700",text:"text-white",border:"border-yellow-500",darkText:"text-yellow-600",darkBorder:"dark:border-yellow-600"}};var s=e=>{let{variant:a,color:t="default",text:s,onClick:n,padding:i="px-4 py-2",type:d="button",children:o,size:c="medium",className:u}=e,x=[i,u,"rounded","focus:outline-none","transition-colors","duration-200","w-fit","ml-auto","hover:opacity-90"].join(" "),m=l[t],h=[m.base,m.hover,m.darkBase,m.darkHover,m.text,m.border,m.darkBorder].join(" "),g=["border",m.border,m.darkText,"dark:text-".concat(t,"-600")].join(" ");return(0,r.jsx)("button",{className:"".concat(x," ").concat({small:"text-xs !px-2 !py-1",medium:"",large:"text-xl"}[c]," ").concat("filled"===a?h:g),onClick:n,type:d,children:s||o})}},1770:function(e,a,t){var r=t(7437);a.Z=e=>{let{title:a}=e;return(0,r.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,r.jsx)("span",{className:"h-6 w-1 bg-blue-600 dark:bg-blue-200"}),(0,r.jsx)("h2",{className:"text-2xl font-semibold",children:a})]})}},6058:function(e,a,t){t.d(a,{Y8:function(){return n},cD:function(){return b},Ap:function(){return f},e9:function(){return v},rn:function(){return j},xv:function(){return w},aX:function(){return N}});var r=t(7437),l=t(2265),s=e=>{let{required:a}=e;return a?(0,r.jsx)("span",{className:"text-red-500 ml-1",children:"*"}):null},n=e=>{let{labelText:a,value:t,setValue:l,radioList:n,required:i=!1,className:d}=e;return(0,r.jsxs)("div",{className:"h-9 relative border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ".concat(d&&d),children:[(0,r.jsxs)("div",{className:"bg-gray-200 dark:bg-gray-800 h-full leading-9 line-clamp-1 w-1/3 px-2",children:[a,i&&(0,r.jsx)(s,{required:i})]}),(0,r.jsx)("div",{className:"px-2 w-2/3 flex gap-8 items-center",children:n.map(e=>(0,r.jsxs)("label",{className:"relative flex items-center gap-2 cursor-pointer py-3",htmlFor:e.id,children:[(0,r.jsx)("input",{id:e.id,name:"type",type:"radio",onChange:()=>l(e),className:"appearance-none rounded-full h-3 w-3 border border-indigo-950"}),(0,r.jsx)("span",{className:t.id===e.id?"absolute h-3 w-3 flex justify-center items-center":"hidden",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-2 w-2",viewBox:"0 0 16 16",fill:"#1d1b4b",children:(0,r.jsx)("circle",{cx:"8",cy:"8",r:"6"})})}),(0,r.jsx)("span",{children:e.label})]},e.id))})]})},i=t(2067),d=t.n(i),o=t(6848),c=t(4606),u=t(7846);let x={HOUR:"시",MINUTE:"분",SECOND:"초"};var m=e=>{let{label:a,value:t,setValue:l,timeType:s}=e,n="HOUR"===s?23:59;return(0,r.jsxs)("div",{className:"flex border border-gray-200",children:[(0,r.jsxs)("label",{htmlFor:a,className:"flex justify-between w-16",children:[(0,r.jsx)("input",{className:"w-full block px-2",type:"number",name:a,id:a,value:t,min:0,max:n,onChange:e=>{l(Math.min(n,Math.max(0,Number(e.target.value))))}}),(0,r.jsx)("button",{className:"text-gray-400 pr-2",type:"button",onClick:()=>{l(0)},"aria-label":"Delete",children:(0,r.jsx)(u.bqj,{})})]}),(0,r.jsx)("p",{className:"border-l border-gray-200 bg-gray-50 text-gray-300 text-xs px-2",children:x[s]})]})},h=t(9150),g=e=>{let{required:a,handleDisableToggle:t}=e;return a?null:(0,r.jsx)("button",{className:"absolute left-auto right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-950","aria-label":"Disable toggle",onClick:t,type:"button",children:(0,r.jsx)(h.LHV,{})})},b=e=>{let{minValue:a,setMinValue:t,maxValue:n,setMaxValue:i,labelRangeDate:u,required:x=!1,disabled:h=!1,className:b,useHour:f=!1,useMinute:p=!1,useSecond:v=!1}=e,[y,j]=(0,l.useState)(null),[w,N]=(0,l.useState)(h);(0,l.useEffect)(()=>{w&&!x&&(t(new Date),i(new Date))},[w,t,i,x]);let k=(e,a)=>{e instanceof Date&&("min"===a?t(e):i(e)),j(null)};return(0,r.jsxs)("div",{className:"h-9 border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ".concat(b||""),children:[(0,r.jsxs)("div",{className:"bg-gray-200 h-full leading-9 dark:bg-gray-800 px-2 w-1/3",children:[u,x&&(0,r.jsx)(s,{required:x})]}),(0,r.jsxs)("div",{className:"px-2 h-full flex gap-4 items-center w-2/3 relative ".concat(w&&"bg-gray-50 text-gray-300"),children:[(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsxs)("button",{type:"button",className:"flex gap-2 items-center",disabled:h,onClick:()=>{w||j(e=>"min"===e?null:"min")},children:[d()(a).format("YYYY-MM-DD"),(0,r.jsx)(c.N4h,{})]}),f&&(0,r.jsx)(m,{value:a.getHours(),label:"minValue_hours",timeType:"HOUR",setValue:e=>{let r=new Date(a);r.setHours(e),t(r)}}),p&&(0,r.jsx)(m,{value:a.getMinutes(),label:"minValue_minutes",timeType:"MINUTE",setValue:e=>{let r=new Date(a);r.setMinutes(e),t(r)}}),v&&(0,r.jsx)(m,{value:a.getSeconds(),label:"minValue_seconds",timeType:"SECOND",setValue:e=>{let r=new Date(a);r.setMinutes(e),t(r)}})]}),"~",(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsxs)("button",{type:"button",className:"flex gap-2 items-center",disabled:h,onClick:()=>{w||j(e=>"max"===e?null:"max")},children:[d()(n).format("YYYY-MM-DD"),(0,r.jsx)(c.N4h,{})]}),f&&(0,r.jsx)(m,{value:n.getHours(),label:"maxValue_hours",timeType:"HOUR",setValue:e=>{let a=new Date(n);a.setHours(e),i(a)}}),p&&(0,r.jsx)(m,{value:n.getMinutes(),label:"maxValue_minutes",timeType:"MINUTE",setValue:e=>{let a=new Date(n);a.setMinutes(e),i(a)}}),v&&(0,r.jsx)(m,{value:n.getSeconds(),label:"maxValue_seconds",timeType:"SECOND",setValue:e=>{let a=new Date(n);a.setMinutes(e),i(a)}})]}),!x&&(0,r.jsx)(g,{required:x,handleDisableToggle:()=>{N(!w),j(null)}}),(0,r.jsxs)("div",{className:"absolute z-20",style:{top:"120%"},children:[!h&&"min"===y&&(0,r.jsx)(o.Z,{locale:"ko",onChange:e=>k(e,"min"),value:a}),!h&&"max"===y&&(0,r.jsx)(o.Z,{locale:"ko",onChange:e=>k(e,"max"),value:n})]})]})]})},f=e=>{let{value:a,labelText:t,radioList:l}=e;return(0,r.jsxs)("div",{className:"h-9 relative border border-gray-200 dark:border-gray-800 flex items-center",children:[(0,r.jsx)("div",{className:"bg-gray-200 dark:bg-gray-800 h-full leading-9 px-2 w-1/3",children:t}),(0,r.jsx)("div",{className:"px-3 w-2/3 flex gap-8 items-center",children:l.map(e=>(0,r.jsxs)("label",{className:"relative flex items-center gap-2 cursor-pointer py-3",htmlFor:e,children:[(0,r.jsx)("input",{id:e,name:"type",type:"radio",checked:a===e,readOnly:!0,className:"appearance-none rounded-full h-3 w-3 border ".concat(a===e?"border-indigo-950":"border-gray-300")}),(0,r.jsx)("span",{className:a===e?"absolute h-3 w-3 flex justify-center items-center":"hidden",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-2 w-2",viewBox:"0 0 16 16",fill:"#1d1b4b",children:(0,r.jsx)("circle",{cx:"8",cy:"8",r:"6"})})}),(0,r.jsx)("span",{className:a===e?"":"text-gray-300",children:e})]},e))})]})},p=t(6690),v=e=>{let{value:a,labelText:t,handleReset:l,handleUseRouter:s,callbackMessage:n,handleCallback:i}=e;return(0,r.jsxs)("div",{className:"h-9 relative border border-gray-200 dark:border-gray-800 flex items-center",children:[(0,r.jsx)("div",{className:"bg-gray-200 dark:bg-gray-800 h-full leading-9 px-2 w-1/3",children:t}),(0,r.jsxs)("div",{className:"h-full leading-9 px-2 w-2/3 flex justify-between items-center",children:[a,l&&(0,r.jsx)(p.Z,{variant:"outlined",onClick:l,size:"small",children:"초기화"}),s&&(0,r.jsx)(p.Z,{variant:"outlined",onClick:s,size:"small",children:"상세"}),n&&i&&(0,r.jsx)(p.Z,{variant:"outlined",onClick:i,size:"small",children:n})]})]})},y=t(2410),j=e=>{let{label:a,searchTerm:t,setSearchTerm:n,placeholder:i,required:d=!1,disabled:o=!1,selectedOption:c,setTypeOption:u,typeOptions:x}=e,[m,h]=(0,l.useState)(!1),[b,f]=(0,l.useState)(o);return(0,r.jsxs)("div",{className:"flex items-center h-9 border border-gray-200 dark:border-gray-800 w-1/2",children:[(0,r.jsxs)("div",{className:"h-full leading-9 relative w-1/3",children:[(0,r.jsxs)("button",{className:"relative bg-gray-200 dark:bg-gray-800 px-2 h-full w-full text-left",type:"button",onClick:()=>h(!m),disabled:b,children:[c.name,d&&(0,r.jsx)(s,{required:d}),(0,r.jsx)(y.Vmf,{className:"absolute top-1/2 right-2 transform -translate-y-1/2 transition-transform duration-200 ".concat(m?"":"transform rotate-180")})]}),m&&!b&&(0,r.jsx)("div",{className:"absolute mt-1 z-10 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform transform duration-100 ease-out",children:(0,r.jsx)("div",{className:"py-1",children:x.map(e=>(0,r.jsx)("button",{className:"text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ".concat(e.id===c.id?"font-bold":""),onClick:()=>{u(e),h(!1)},children:e.name},e.id))})})]}),(0,r.jsx)("label",{htmlFor:a,className:"w-2/3 h-full",children:(0,r.jsx)("input",{className:"block w-full h-full leading-8 px-2 ".concat(b?"bg-gray-50 text-gray-300":""),type:"text",id:a,value:t,placeholder:i||void 0,onChange:e=>n(e.target.value),disabled:b,required:d})}),!d&&(0,r.jsx)(g,{required:d,handleDisableToggle:()=>{d||(n(""),f(e=>!e))}})]})},w=e=>{let{label:a,value:t,setValue:n,labelText:i,placeholder:d,type:o,required:c=!1,disabled:u=!1,className:x}=e,[m,h]=(0,l.useState)(u);return(0,l.useEffect)(()=>{m&&!c&&n("")},[m,n,c]),(0,r.jsxs)("div",{className:"h-9 relative border border-gray-200 dark:border-gray-800 flex items-center w-1/2 ".concat(x||""),children:[(0,r.jsxs)("label",{htmlFor:a,className:"h-full leading-9 bg-gray-200 dark:bg-gray-800 px-2 w-1/3",children:[i,c&&(0,r.jsx)(s,{required:c})]}),(0,r.jsx)("input",{className:"h-full leading-9 px-2 w-2/3 pr-8 ".concat(m?"bg-gray-50 text-gray-300":""),type:o||"text",id:a,value:t,placeholder:d,disabled:m,onChange:e=>n(e.target.value),required:c}),!c&&(0,r.jsx)(g,{required:c,handleDisableToggle:()=>{h(!m)}})]})},N=e=>{let{id:a,value:t,setValue:s,labelText:n,handleSave:i}=e,[d,o]=(0,l.useState)(!1),c=(0,l.useRef)(null);return(0,l.useEffect)(()=>{if(d){var e;null===(e=c.current)||void 0===e||e.focus()}},[d]),(0,r.jsxs)("div",{className:"h-9 relative border border-gray-200 dark:border-gray-800 flex items-center",children:[(0,r.jsx)("div",{className:"h-full leading-9 bg-gray-200 dark:bg-gray-800 px-2 w-1/3",children:n}),(0,r.jsxs)("div",{className:"h-full leading-9 px-2 w-2/3 flex justify-between items-center",children:[(0,r.jsx)("label",{htmlFor:a,className:"h-full py-1",children:(0,r.jsx)("input",{className:"w-60 block h-full ".concat(d?"bg-indigo-50":"bg-transparent"),type:"text",name:"",id:a,value:t,disabled:!d,ref:c,onChange:e=>{s(e.target.value)}})}),(0,r.jsx)(p.Z,{variant:d?"filled":"outlined",onClick:()=>{d?(i(),o(!1)):o(!0)},size:"small",children:d?"수정완료":"수정"})]})]})}},548:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});var r=t(7437),l=t(2265),s=()=>(0,r.jsxs)("header",{className:"h-16 z-10 sticky top-0 left-0 bg-white flex items-center justify-end gap-4 p-4 shadow-md shadow-gray-200 dark:shadow-gray-800",children:[(0,r.jsxs)("p",{children:["안녕하세요, ",(0,r.jsx)("b",{children:"홍길동"}),"님"]}),(0,r.jsx)("button",{className:"border border-solid border-gray-400 dark:border-gray-300 rounded-md px-2 py-1",children:"로그아웃"})]});let n=[{id:1,name:"대시보드",path:"/dashboard"},{id:2,name:"회원관리",path:"/users"},{id:3,name:"전시 관리",subMenu:[{id:301,name:"메인 페이지",subMenu:[{id:3011,name:"앱 배너",path:"/exhibition/main/banner"},{id:3012,name:"인기 집 리뷰",path:"/exhibition/main/reviews"}]},{id:302,name:"서브 페이지",subMenu:[{id:3021,name:"추천아이템 상단 아이콘",path:"/exhibition/sub/recommended"}]}]},{id:4,name:"정보제공",subMenu:[{id:401,name:"정보제공 등록하기",path:"/information/register"},{id:402,name:"정보 전체 보기",path:"/information/view"}]},{id:5,name:"고객센터",subMenu:[{id:501,name:"공지사항",path:"/cs/notice"},{id:502,name:"약관관리",path:"/cs/terms"},{id:503,name:"FAQ",path:"/cs/faq"}]}];var i=t(2167),d=t(7870),o=t(4033),c=t(227);let u={common:"p-4 w-full cursor-pointer transition-colors duration-300 ease-in-out",levels:{0:{background:"bg-indigo-950",border:"border-b border-gray-100 border-opacity-50",height:"h-14",font:"hover:text-yellow-500",text:(e,a,t)=>e||a&&t.subMenu?"text-yellow-500":"text-white"},1:{background:"bg-gray-300",text:"text-gray-700",padding:"py-2",font:e=>e.subMenu?"font-semibold":"hover:text-indigo-700"},2:{background:"bg-gray-300",text:e=>e?"text-indigo-700":"text-gray-700",padding:"py-2",font:"hover:text-indigo-700"}}},x=(e,a)=>e.some(e=>{if(e.path){let t=new RegExp(e.path);if(t.test(a))return!0}return!!(e.subMenu&&x(e.subMenu,a))}),m=(e,a)=>e.reduce((e,t)=>{let r=e+a;return t.subMenu&&(r+=m(t.subMenu,a)),r},0),h=(e,a,t,r)=>{let l=u.levels[e]||{},s="function"==typeof l.text?l.text(a,t,r):l.text,n="function"==typeof l.font?l.font(r):l.font;return[u.common,l.background,l.border,l.height,s,n,l.padding,"pl-".concat(4*e)].filter(Boolean).join(" ")};var g=e=>{var a;let{menu:t,level:s,isOpen:n,onClick:i}=e,d=(0,o.usePathname)(),u=d===t.path,x=(0,l.useMemo)(()=>h(s,u,n,t),[s,u,n,t]),m=n?c.zob:c.uaK;return(0,r.jsxs)("button",{className:"flex justify-between items-center ".concat(x),onClick:i,children:[t.name,0===s&&(null===(a=t.subMenu)||void 0===a?void 0:a.length)&&(0,r.jsx)(m,{className:"w-3"})]})};let b=e=>{let{menu:a,level:t}=e,s=(0,o.useRouter)(),n=(0,o.usePathname)(),c=(0,l.useMemo)(()=>a.subMenu||[],[a.subMenu]),u=!!(a.subMenu&&a.subMenu.length),[h,f]=(0,l.useState)(!1),[p,v]=(0,l.useState)(0);(0,l.useEffect)(()=>{v(h?m(c,36):0)},[h,c]),(0,l.useEffect)(()=>{let e=n===a.path,r=x(c,n);0===t?f(e||r):0!==t&&u&&f(!0)},[n,c,a,t,u]);let y=(0,l.useCallback)(()=>{a.path?s.push(a.path):u&&0===t&&f(e=>!e)},[a.path,u,t,s]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{menu:a,level:t,isOpen:h,onClick:y}),(0,r.jsx)(i.M,{children:h&&u&&(0,r.jsx)(d.E.div,{initial:"closed",animate:"open",exit:"closed",variants:{open:{opacity:1,height:p},closed:{opacity:0,height:0,overflow:"hidden"}},style:{overflow:"hidden"},children:c.map(e=>(0,r.jsx)(b,{menu:e,level:t+1},e.id))})})]})};var f=()=>(0,r.jsx)("nav",{className:"z-20 sticky top-0 left-0 bg-indigo-950 overflow-y-auto max-h-screen",children:n.map(e=>(0,r.jsx)(b,{menu:e,level:0},e.id))});function p(e){let{children:a}=e;return(0,r.jsxs)("div",{className:"grid grid-cols-[12rem,1fr] h-screen text-gray-950 dark:text-gray-50 text-sm overflow-auto font-normal ",children:[(0,r.jsx)(f,{}),(0,r.jsxs)("div",{className:"flex flex-col relative bg-white z-0",children:[(0,r.jsx)(s,{}),(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("main",{children:a})})]})]})}},9141:function(e,a,t){t.r(a),t.d(a,{default:function(){return i}});var r=t(7437),l=t(4033),s=t(2265),n=t(6690);function i(e){let{message:a,children:t,useHeader:i=!0}=e,d=(0,l.useRouter)(),[o,c]=(0,s.useState)(50);(0,s.useEffect)(()=>{let e=setInterval(()=>{c(e=>e-1),o<=0&&d.push("/dashboard")},100);return()=>clearInterval(e)},[o,d]);let u=(50-o)/50*100;return(0,r.jsx)("section",{className:"bg-white dark:bg-gray-900",children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 text-center",style:{height:"calc(100vh - ".concat(i?"6rem":"0px",")")},children:[(0,r.jsx)("h2",{className:"text-6xl font-extrabold text-indigo-950",children:a}),(0,r.jsxs)("p",{className:"text-sm text-gray-500",children:[(o/10).toFixed(0),"초 후 대시보드 페이지로 이동됩니다."]}),(0,r.jsx)("div",{className:"w-full max-w-md bg-gray-200 rounded",children:(0,r.jsx)("div",{className:"bg-indigo-950 h-2 rounded transition-all",style:{width:"".concat(u,"%")}})}),t,(0,r.jsxs)("div",{className:"flex gap-4 justify-center",children:[(0,r.jsx)(n.Z,{onClick:()=>d.push("/dashboard"),variant:"filled",className:"ml-auto mr-auto",text:"Home"}),(0,r.jsx)(n.Z,{onClick:d.back,variant:"outlined",className:"ml-auto mr-auto",text:"Back"})]})]})})}},6644:function(e,a,t){t.r(a),t.d(a,{default:function(){return l}});var r=t(7437);function l(e){let{children:a}=e;return(0,r.jsx)("div",{className:"flex items-center justify-center w-screen h-screen",children:a})}t(2265)},4058:function(e,a,t){t.d(a,{j:function(){return r}});let r={USERS:"회원 조회",USERS_DETAIL:"회원정보 상세조회",EXHIBITION_MAIN_BANNER:"앱 배너"}}}]);