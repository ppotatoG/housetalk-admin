(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{2728:function(e,t,a){Promise.resolve().then(a.bind(a,1282)),Promise.resolve().then(a.bind(a,3887)),Promise.resolve().then(a.bind(a,5112)),Promise.resolve().then(a.bind(a,478))},1282:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var s=a(7437),r=a(8920);a(2265);var l=a(7980),n=a(8910),i=e=>{let{data:t,title:a,now:r}=e,l=e=>{let t=new Date(e),a=r.getTime()-t.getTime(),s=Math.floor(a/6e4),l=Math.floor(s/60),n=Math.floor(l/24),i=Math.floor(n/30);return Math.floor(n/365)>=1?"1년 전":i>0?"".concat(i,"달 전"):n>0?"".concat(n,"일 전"):l>0?"".concat(l,"시간 전"):"".concat(s,"분 전")};return(0,s.jsxs)("div",{className:"w-1/3 grow rounded-lg border border-gray-200 dark:border-gray-800",children:[(0,s.jsxs)("h4",{className:"flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2",children:[a,(0,s.jsx)("div",{className:"text-blue-600 dark:text-blue-200",children:(0,s.jsx)(n.Bqb,{})})]}),(0,s.jsx)("ul",{children:t.map((e,t)=>(0,s.jsxs)("li",{className:"py-2 flex justify-between p-2",children:[(0,s.jsx)("p",{className:"truncate w-4/5 text-left",children:e.title}),(0,s.jsx)("p",{className:"text-right w-1/5 text-gray-200 dark:text-gray-800",children:l(e.update_at)})]},t))})]})},d=e=>{let{freeData:t,recommendData:a,reviewData:r,now:n}=e;return(0,s.jsxs)("div",{className:"w-full mt-2",children:[(0,s.jsx)("h1",{className:"text-black text-base font-semibold mb-2",children:l.ob.BOARD_UPLOAD_STATUS}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(i,{data:t,title:l.DJ.free,now:n}),(0,s.jsx)(i,{data:a,title:l.DJ.recommend,now:n}),(0,s.jsx)(i,{data:r,title:l.DJ.review,now:n})]})]})},c=a(6704),o=a(105),u=e=>{let{chartData:t,options:a}=e;return(0,s.jsx)(o.$I,{data:t,options:a,plugins:[{id:"genderStatistics",afterDraw:e=>{var t,a;let s=e.ctx;if(!s)return;s.font="12px",s.textAlign="center";let r=e.data.labels,l=null===(a=e.data.datasets)||void 0===a?void 0:null===(t=a[0])||void 0===t?void 0:t.data,n=r.indexOf("male"),i=r.indexOf("female"),d=l[n]||0,c=l[i]||0,o=d+c,u=Math.round(d/o*100),x=Math.round(c/o*100),h=u>x?"남 ".concat(u,"%"):"여 ".concat(x,"%");s.fillText(h,e.width/2,e.height/2)}}]})};c.kL.register(c.uw,c.f$,c.ZL,c.Dx,c.u,c.De,c.qi);var x=e=>{let{data:t}=e,a=t.map(e=>e.gender),r={labels:["female","male"],datasets:[{data:t.map(e=>e.count),backgroundColor:a.map(e=>"female"===e?l.ZE.light.female:l.ZE.light.male)}]};return(0,s.jsxs)("div",{className:"w-1/3 h-full",children:[(0,s.jsx)("h1",{className:"text-black text-base font-semibold mb-2",children:l.ob.USER_GENDER_STATISTICS}),(0,s.jsx)("div",{className:"p-6 h-full rounded-lg border border-gray-200 dark:border-gray-800",children:(0,s.jsx)(u,{chartData:r,options:l.E6})})]})},h=e=>{let{chartData:t,options:a}=e;return(0,s.jsx)(o.$Q,{data:t,options:a,plugins:[{id:"customPlugin",afterDraw:e=>{var t;let a=e.ctx;a&&(a.font="12px",a.textAlign="center",a.textBaseline="bottom",null===(t=e.data.datasets)||void 0===t||t.forEach((t,s)=>{let r=e.getDatasetMeta(s);r.data.forEach((e,s)=>{var r;let l=null===(r=t.data)||void 0===r?void 0:r[s];"number"==typeof l&&a.fillText(String(l),e.x,e.y-5)})}))}}]})};c.kL.register(c.uw,c.f$,c.ZL,c.Dx,c.u,c.De);var m=e=>{let{data:t,today:a}=e,r=t.slice(0,6).reverse(),n=r.map(e=>e.date.slice(-5).replace(/-/g,".")),i=r.map(e=>e.daily),d={labels:n,datasets:[{data:i,backgroundColor:r.map(e=>a===e.date.replace(/-/g,".")?l.ZE.light.accent:l.ZE.light.primary),barThickness:15}]};return(0,s.jsxs)("div",{className:"relative flex-grow",children:[(0,s.jsx)("h1",{className:"text-black text-base font-semibold mb-2",children:l.ob.USER_SUBSCRIPTION_TREND}),(0,s.jsxs)("div",{className:"flex justify-between items-center rounded-lg border py-4 border-gray-200 dark:border-gray-800",children:[(0,s.jsx)("div",{className:"w-4/5",children:(0,s.jsx)(h,{chartData:d,options:l.vH})}),(0,s.jsxs)("p",{className:"flex text-gray text-xs w-1/5",children:["누적 가입 수",(0,s.jsx)("span",{className:"text-blue-600 dark:text-blue-400",children:r[r.length-1].date})]})]})]})},f=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 text-blue-600 dark:text-blue-400",children:[(0,s.jsx)("p",{children:(()=>{let e=new Date,t=e.toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",weekday:"short"});return"".concat(t.replace(/\.\s/g,".")," ").concat(e.getHours().toString().padStart(2,"0"),"시 ").concat(e.getMinutes().toString().padStart(2,"0"),"분")})()}),(0,s.jsx)("button",{"aria-label":"refresh",children:(0,s.jsx)(r.Qxo,{})})]}),(0,s.jsxs)("div",{className:"flex gap-2 mt-6 h-full",children:[(0,s.jsx)(m,{data:l.X8,today:"2023.09.19"}),(0,s.jsx)(x,{data:l._9})]}),(0,s.jsx)(d,{freeData:l.ME,recommendData:l.L3,reviewData:l.f2,now:new Date})]})},3887:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var s=a(7437),r=a(2265),l=()=>(0,s.jsxs)("header",{className:"h-16 z-10 sticky top-0 left-0 bg-white flex items-center justify-end gap-4 p-4 shadow-md shadow-gray-200 dark:shadow-gray-800",children:[(0,s.jsxs)("p",{children:["안녕하세요, ",(0,s.jsx)("b",{children:"홍길동"}),"님"]}),(0,s.jsx)("button",{className:"border border-solid border-gray-400 dark:border-gray-300 rounded-md px-2 py-1",children:"로그아웃"})]}),n=a(7980),i=a(2167),d=a(5251),c=a(4033),o=a(227),u=a(3407);let x=(e,t)=>e.some(e=>e.path===t||!!(e.subMenu&&x(e.subMenu,t))),h=(e,t)=>e.reduce((e,a)=>{let s=e+t;return a.subMenu&&(s+=h(a.subMenu,t)),s},0),m=(e,t,a,s)=>{let r=u.x.levels[e]||{},l="function"==typeof r.text?r.text(t,a,s):r.text,n="function"==typeof r.font?r.font(s):r.font;return[u.x.common,r.background,r.border,r.height,l,n,r.padding,"pl-".concat(4*e)].filter(Boolean).join(" ")};var f=e=>{var t;let{menu:a,level:l,isOpen:n,onClick:i}=e,d=(0,c.usePathname)(),u=d===a.path,x=(0,r.useMemo)(()=>m(l,u,n,a),[l,u,n,a]),h=n?o.zob:o.uaK;return(0,s.jsxs)("button",{className:"flex justify-between items-center ".concat(x),onClick:i,children:[a.name,0===l&&(null===(t=a.subMenu)||void 0===t?void 0:t.length)&&(0,s.jsx)(h,{className:"w-3"})]})};let g=e=>{let{menu:t,level:a}=e,l=(0,c.useRouter)(),n=(0,c.usePathname)(),o=(0,r.useMemo)(()=>t.subMenu||[],[t.subMenu]),u=!!(t.subMenu&&t.subMenu.length),[m,b]=(0,r.useState)(!1),[j,p]=(0,r.useState)(0);(0,r.useEffect)(()=>{p(m?h(o,36):0)},[m,o]),(0,r.useEffect)(()=>{let e=n===t.path,s=x(o,n);0===a?b(e||s):0!==a&&u&&b(!0)},[n,o,t,a,u]);let v=(0,r.useCallback)(()=>{t.path?l.push(t.path):u&&0===a&&b(e=>!e)},[t.path,u,a,l]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{menu:t,level:a,isOpen:m,onClick:v}),(0,s.jsx)(i.M,{children:m&&u&&(0,s.jsx)(d.E.div,{initial:"closed",animate:"open",exit:"closed",variants:{open:{opacity:1,height:j},closed:{opacity:0,height:0,overflow:"hidden"}},style:{overflow:"hidden"},children:o.map(e=>(0,s.jsx)(g,{menu:e,level:a+1},e.id))})})]})};var b=()=>(0,s.jsx)("nav",{className:"z-20 sticky top-0 left-0 bg-indigo-950 overflow-y-auto max-h-screen",children:n.sk.map(e=>(0,s.jsx)(g,{menu:e,level:0},e.id))});function j(e){let{children:t}=e;return(0,s.jsxs)("div",{className:"grid grid-cols-[12rem,1fr] h-screen text-gray-950 dark:text-gray-50 text-sm overflow-auto font-normal ",children:[(0,s.jsx)(b,{}),(0,s.jsxs)("div",{className:"flex flex-col relative bg-white z-0",children:[(0,s.jsx)(l,{}),(0,s.jsx)("div",{className:"p-4",children:(0,s.jsx)("main",{children:t})})]})]})}},5112:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var s=a(7437),r=a(4033),l=a(2265),n=a(6775),i=a(7980);function d(e){let{message:t,children:a,useHeader:d=!0}=e,c=(0,r.useRouter)(),[o,u]=(0,l.useState)(i.RR);(0,l.useEffect)(()=>{let e=setInterval(()=>{u(e=>e-1),o<=0&&c.push("/dashboard")},100);return()=>clearInterval(e)},[o,c]);let x=(i.RR-o)/i.RR*100;return(0,s.jsx)("section",{className:"bg-white dark:bg-gray-900",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 text-center",style:{height:"calc(100vh - ".concat(d?i.Cg:"0px",")")},children:[(0,s.jsx)("h2",{className:"text-6xl font-extrabold text-indigo-950",children:t}),(0,s.jsxs)("p",{className:"text-sm text-gray-500",children:[(o/10).toFixed(0),"초 후 대시보드 페이지로 이동됩니다."]}),(0,s.jsx)("div",{className:"w-full max-w-md bg-gray-200 rounded",children:(0,s.jsx)("div",{className:"bg-indigo-950 h-2 rounded transition-all",style:{width:"".concat(x,"%")}})}),a,(0,s.jsxs)("div",{className:"flex gap-4 justify-center",children:[(0,s.jsx)(n.Z,{onClick:()=>c.push("/dashboard"),variant:"filled",className:"ml-auto mr-auto",text:"Home"}),(0,s.jsx)(n.Z,{onClick:c.back,variant:"outlined",className:"ml-auto mr-auto",text:"Back"})]})]})})}},478:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var s=a(7437);function r(e){let{children:t}=e;return(0,s.jsx)("div",{className:"flex items-center justify-center w-screen h-screen",children:t})}a(2265)}},function(e){e.O(0,[99,674,582,232,984,775,971,864,744],function(){return e(e.s=2728)}),_N_E=e.O()}]);