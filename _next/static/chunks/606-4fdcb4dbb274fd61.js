"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{5496:function(e,r,a){var o=a(7437);a(2265);var t=a(4661);r.Z=e=>{let{variant:r,color:a="default",text:i,onClick:s,padding:n="px-4 py-2",type:d="button",children:p,size:l="medium",className:m}=e,g=[n,m,"rounded","focus:outline-none","transition-colors","duration-200","w-fit","ml-auto","hover:opacity-90"].join(" "),y=t.Sw[a],u=[y.base,y.hover,y.darkBase,y.darkHover,y.text,y.border,y.darkBorder].join(" "),h=["border",y.border,y.darkText,"dark:text-".concat(a,"-600")].join(" ");return(0,o.jsx)("button",{className:"".concat(g," ").concat({small:"text-xs !px-2 !py-1",medium:"",large:"text-xl"}[l]," ").concat("filled"===r?u:h),onClick:s,type:d,children:i||p})}},7606:function(e,r,a){a.r(r),a.d(r,{default:function(){return d}});var o=a(7437),t=a(4033),i=a(2265),s=a(5496),n=a(4661);function d(e){let{message:r,children:a,useHeader:d=!0}=e,p=(0,t.useRouter)(),[l,m]=(0,i.useState)(n.RR);(0,i.useEffect)(()=>{let e=setInterval(()=>{m(e=>e-1),l<=0&&p.push("/dashboard")},100);return()=>clearInterval(e)},[l,p]);let g=(n.RR-l)/n.RR*100;return(0,o.jsx)("section",{className:"bg-white dark:bg-gray-900",children:(0,o.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 text-center",style:{height:"calc(100vh - ".concat(d?n.Cg:"0px",")")},children:[(0,o.jsx)("h2",{className:"text-6xl font-extrabold text-indigo-950",children:r}),(0,o.jsxs)("p",{className:"text-sm text-gray-500",children:[(l/10).toFixed(0),"초 후 대시보드 페이지로 이동됩니다."]}),(0,o.jsx)("div",{className:"w-full max-w-md bg-gray-200 rounded",children:(0,o.jsx)("div",{className:"bg-indigo-950 h-2 rounded transition-all",style:{width:"".concat(g,"%")}})}),a,(0,o.jsxs)("div",{className:"flex gap-4 justify-center",children:[(0,o.jsx)(s.Z,{onClick:()=>p.push("/dashboard"),variant:"filled",className:"ml-auto mr-auto",text:"Home"}),(0,o.jsx)(s.Z,{onClick:p.back,variant:"outlined",className:"ml-auto mr-auto",text:"Back"})]})]})})}},4661:function(e,r,a){a.d(r,{vH:function(){return t},DJ:function(){return i},xw:function(){return N},ZE:function(){return s},Sw:function(){return o},ob:function(){return n},E6:function(){return d},Mf:function(){return u},ME:function(){return m},_9:function(){return l},f2:function(){return y},L3:function(){return g},X8:function(){return p},Gk:function(){return x},Tu:function(){return h},kH:function(){return c},Cg:function(){return b},LOGIN:function(){return v},sk:function(){return H},Oj:function(){return U},jo:function(){return T},y1:function(){return M},H7:function(){return k},Y8:function(){return w},RR:function(){return D},pe:function(){return f},kt:function(){return G},qi:function(){return I}});let o={default:{base:"bg-indigo-950",hover:"hover:bg-indigo-900",darkBase:"dark:bg-indigo-900",darkHover:"dark:hover:bg-indigo-100",text:"text-white",border:"border-indigo-950",darkText:"text-indigo-900",darkBorder:"dark:border-indigo-200"},error:{base:"bg-red-500",hover:"hover:bg-red-600",darkBase:"dark:bg-red-600",darkHover:"dark:hover:bg-red-700",text:"text-white",border:"border-red-500",darkText:"text-red-600",darkBorder:"dark:border-red-600"},warning:{base:"bg-yellow-500",hover:"hover:bg-yellow-600",darkBase:"dark:bg-yellow-600",darkHover:"dark:hover:bg-yellow-700",text:"text-white",border:"border-yellow-500",darkText:"text-yellow-600",darkBorder:"dark:border-yellow-600"}},t={responsive:!0,plugins:{legend:{display:!1}},layout:{padding:{top:20}},events:[],scales:{x:{border:{display:!1},grid:{display:!1,drawTicks:!1}},y:{border:{display:!1},grid:{display:!1,drawTicks:!1},ticks:{display:!1}}}},i={free:"자유",recommend:"추천템",review:"집 리뷰"},s={light:{primary:"#e5e7eb",accent:"#2563eb",male:"#2563eb",female:"#ec4899"},dark:{primary:"#1f2937",accent:"#bfdbfe",male:"#bfdbfe",female:"#fbcfe8"}},n={BOARD_UPLOAD_STATUS:"게시판 업로드 현황",USER_GENDER_STATISTICS:"유저 성별 통계",USER_SUBSCRIPTION_TREND:"유저 가입 수"},d={responsive:!0,cutout:"40%",plugins:{legend:{display:!1}},events:[],scales:{x:{border:{display:!1},grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{border:{display:!1},grid:{display:!1,drawTicks:!1},ticks:{display:!1}}}},p=[{date:"2023-09-19",daily:5,cumulative:1200},{date:"2023-09-18",daily:7,cumulative:1195},{date:"2023-09-17",daily:4,cumulative:1188},{date:"2023-09-16",daily:6,cumulative:1184},{date:"2023-09-15",daily:8,cumulative:1178},{date:"2023-09-14",daily:9,cumulative:1170},{date:"2023-09-13",daily:4,cumulative:1161},{date:"2023-09-12",daily:6,cumulative:1157},{date:"2023-09-11",daily:5,cumulative:1151},{date:"2023-09-10",daily:7,cumulative:1146},{date:"2023-09-09",daily:5,cumulative:1139},{date:"2023-09-08",daily:3,cumulative:1134},{date:"2023-09-07",daily:6,cumulative:1131},{date:"2023-09-06",daily:7,cumulative:1125},{date:"2023-09-05",daily:5,cumulative:1118},{date:"2023-09-04",daily:8,cumulative:1113},{date:"2023-09-03",daily:6,cumulative:1105},{date:"2023-09-02",daily:9,cumulative:1099},{date:"2023-09-01",daily:7,cumulative:1090},{date:"2023-08-31",daily:5,cumulative:1083}],l=[{gender:"female",count:650},{gender:"male",count:550}],m=Array.from({length:10},(e,r)=>({title:"자유게시판 글 제목 자유게시판 글 제목 자유게시판 글 제목 ".concat(r+1),update_at:"2023-09-".concat(24-r," 10:00")})),g=Array.from({length:10},(e,r)=>({title:"추천 아이템 제목 추천 아이템 제목 추천 아이템 제목 ".concat(r+1),update_at:"2023-09-".concat(24-r," 11:00")})),y=Array.from({length:10},(e,r)=>({title:"집 리뷰 제목 집 리뷰 제목 집 리뷰 제목 ".concat(r+1),update_at:"2023-09-".concat(24-r," 12:00")})),u=[{id:"exhibition1",title:"현대 미술 전시회",description:"현대 미술의 아름다움을 경험하세요.",displayStartDate:"2023-11-01",displayEndDate:"2023-11-15",imageUrl:"https://example.com/exhibition1.jpg",isPublished:!0,isUsed:!0,createdBy:"admin1",createdDate:"2023-10-16",lastModifiedBy:"admin1"},{id:"exhibition2",title:"고전 음악 콘서트",description:"클래식 음악의 아름다움을 느껴보세요.",displayStartDate:"2023-12-05",displayEndDate:"2023-12-10",imageUrl:"https://example.com/exhibition2.jpg",isPublished:!0,isUsed:!0,createdBy:"admin1",createdDate:"2023-10-16",lastModifiedBy:""},{id:"exhibition3",title:"사진 전시회",description:"미국의 명작 사진가들의 작품 전시.",displayStartDate:"2024-01-10",displayEndDate:"2024-01-25",imageUrl:"https://example.com/exhibition3.jpg",isPublished:!0,isUsed:!0,createdBy:"admin2",createdDate:"2023-10-16",lastModifiedBy:""},{id:"exhibition4",title:"현대 미술 작품 소개",description:"미술 작품들의 창조적인 세계.",displayStartDate:"2024-02-15",displayEndDate:"2024-03-05",imageUrl:"https://example.com/exhibition4.jpg",isPublished:!0,isUsed:!0,createdBy:"admin2",createdDate:"2023-10-16",lastModifiedBy:"admin2"},{id:"exhibition5",title:"음악 페스티벌",description:"다양한 음악 장르를 즐겨보세요.",displayStartDate:"2024-04-20",displayEndDate:"2024-04-25",imageUrl:"https://example.com/exhibition5.jpg",isPublished:!0,isUsed:!0,createdBy:"admin3",createdDate:"2023-10-16",lastModifiedBy:""},{id:"exhibition6",title:"고전 음악 특별 공연",description:"클래식 음악의 아름다움을 느껴보세요.",displayStartDate:"2024-05-10",displayEndDate:"2024-05-15",imageUrl:"https://example.com/exhibition6.jpg",isPublished:!0,isUsed:!0,createdBy:"admin4",createdDate:"2023-10-16",lastModifiedBy:"admin4"},{id:"exhibition7",title:"미술 감상 및 토론",description:"미술에 대한 흥미로운 토론 및 감상.",displayStartDate:"2024-06-10",displayEndDate:"2024-06-25",imageUrl:"https://example.com/exhibition7.jpg",isPublished:!0,isUsed:!0,createdBy:"admin5",createdDate:"2023-10-16",lastModifiedBy:""},{id:"exhibition8",title:"사진작가와의 만남",description:"세계적인 사진 작가와의 대화와 전시.",displayStartDate:"2024-07-05",displayEndDate:"2024-07-15",imageUrl:"https://example.com/exhibition8.jpg",isPublished:!0,isUsed:!0,createdBy:"admin6",createdDate:"2023-10-16",lastModifiedBy:"admin6"},{id:"exhibition9",title:"현대 미술과 기술",description:"기술과 미술의 만남을 탐구하세요.",displayStartDate:"2024-08-10",displayEndDate:"2024-08-25",imageUrl:"https://example.com/exhibition9.jpg",isPublished:!0,isUsed:!0,createdBy:"admin7",createdDate:"2023-10-16",lastModifiedBy:""},{id:"exhibition10",title:"사진과 자연의 조화",description:"자연 속에서 담긴 아름다운 순간들.",displayStartDate:"2024-09-10",displayEndDate:"2024-09-25",imageUrl:"https://example.com/exhibition10.jpg",isPublished:!0,isUsed:!0,createdBy:"admin8",createdDate:"2023-10-16",lastModifiedBy:""}],h=["이미지","노출상태","노출기간","사용여부","등록자","등록일","수정자","관리"],c=[{id:"all",label:"전체",value:"all"},{id:"exposed",label:"노출",value:!0},{id:"not-exposed",label:"미노출",value:!1}],U=10,f=[{id:"all-usage",label:"전체",value:"all"},{id:"used",label:"사용",value:!0},{id:"not-used",label:"미사용",value:!1}],w={HOUR:"시",MINUTE:"분",SECOND:"초"},b="6rem",D=50,k=10,v={ID:"아이디",PASSWORD:"비밀번호",SAVE_ID:"아이디 저장",BUTTON_TEXT:"로그인",ID_PLACEHOLDER:"아이디를 입력해주세요.",PASSWORD_PLACEHOLDER:"비밀번호를 입력해주세요."},N={common:"p-4 w-full cursor-pointer transition-colors duration-300 ease-in-out",levels:{0:{background:"bg-indigo-950",border:"border-b border-gray-100 border-opacity-50",height:"h-14",font:"hover:text-yellow-500",text:(e,r,a)=>e||r&&a.subMenu?"text-yellow-500":"text-white"},1:{background:"bg-gray-300",text:"text-gray-700",padding:"py-2",font:e=>e.subMenu?"font-semibold":"hover:text-indigo-700"},2:{background:"bg-gray-300",text:e=>e?"text-indigo-700":"text-gray-700",padding:"py-2",font:"hover:text-indigo-700"}}},H=[{id:1,name:"대시보드",path:"/dashboard"},{id:2,name:"회원관리",path:"/users"},{id:3,name:"전시 관리",subMenu:[{id:301,name:"메인 페이지",subMenu:[{id:3011,name:"앱 배너",path:"/exhibition/main/banner"},{id:3012,name:"인기 집 리뷰",path:"/exhibition/main/reviews"}]},{id:302,name:"서브 페이지",subMenu:[{id:3021,name:"추천아이템 상단 아이콘",path:"/exhibition/sub/recommended"}]}]},{id:4,name:"정보제공",subMenu:[{id:401,name:"정보제공 등록하기",path:"/information/register"},{id:402,name:"정보 전체 보기",path:"/information/view"}]},{id:5,name:"고객센터",subMenu:[{id:501,name:"공지사항",path:"/cs/notice"},{id:502,name:"약관관리",path:"/cs/terms"},{id:503,name:"FAQ",path:"/cs/faq"}]}],T={USERS:"회원 조회",USERS_DETAIL:"회원정보 상세조회",EXHIBITION_MAIN_BANNER:"앱 배너"},G={SEARCH:{SUCCESS:"users search success",ERROR:"users search error"},DETAIL:{PASSWORD_RESET_SUCCESS:"users password reset success",EDIT_SUCCESS:"users detail edit success"}},x=[{id:"jinho9357",password:"password123",signUpMethod:"naver",pushNotification:!0,nickname:"JinhoStar",name:"Kim Jinho",birthDate:"1995-04-21",phone:"010-1234-5678",gender:"male",signUpDate:"2023-10-03T12:15:30",address:"Seoul, Gangnam-gu",livingInfo:{duration:"1-2 years",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"soojin8490",password:"passsoojin",signUpMethod:"kakao",pushNotification:!1,nickname:"SooFly",name:"Lee Soojin",birthDate:"1993-08-19",phone:"010-8742-9045",gender:"female",signUpDate:"2023-09-21T15:45:50",address:"Seoul, Jongno-gu",livingInfo:{duration:"3-4 years",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"hyunwoo7425",password:"woohyuno",signUpMethod:"email",pushNotification:!0,nickname:"HyunBooster",name:"Park Hyunwoo",birthDate:"1992-12-05",phone:"010-7591-2265",gender:"male",signUpDate:"2023-05-13T10:31:10",address:"Seoul, Seodaemun-gu",livingInfo:{duration:"5 years or more",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser3",password:"password3",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser3",name:"Name3",birthDate:"2000-01-03",phone:"010-0000-0003",gender:"male",signUpDate:"2023-01-03T15:00:00.000Z",address:"Generated Address 3",livingInfo:{duration:"3-4 years",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser4",password:"password4",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser4",name:"Name4",birthDate:"2000-01-04",phone:"010-0000-0004",gender:"female",signUpDate:"2023-01-04T15:00:00.000Z",address:"Generated Address 4",livingInfo:{duration:"5 years or more",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser5",password:"password5",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser5",name:"Name5",birthDate:"2000-01-05",phone:"010-0000-0005",gender:"male",signUpDate:"2023-01-05T15:00:00.000Z",address:"Generated Address 5",livingInfo:{duration:"5 years or more",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser6",password:"password6",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser6",name:"Name6",birthDate:"2000-01-06",phone:"010-0000-0006",gender:"male",signUpDate:"2023-01-06T15:00:00.000Z",address:"Generated Address 6",livingInfo:{duration:"5 years or more",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser7",password:"password7",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser7",name:"Name7",birthDate:"2000-01-07",phone:"010-0000-0007",gender:"female",signUpDate:"2023-01-07T15:00:00.000Z",address:"Generated Address 7",livingInfo:{duration:"5 years or more",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser8",password:"password8",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser8",name:"Name8",birthDate:"2000-01-08",phone:"010-0000-0008",gender:"male",signUpDate:"2023-01-08T15:00:00.000Z",address:"Generated Address 8",livingInfo:{duration:"5 years or more",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser9",password:"password9",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser9",name:"Name9",birthDate:"2000-01-09",phone:"010-0000-0009",gender:"male",signUpDate:"2023-01-09T15:00:00.000Z",address:"Generated Address 9",livingInfo:{duration:"5 years or more",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser10",password:"password10",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser10",name:"Name10",birthDate:"2000-01-10",phone:"010-0000-0010",gender:"female",signUpDate:"2023-01-10T15:00:00.000Z",address:"Generated Address 10",livingInfo:{duration:"1-2 years",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser11",password:"password11",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser11",name:"Name11",birthDate:"2000-01-11",phone:"010-0000-0011",gender:"male",signUpDate:"2023-01-11T15:00:00.000Z",address:"Generated Address 11",livingInfo:{duration:"1-2 years",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser12",password:"password12",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser12",name:"Name12",birthDate:"2000-01-12",phone:"010-0000-0012",gender:"male",signUpDate:"2023-01-12T15:00:00.000Z",address:"Generated Address 12",livingInfo:{duration:"3-4 years",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser13",password:"password13",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser13",name:"Name13",birthDate:"2000-01-13",phone:"010-0000-0013",gender:"female",signUpDate:"2023-01-13T15:00:00.000Z",address:"Generated Address 13",livingInfo:{duration:"3-4 years",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser14",password:"password14",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser14",name:"Name14",birthDate:"2000-01-14",phone:"010-0000-0014",gender:"male",signUpDate:"2023-01-14T15:00:00.000Z",address:"Generated Address 14",livingInfo:{duration:"5 years or more",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser15",password:"password15",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser15",name:"Name15",birthDate:"2000-01-15",phone:"010-0000-0015",gender:"male",signUpDate:"2023-01-15T15:00:00.000Z",address:"Generated Address 15",livingInfo:{duration:"5 years or more",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser16",password:"password16",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser16",name:"Name16",birthDate:"2000-01-16",phone:"010-0000-0016",gender:"female",signUpDate:"2023-01-16T15:00:00.000Z",address:"Generated Address 16",livingInfo:{duration:"5 years or more",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser17",password:"password17",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser17",name:"Name17",birthDate:"2000-01-17",phone:"010-0000-0017",gender:"male",signUpDate:"2023-01-17T15:00:00.000Z",address:"Generated Address 17",livingInfo:{duration:"5 years or more",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser18",password:"password18",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser18",name:"Name18",birthDate:"2000-01-18",phone:"010-0000-0018",gender:"male",signUpDate:"2023-01-18T15:00:00.000Z",address:"Generated Address 18",livingInfo:{duration:"5 years or more",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser19",password:"password19",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser19",name:"Name19",birthDate:"2000-01-19",phone:"010-0000-0019",gender:"female",signUpDate:"2023-01-19T15:00:00.000Z",address:"Generated Address 19",livingInfo:{duration:"5 years or more",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser20",password:"password20",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser20",name:"Name20",birthDate:"2000-01-20",phone:"010-0000-0020",gender:"male",signUpDate:"2023-01-20T15:00:00.000Z",address:"Generated Address 20",livingInfo:{duration:"1-2 years",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser21",password:"password21",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser21",name:"Name21",birthDate:"2000-01-21",phone:"010-0000-0021",gender:"male",signUpDate:"2023-01-21T15:00:00.000Z",address:"Generated Address 21",livingInfo:{duration:"1-2 years",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser22",password:"password22",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser22",name:"Name22",birthDate:"2000-01-22",phone:"010-0000-0022",gender:"female",signUpDate:"2023-01-22T15:00:00.000Z",address:"Generated Address 22",livingInfo:{duration:"3-4 years",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser23",password:"password23",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser23",name:"Name23",birthDate:"2000-01-23",phone:"010-0000-0023",gender:"male",signUpDate:"2023-01-23T15:00:00.000Z",address:"Generated Address 23",livingInfo:{duration:"3-4 years",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser24",password:"password24",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser24",name:"Name24",birthDate:"2000-01-24",phone:"010-0000-0024",gender:"male",signUpDate:"2023-01-24T15:00:00.000Z",address:"Generated Address 24",livingInfo:{duration:"5 years or more",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser25",password:"password25",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser25",name:"Name25",birthDate:"2000-01-25",phone:"010-0000-0025",gender:"female",signUpDate:"2023-01-25T15:00:00.000Z",address:"Generated Address 25",livingInfo:{duration:"5 years or more",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser26",password:"password26",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser26",name:"Name26",birthDate:"2000-01-26",phone:"010-0000-0026",gender:"male",signUpDate:"2023-01-26T15:00:00.000Z",address:"Generated Address 26",livingInfo:{duration:"5 years or more",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser27",password:"password27",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser27",name:"Name27",birthDate:"2000-01-27",phone:"010-0000-0027",gender:"male",signUpDate:"2023-01-27T15:00:00.000Z",address:"Generated Address 27",livingInfo:{duration:"5 years or more",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser28",password:"password28",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser28",name:"Name28",birthDate:"2000-01-28",phone:"010-0000-0028",gender:"female",signUpDate:"2023-01-28T15:00:00.000Z",address:"Generated Address 28",livingInfo:{duration:"5 years or more",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser29",password:"password29",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser29",name:"Name29",birthDate:"2000-01-29",phone:"010-0000-0029",gender:"male",signUpDate:"2023-01-29T15:00:00.000Z",address:"Generated Address 29",livingInfo:{duration:"5 years or more",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser30",password:"password30",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser30",name:"Name30",birthDate:"2000-01-30",phone:"010-0000-0030",gender:"male",signUpDate:"2023-01-30T15:00:00.000Z",address:"Generated Address 30",livingInfo:{duration:"1-2 years",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser31",password:"password31",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser31",name:"Name31",birthDate:"2000-01-31",phone:"010-0000-0031",gender:"female",signUpDate:"2023-01-31T15:00:00.000Z",address:"Generated Address 31",livingInfo:{duration:"1-2 years",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser32",password:"password32",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser32",name:"Name32",birthDate:"2000-02-01",phone:"010-0000-0032",gender:"male",signUpDate:"2023-02-01T15:00:00.000Z",address:"Generated Address 32",livingInfo:{duration:"3-4 years",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser33",password:"password33",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser33",name:"Name33",birthDate:"2000-02-02",phone:"010-0000-0033",gender:"male",signUpDate:"2023-02-02T15:00:00.000Z",address:"Generated Address 33",livingInfo:{duration:"3-4 years",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser34",password:"password34",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser34",name:"Name34",birthDate:"2000-02-03",phone:"010-0000-0034",gender:"female",signUpDate:"2023-02-03T15:00:00.000Z",address:"Generated Address 34",livingInfo:{duration:"5 years or more",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser35",password:"password35",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser35",name:"Name35",birthDate:"2000-02-04",phone:"010-0000-0035",gender:"male",signUpDate:"2023-02-04T15:00:00.000Z",address:"Generated Address 35",livingInfo:{duration:"5 years or more",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser36",password:"password36",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser36",name:"Name36",birthDate:"2000-02-05",phone:"010-0000-0036",gender:"male",signUpDate:"2023-02-05T15:00:00.000Z",address:"Generated Address 36",livingInfo:{duration:"5 years or more",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser37",password:"password37",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser37",name:"Name37",birthDate:"2000-02-06",phone:"010-0000-0037",gender:"female",signUpDate:"2023-02-06T15:00:00.000Z",address:"Generated Address 37",livingInfo:{duration:"5 years or more",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser38",password:"password38",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser38",name:"Name38",birthDate:"2000-02-07",phone:"010-0000-0038",gender:"male",signUpDate:"2023-02-07T15:00:00.000Z",address:"Generated Address 38",livingInfo:{duration:"5 years or more",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser39",password:"password39",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser39",name:"Name39",birthDate:"2000-02-08",phone:"010-0000-0039",gender:"male",signUpDate:"2023-02-08T15:00:00.000Z",address:"Generated Address 39",livingInfo:{duration:"5 years or more",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser40",password:"password40",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser40",name:"Name40",birthDate:"2000-02-09",phone:"010-0000-0040",gender:"female",signUpDate:"2023-02-09T15:00:00.000Z",address:"Generated Address 40",livingInfo:{duration:"1-2 years",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser41",password:"password41",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser41",name:"Name41",birthDate:"2000-02-10",phone:"010-0000-0041",gender:"male",signUpDate:"2023-02-10T15:00:00.000Z",address:"Generated Address 41",livingInfo:{duration:"1-2 years",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser42",password:"password42",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser42",name:"Name42",birthDate:"2000-02-11",phone:"010-0000-0042",gender:"male",signUpDate:"2023-02-11T15:00:00.000Z",address:"Generated Address 42",livingInfo:{duration:"3-4 years",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser43",password:"password43",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser43",name:"Name43",birthDate:"2000-02-12",phone:"010-0000-0043",gender:"female",signUpDate:"2023-02-12T15:00:00.000Z",address:"Generated Address 43",livingInfo:{duration:"3-4 years",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser44",password:"password44",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser44",name:"Name44",birthDate:"2000-02-13",phone:"010-0000-0044",gender:"male",signUpDate:"2023-02-13T15:00:00.000Z",address:"Generated Address 44",livingInfo:{duration:"5 years or more",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser45",password:"password45",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser45",name:"Name45",birthDate:"2000-02-14",phone:"010-0000-0045",gender:"male",signUpDate:"2023-02-14T15:00:00.000Z",address:"Generated Address 45",livingInfo:{duration:"5 years or more",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser46",password:"password46",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser46",name:"Name46",birthDate:"2000-02-15",phone:"010-0000-0046",gender:"female",signUpDate:"2023-02-15T15:00:00.000Z",address:"Generated Address 46",livingInfo:{duration:"5 years or more",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]},{id:"generatedUser47",password:"password47",signUpMethod:"email",pushNotification:!0,nickname:"GeneratedUser47",name:"Name47",birthDate:"2000-02-16",phone:"010-0000-0047",gender:"male",signUpDate:"2023-02-16T15:00:00.000Z",address:"Generated Address 47",livingInfo:{duration:"5 years or more",type:"Two-room",people:"3 or more people"},postHistory:[],reportHistory:[]},{id:"generatedUser48",password:"password48",signUpMethod:"naver",pushNotification:!0,nickname:"GeneratedUser48",name:"Name48",birthDate:"2000-02-17",phone:"010-0000-0048",gender:"male",signUpDate:"2023-02-17T15:00:00.000Z",address:"Generated Address 48",livingInfo:{duration:"5 years or more",type:"One-room",people:"1 person"},postHistory:[],reportHistory:[]},{id:"generatedUser49",password:"password49",signUpMethod:"kakao",pushNotification:!1,nickname:"GeneratedUser49",name:"Name49",birthDate:"2000-02-18",phone:"010-0000-0049",gender:"female",signUpDate:"2023-02-18T15:00:00.000Z",address:"Generated Address 49",livingInfo:{duration:"5 years or more",type:"Two-room",people:"2 people"},postHistory:[],reportHistory:[]}],M=[{id:"name",name:"이름"},{id:"id",name:"아이디"}],I=["아이디","회원명","성별","닉네임","가입일시"]}}]);