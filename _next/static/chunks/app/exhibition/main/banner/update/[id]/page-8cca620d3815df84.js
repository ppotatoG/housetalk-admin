(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43,215],{986:function(e,r,t){Promise.resolve().then(t.bind(t,2470)),Promise.resolve().then(t.bind(t,3887)),Promise.resolve().then(t.bind(t,5112)),Promise.resolve().then(t.bind(t,478))},2470:function(e,r,t){"use strict";t.r(r);var a=t(7437),l=t(2067),s=t.n(l),i=t(2265),d=t(3198),o=t(6775),u=t(690),n=t(3837),b=t(7980),c=t(4319);r.default=e=>{let{type:r,updateValue:t}=e,l=(0,d.I0)(),h="create"===r?"등록":"수정",[x,m]=(0,i.useState)(s()().subtract(6,"months").toDate()),[g,f]=(0,i.useState)(new Date),[p,v]=(0,i.useState)(b.kH[1]),[w,y]=(0,i.useState)(b.pe[1]),[N,k]=(0,i.useState)(""),[j,C]=(0,i.useState)(""),[S,V]=(0,i.useState)(""),[M,_]=(0,i.useState)("");return(0,i.useEffect)(()=>{if(t){let{displayStartDate:e,displayEndDate:r,isPublished:a,isUsed:l,landingUrl:s,imageUrl:i,title:d,description:o}=t;m(new Date(e)),f(new Date(r)),y(l?b.pe[1]:b.pe[2]),v(a?b.kH[1]:b.kH[2]),k(s),C(i),V(d),_(o)}},[t]),(0,a.jsxs)("div",{children:[(0,a.jsx)(u.Z,{title:"".concat(b.jo.EXHIBITION_MAIN_BANNER," ").concat(h,"하기")}),(0,a.jsxs)("p",{className:"text-xs mt-2 font-light",children:["*동일한 노출기간에 최대 ",b.Oj,"개 배너까지 등록 가능합니다."]}),(0,a.jsxs)("form",{className:"flex flex-col mt-4 pb-4 border-t-2 border-gray-500",onSubmit:()=>{},children:[(0,a.jsx)(n.cD,{minValue:x,setMinValue:m,maxValue:g,setMaxValue:f,labelRangeDate:"노출기간",className:"!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full",useHour:!0,useMinute:!0,required:!0,height:16,titleWidthClass:"w-40"}),(0,a.jsx)(n.Y8,{labelText:"노출상태",value:p,setValue:v,radioList:b.kH.slice(1),required:!0,className:"!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full",height:16,titleWidthClass:"w-40"}),(0,a.jsx)(n.Y8,{labelText:"사용여부",value:w,setValue:y,radioList:b.pe.slice(1),required:!0,className:"!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full",height:16,titleWidthClass:"w-40"}),(0,a.jsx)(n.xv,{labelText:"랜딩 URL",value:N,label:"landingUrl",setValue:k,placeholder:"랜딩될 URL을 입력해주세요.",required:!0,className:"!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full",height:16,titleWidthClass:"w-40"}),(0,a.jsx)(n.xv,{labelText:"이미지 URL",value:j,label:"imageUrl",setValue:C,placeholder:"이미지 URL을 입력해주세요.",required:!0,className:"!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full",height:16,titleWidthClass:"w-40"}),(0,a.jsx)(n.xv,{labelText:"메인 문구",value:S,label:"title",setValue:V,placeholder:"띄어쓰기 포함 최대 N자 입력 가능",required:!0,className:"!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full",height:16,titleWidthClass:"w-40"}),(0,a.jsx)(n.xv,{labelText:"서브 문구",value:M,label:"landingUrl",setValue:_,placeholder:"띄어쓰기 포함 최대 N자 입력 가능",required:!0,className:"!border-0 !border-b !border-gray-400 !dark:border-gray-600 w-full",height:16,titleWidthClass:"w-40"}),(0,a.jsxs)("div",{className:"flex justify-center items-center gap-8 mt-8",children:[(0,a.jsx)(o.Z,{variant:"outlined",text:"취소",className:"!ml-0 px-16",onClick:()=>{l((0,c.K4)({id:"dont_save",title:"".concat(h," 취소하기"),description:"데이터를 저장하지 않고 취소하시겠습니까?",type:"warning",callbackButton:{text:"뒤로가기",type:"back"}}))}}),(0,a.jsx)(o.Z,{variant:"filled",type:"submit",text:h,className:"!ml-0 px-16 "})]})]})]})}},4319:function(e,r,t){"use strict";t.d(r,{K4:function(){return s},Mr:function(){return i}});var a=t(5726);let l=(0,a.oM)({name:"modal",initialState:[],reducers:{showModal:(e,r)=>{e.push(r.payload)},closeModal:(e,r)=>{let t=e.findIndex(e=>e.id===r.payload);-1!==t&&e.splice(t,1)},closeAllModals:()=>[]}}),{showModal:s,closeModal:i,closeAllModals:d}=l.actions;r.ZP=l.reducer}},function(e){e.O(0,[99,712,447,400,370,990,232,64,639,198,775,417,971,864,744],function(){return e(e.s=986)}),_N_E=e.O()}]);