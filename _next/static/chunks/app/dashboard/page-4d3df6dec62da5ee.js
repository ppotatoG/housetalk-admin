(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{5292:function(e,t,a){Promise.resolve().then(a.bind(a,7606)),Promise.resolve().then(a.bind(a,7469)),Promise.resolve().then(a.bind(a,6644)),Promise.resolve().then(a.bind(a,4778))},4778:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var r=a(7437),s=a(8920);a(2265);var l=a(4661),n=a(8910),i=e=>{let{data:t,title:a,now:s}=e,l=e=>{let t=new Date(e),a=s.getTime()-t.getTime(),r=Math.floor(a/6e4),l=Math.floor(r/60),n=Math.floor(l/24),i=Math.floor(n/30);return Math.floor(n/365)>=1?"1년 전":i>0?"".concat(i,"달 전"):n>0?"".concat(n,"일 전"):l>0?"".concat(l,"시간 전"):"".concat(r,"분 전")};return(0,r.jsxs)("div",{className:"w-1/3 grow rounded-lg border border-gray-200 dark:border-gray-800",children:[(0,r.jsxs)("h4",{className:"flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2",children:[a,(0,r.jsx)("div",{className:"text-blue-600 dark:text-blue-200",children:(0,r.jsx)(n.Bqb,{})})]}),(0,r.jsx)("ul",{children:t.map((e,t)=>(0,r.jsxs)("li",{className:"py-2 flex justify-between p-2",children:[(0,r.jsx)("p",{className:"truncate w-4/5 text-left",children:e.title}),(0,r.jsx)("p",{className:"text-right w-1/5 text-gray-200 dark:text-gray-800",children:l(e.update_at)})]},t))})]})},d=e=>{let{freeData:t,recommendData:a,reviewData:s,now:n}=e;return(0,r.jsxs)("div",{className:"w-full mt-2",children:[(0,r.jsx)("h1",{className:"text-black text-base font-semibold mb-2",children:l.ob.BOARD_UPLOAD_STATUS}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)(i,{data:t,title:l.DJ.free,now:n}),(0,r.jsx)(i,{data:a,title:l.DJ.recommend,now:n}),(0,r.jsx)(i,{data:s,title:l.DJ.review,now:n})]})]})},o=a(6704),c=a(105),u=e=>{let{chartData:t,options:a}=e;return(0,r.jsx)(c.$I,{data:t,options:a,plugins:[{id:"genderStatistics",afterDraw:e=>{var t,a;let r=e.ctx;if(!r)return;r.font="12px",r.textAlign="center";let s=e.data.labels,l=null===(a=e.data.datasets)||void 0===a?void 0:null===(t=a[0])||void 0===t?void 0:t.data,n=s.indexOf("male"),i=s.indexOf("female"),d=l[n]||0,o=l[i]||0,c=d+o,u=Math.round(d/c*100),x=Math.round(o/c*100),h=u>x?"남 ".concat(u,"%"):"여 ".concat(x,"%");r.fillText(h,e.width/2,e.height/2)}}]})};o.kL.register(o.uw,o.f$,o.ZL,o.Dx,o.u,o.De,o.qi);var x=e=>{let{data:t}=e,a=t.map(e=>e.gender),s={labels:["female","male"],datasets:[{data:t.map(e=>e.count),backgroundColor:a.map(e=>"female"===e?l.ZE.light.female:l.ZE.light.male)}]};return(0,r.jsxs)("div",{className:"w-1/3 h-full",children:[(0,r.jsx)("h1",{className:"text-black text-base font-semibold mb-2",children:l.ob.USER_GENDER_STATISTICS}),(0,r.jsx)("div",{className:"p-6 h-full rounded-lg border border-gray-200 dark:border-gray-800",children:(0,r.jsx)(u,{chartData:s,options:l.E6})})]})},h=e=>{let{chartData:t,options:a}=e;return(0,r.jsx)(c.$Q,{data:t,options:a,plugins:[{id:"customPlugin",afterDraw:e=>{var t;let a=e.ctx;a&&(a.font="12px",a.textAlign="center",a.textBaseline="bottom",null===(t=e.data.datasets)||void 0===t||t.forEach((t,r)=>{let s=e.getDatasetMeta(r);s.data.forEach((e,r)=>{var s;let l=null===(s=t.data)||void 0===s?void 0:s[r];"number"==typeof l&&a.fillText(String(l),e.x,e.y-5)})}))}}]})};o.kL.register(o.uw,o.f$,o.ZL,o.Dx,o.u,o.De);var m=e=>{let{data:t,today:a}=e,s=t.slice(0,6).reverse(),n=s.map(e=>e.date.slice(-5).replace(/-/g,".")),i=s.map(e=>e.daily),d={labels:n,datasets:[{data:i,backgroundColor:s.map(e=>a===e.date.replace(/-/g,".")?l.ZE.light.accent:l.ZE.light.primary),barThickness:15}]};return(0,r.jsxs)("div",{className:"relative flex-grow",children:[(0,r.jsx)("h1",{className:"text-black text-base font-semibold mb-2",children:l.ob.USER_SUBSCRIPTION_TREND}),(0,r.jsxs)("div",{className:"flex justify-between items-center rounded-lg border py-4 border-gray-200 dark:border-gray-800",children:[(0,r.jsx)("div",{className:"w-4/5",children:(0,r.jsx)(h,{chartData:d,options:l.vH})}),(0,r.jsxs)("p",{className:"flex text-gray text-xs w-1/5",children:["누적 가입 수",(0,r.jsx)("span",{className:"text-blue-600 dark:text-blue-400",children:s[s.length-1].date})]})]})]})},f=()=>{let e=new Date,t=new Date().toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit",weekday:"short"}),a=e.getHours().toString().padStart(2,"0"),n=e.getMinutes().toString().padStart(2,"0"),i="".concat(t.replace(/\. /g,".")," ").concat(a,"시 ").concat(n,"분");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-blue-600 dark:text-blue-400",children:[(0,r.jsx)("p",{children:i}),(0,r.jsx)("button",{"aria-label":"refresh",children:(0,r.jsx)(s.Qxo,{})})]}),(0,r.jsxs)("div",{className:"flex gap-2 mt-6 h-full",children:[(0,r.jsx)(m,{data:l.X8,today:"2023.09.19"}),(0,r.jsx)(x,{data:l._9})]}),(0,r.jsx)(d,{freeData:l.ME,recommendData:l.L3,reviewData:l.f2,now:e})]})}},7469:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return b}});var r=a(7437),s=a(2265),l=()=>(0,r.jsxs)("header",{className:"h-16 z-10 sticky top-0 left-0 bg-white flex items-center justify-end gap-4 p-4 shadow-md shadow-gray-200 dark:shadow-gray-800",children:[(0,r.jsxs)("p",{children:["안녕하세요, ",(0,r.jsx)("b",{children:"홍길동"}),"님"]}),(0,r.jsx)("button",{className:"border border-solid border-gray-400 dark:border-gray-300 rounded-md px-2 py-1",children:"로그아웃"})]}),n=a(4661),i=a(2167),d=a(7870),o=a(4033),c=a(227);let u=(e,t)=>e.some(e=>{if(e.path){let a=new RegExp(e.path);if(a.test(t))return!0}return!!(e.subMenu&&u(e.subMenu,t))}),x=(e,t)=>e.reduce((e,a)=>{let r=e+t;return a.subMenu&&(r+=x(a.subMenu,t)),r},0),h=(e,t,a,r)=>{let s=n.xw.levels[e]||{},l="function"==typeof s.text?s.text(t,a,r):s.text,i="function"==typeof s.font?s.font(r):s.font;return[n.xw.common,s.background,s.border,s.height,l,i,s.padding,"pl-".concat(4*e)].filter(Boolean).join(" ")};var m=e=>{var t;let{menu:a,level:l,isOpen:n,onClick:i}=e,d=(0,o.usePathname)(),u=d===a.path,x=(0,s.useMemo)(()=>h(l,u,n,a),[l,u,n,a]),m=n?c.zob:c.uaK;return(0,r.jsxs)("button",{className:"flex justify-between items-center ".concat(x),onClick:i,children:[a.name,0===l&&(null===(t=a.subMenu)||void 0===t?void 0:t.length)&&(0,r.jsx)(m,{className:"w-3"})]})};let f=e=>{let{menu:t,level:a}=e,l=(0,o.useRouter)(),n=(0,o.usePathname)(),c=(0,s.useMemo)(()=>t.subMenu||[],[t.subMenu]),h=!!(t.subMenu&&t.subMenu.length),[g,b]=(0,s.useState)(!1),[p,j]=(0,s.useState)(0);(0,s.useEffect)(()=>{j(g?x(c,36):0)},[g,c]),(0,s.useEffect)(()=>{let e=n===t.path,r=u(c,n);0===a?b(e||r):0!==a&&h&&b(!0)},[n,c,t,a,h]);let v=(0,s.useCallback)(()=>{t.path?l.push(t.path):h&&0===a&&b(e=>!e)},[t.path,h,a,l]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{menu:t,level:a,isOpen:g,onClick:v}),(0,r.jsx)(i.M,{children:g&&h&&(0,r.jsx)(d.E.div,{initial:"closed",animate:"open",exit:"closed",variants:{open:{opacity:1,height:p},closed:{opacity:0,height:0,overflow:"hidden"}},style:{overflow:"hidden"},children:c.map(e=>(0,r.jsx)(f,{menu:e,level:a+1},e.id))})})]})};var g=()=>(0,r.jsx)("nav",{className:"z-20 sticky top-0 left-0 bg-indigo-950 overflow-y-auto max-h-screen",children:n.sk.map(e=>(0,r.jsx)(f,{menu:e,level:0},e.id))});function b(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"grid grid-cols-[12rem,1fr] h-screen text-gray-950 dark:text-gray-50 text-sm overflow-auto font-normal ",children:[(0,r.jsx)(g,{}),(0,r.jsxs)("div",{className:"flex flex-col relative bg-white z-0",children:[(0,r.jsx)(l,{}),(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("main",{children:t})})]})]})}},6644:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var r=a(7437);function s(e){let{children:t}=e;return(0,r.jsx)("div",{className:"flex items-center justify-center w-screen h-screen",children:t})}a(2265)}},function(e){e.O(0,[99,674,582,641,984,606,971,596,744],function(){return e(e.s=5292)}),_N_E=e.O()}]);