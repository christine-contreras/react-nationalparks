(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{114:function(e,t,a){},115:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(10),c=a.n(r),i=(a(114),a(47)),o=a(101),l=a(25),d=a(26),h=a(34),j=a(33),u=a(55),p=a(12),m=a(162),b=(a(115),a(172)),O=a(173),x=a(1);function v(){var e=Object(p.e)();return Object(x.jsx)("div",{children:Object(x.jsxs)("a",{class:"logo",onClick:function(){return e.push("/")},children:[Object(x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 252.74 129.05",children:[Object(x.jsx)("rect",{class:"cls-1",y:"117.51",width:"252.74",height:"11.55"}),Object(x.jsx)("polyline",{class:"cls-2",points:"201.41 118.62 126.37 5.43 51.33 118.62"}),Object(x.jsx)("polyline",{class:"cls-2",points:"98.33 48.02 110.15 63.71 126.65 52.57 143 63.71 154.62 48.02"}),Object(x.jsx)("polyline",{class:"cls-2",points:"236.94 119.04 193.43 53.42 149.93 119.04"}),Object(x.jsx)("polyline",{class:"cls-2",points:"176.88 78.38 182.52 90.03 193.43 83.36 205.59 90.19 209.98 78.38"}),Object(x.jsx)("polyline",{class:"cls-2",points:"102.81 119.04 59.31 53.42 15.8 119.04"}),Object(x.jsx)("polyline",{class:"cls-2",points:"42.75 78.38 48.38 90.03 59.29 83.36 71.46 90.19 75.84 78.38"})]}),Object(x.jsx)("h1",{class:"MuiTypography-root logo-text MuiTypography-caption MuiTypography-colorSecondary",children:"State Adventures"})]})})}var g=a(102),f=a(166),k=a(187),y=a(168),P=a(130),N=a(169),S=a(170),C=a(171),I=a(92),w=a.n(I),M=a(91),A=a.n(M),H=a(90),z=a.n(H),D=Object(m.a)((function(e){return{drawer:{width:240,padding:e.spacing(2)},padding:{paddingTop:e.spacing(4)}}}));function T(){var e=D(),t=Object(p.e)(),a=Object(p.f)(),s=[{text:"Explore Parks",icon:Object(x.jsx)(z.a,{}),path:"/"},{text:"Saved Parks",icon:Object(x.jsx)(A.a,{}),path:"/saved-parks"}],r=Object(n.useState)(!1),c=Object(g.a)(r,2),i=c[0],o=c[1],l=function(){o((function(e){return!e}))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f.a,{edge:"start",color:"secondary","aria-label":"open navigation",className:"navigation-btn",onClick:l,children:Object(x.jsx)(w.a,{})}),Object(x.jsxs)(k.a,{variant:"temporary",anchor:"right",open:i,onClose:l,className:e.drawer,classes:{paper:e.drawer},children:[Object(x.jsx)(y.a,{className:e.padding,children:s.map((function(e){return Object(x.jsxs)(P.a,{button:!0,component:"a",className:a.pathname===e.path?"active":null,onClick:function(){return t.push(e.path)},children:[Object(x.jsx)(N.a,{children:e.icon}),Object(x.jsx)(S.a,{children:e.text})]},e.text)}))}),Object(x.jsx)(C.a,{})]})]})}var U=function(){return Object(x.jsx)(b.a,{className:"appbar",color:"inherit",elevation:0,children:Object(x.jsxs)(O.a,{className:"toolbar",children:[Object(x.jsx)(v,{}),Object(x.jsx)(T,{})]})})},W=Object(m.a)((function(e){return{page:{width:"100%",position:"relative",top:118,maxWidth:1400,margin:"auto"}}}));function F(e){var t=e.children,a=W();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(U,{}),Object(x.jsx)("div",{className:a.page,children:t})]})}a(85);var B=a(63),R=a(174),V=a(175),E=a(188),G=a(185),L=a(177),K=a(131),Y=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={stateAbbreviations:["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"],selectedState:""},e.handleChange=function(t){e.setState(Object(B.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.fetchingParks(e.state.selectedState)},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(x.jsx)("form",{className:"hero-form",onSubmit:this.handleSubmit,children:Object(x.jsxs)(R.a,{children:[Object(x.jsxs)(V.a,{variant:"outlined",color:"secondary",children:[Object(x.jsx)(E.a,{id:"select-state",children:"Select State"}),Object(x.jsx)(G.a,{labelId:"select-state",name:"selectedState",value:this.state.selectedState,onChange:this.handleChange,children:this.state.stateAbbreviations.map((function(e){return Object(x.jsx)(L.a,{value:e,children:e},e)}))})]}),Object(x.jsx)(K.a,{type:"submit",variant:"contained",color:"primary",size:"large",children:"Find Parks"})]})})}}]),a}(n.Component),_=a(73),J=function(e){var t=e.fetchingParks,a=[{src:"https://images.unsplash.com/photo-1608233695800-34245ba7274f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",description:"Yellowstone National Park, United States"},{src:"https://images.unsplash.com/photo-1606859309981-270838d57ed8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",description:"Arches National Park, Utah, USA"}];return Object(x.jsxs)("div",{className:"hero",children:[Object(x.jsx)("div",{className:"hero-image-1",children:Object(x.jsx)("img",{className:"img",src:a[0].src,alt:a[0].description,title:a[0].description})}),Object(x.jsxs)("div",{className:"hero-content",children:[Object(x.jsx)(_.a,{variant:"h2",component:"h1",color:"secondary",gutterBottom:!0,children:"Start Your Park Adventure Today"}),Object(x.jsx)(Y,{fetchingParks:t})]}),Object(x.jsx)("div",{className:"hero-image-2",children:Object(x.jsx)("img",{className:"img",src:a[1].src,alt:a[1].description,title:a[1].description})})]})},q=a(178),Z=(a(126),a(179)),X=a(180),Q=a(181),$=a(182),ee=a(189),te=a(71),ae=a.n(te),ne=a(72),se=a.n(ne),re=a(94),ce=a.n(re),ie=function(e){var t=e.parkInfo,a=e.handleSaveParks,n=e.handleUnsavePark,s=e.handleSelectPark,r=e.history,c=e.parkIsSaved;return Object(x.jsx)(q.a,{item:!0,container:!0,justifyContent:"center",alignItems:"stretch",xs:12,sm:12,md:6,children:Object(x.jsxs)(Z.a,{className:"card",elevation:0,children:[Object(x.jsx)(X.a,{image:t.images[0].url}),Object(x.jsxs)(Q.a,{align:"left",children:[Object(x.jsx)(_.a,{variant:"h5",component:"h3",color:"secondary",gutterBottom:!0,children:t.fullName}),Object(x.jsx)(_.a,{variant:"caption",component:"p",color:"secondary",children:t.description.slice(0,200).concat("...")})]}),Object(x.jsxs)($.a,{className:"card-actions",children:[void 0===c?Object(x.jsx)(ee.a,{title:"Save Park",arrow:!0,children:Object(x.jsx)(f.a,{color:"primary",onClick:function(){return a(t)},children:Object(x.jsx)(ae.a,{})})}):Object(x.jsx)(ee.a,{title:"Remove Park",arrow:!0,children:Object(x.jsx)(f.a,{color:"primary",onClick:function(){return n(t)},children:Object(x.jsx)(se.a,{})})}),Object(x.jsx)(K.a,{variant:"text",size:"large",color:"primary",endIcon:Object(x.jsx)(ce.a,{}),onClick:function(){s(t),r.push("/park-details/overview")},children:"View Park"})]})]})})},oe={AL:"Alabama",AK:"Alaska",AS:"American Samoa",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",DC:"District Of Columbia",FM:"Federated States Of Micronesia",FL:"Florida",GA:"Georgia",GU:"Guam",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MH:"Marshall Islands",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",MP:"Northern Mariana Islands",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PW:"Palau",PA:"Pennsylvania",PR:"Puerto Rico",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VI:"Virgin Islands",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"};function le(e){return oe[e]}var de=function(e){var t=e.title,a=e.parkState,n=e.parks,s=e.handleSaveParks,r=e.handleUnsavePark,c=e.handleSelectPark,i=e.history,o=e.savedParks;return Object(x.jsxs)(q.a,{container:!0,id:"results",direction:"column",justifyContent:"center",alignItems:"center",children:[Object(x.jsx)(q.a,{container:!0,item:!0,direction:"column",justifyContent:"center",alignItems:"center",children:Object(x.jsxs)(_.a,{variant:"h3",component:"h2",color:"secondary",className:"center",gutterBottom:!0,children:[Object(x.jsx)("span",{className:"subtitle",children:le(a)}),t]})}),Object(x.jsx)(q.a,{container:!0,item:!0,direction:"row",justifyContent:"space-around",alignItems:"stretch",spacing:6,children:n.map((function(e){return Object(x.jsx)(ie,{handleSaveParks:s,handleUnsavePark:r,handleSelectPark:c,history:i,parkIsSaved:(t=e,o.find((function(e){return e.id===t.id}))),parkInfo:e},e.id);var t}))})]})},he="GDTNkwzQ9ZhJSamTurHittNkI6YnlO2vKmlEqITr",je=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={selectedParks:[],selectedState:null,defaultParks:[]},e.fetchParksApi=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;fetch("https://developer.nps.gov/api/v1/parks?stateCode=".concat(t,"=&api_key=").concat(he)).then((function(e){return e.json()})).then((function(a){e.setState({selectedParks:a.data,selectedState:t})}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://developer.nps.gov/api/v1/parks?api_key=".concat(he,"&limit=50")).then((function(e){return e.json()})).then((function(t){for(var a=[],n=0;n<4;n++)a.push(t.data[Math.floor(Math.random()*t.data.length)]);e.setState({defaultParks:a})}))}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(J,{fetchingParks:this.fetchParksApi}),Object(x.jsx)(de,{history:this.props.history,title:"National Parks",savedParks:this.props.savedParks,parkState:this.state.selectedState,handleSaveParks:this.props.handleSaveParks,handleUnsavePark:this.props.handleUnsavePark,handleSelectPark:this.props.handleSelectPark,parks:0!==this.state.selectedParks.length?this.state.selectedParks:this.state.defaultParks})]})}}]),a}(n.Component),ue=function(e){var t=e.history,a=e.savedParks,n=e.handleUnsavePark,s=e.handleSaveParks,r=e.handleSelectPark;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(de,{history:t,title:"Saved Parks",savedParks:a,handleSaveParks:s,handleUnsavePark:n,handleSelectPark:r,parks:a})})},pe=(a(127),function(e){var t=e.name,a=e.state,n=e.history,s=e.page;return Object(x.jsxs)(q.a,{item:!0,className:"details-menu background-1",children:[Object(x.jsxs)(_.a,{variant:"h6",component:"h2",className:"text-light",gutterBottom:!0,children:[Object(x.jsx)("span",{className:"subtitle",children:le(a)}),t]}),Object(x.jsx)(y.a,{className:"text-light",children:[{text:"Overview",path:"/park-details/overview"},{text:"Camping",path:"/park-details/camping"}].map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(P.a,{button:!0,component:"a",className:s===e.path?"active":null,onClick:function(){return n.push(e.path)},children:Object(x.jsx)(S.a,{children:e.text})},e.text),Object(x.jsx)(C.a,{className:"background-3"})]})}))})]})}),me=a(46),be=a.n(me),Oe=function(e){var t=e.hours,a=e.address,n=e.directionsUrl,s=a.find((function(e){return"Physical"===e.type}));return Object(x.jsxs)(q.a,{item:!0,className:"details-info background-2 text-light",children:[Object(x.jsx)(_.a,{variant:"h6",component:"h3",gutterBottom:!0,children:"Park Information"}),Object(x.jsx)(_.a,{variant:"subtitle1",component:"p",className:"padding-top",children:"Hours"}),Object(x.jsx)(_.a,{variant:"body2",gutterBottom:!0,children:t.description}),Object(x.jsxs)(y.a,{className:"hours",children:[Object(x.jsxs)(P.a,{children:["Monday: ",t.standardHours.monday]}),Object(x.jsxs)(P.a,{children:["Tuesday: ",t.standardHours.tuesday]}),Object(x.jsxs)(P.a,{children:["Wednesday: ",t.standardHours.wednesday]}),Object(x.jsxs)(P.a,{children:["Thursday: ",t.standardHours.thursday]}),Object(x.jsxs)(P.a,{children:["Friday: ",t.standardHours.friday]}),Object(x.jsxs)(P.a,{children:["Saturday: ",t.standardHours.saturday]}),Object(x.jsxs)(P.a,{children:["Sunday: ",t.standardHours.sunday]})]}),Object(x.jsx)(_.a,{variant:"subtitle1",component:"p",className:"padding-top",children:"Location"}),Object(x.jsxs)(y.a,{className:"address",children:[Object(x.jsx)(P.a,{children:s.line1}),s.line2?Object(x.jsx)(P.a,{children:s.line2}):null,s.line3?Object(x.jsx)(P.a,{children:s.line3}):null,Object(x.jsxs)(P.a,{children:[s.city,", ",s.stateCode," ",s.postalCode]})]}),Object(x.jsx)("div",{className:"padding-top",children:Object(x.jsx)(K.a,{href:n,target:"_blank",variant:"contained",size:"large",endIcon:Object(x.jsx)(be.a,{}),children:"Park Directions"})})]})};var xe=function(e){var t,a=e.info,n=e.url,s=e.contactInfo,r=e.image,c=e.parkIsSaved,i=e.handleUnsavePark,o=e.handleSaveParks,l=e.parkInfo,d={width:"100%",height:"55%",position:"absolute",left:0,bottom:0,background:"url(".concat(r.url,") no-repeat center"),backgroundSize:"cover",zIndex:-1};return Object(x.jsxs)(q.a,{item:!0,xs:12,sm:12,md:5,className:"details-about",children:[Object(x.jsx)(C.a,{className:"background-3"}),Object(x.jsxs)(q.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:[Object(x.jsxs)(q.a,{item:!0,children:[Object(x.jsx)(_.a,{variant:"h3",component:"h2",color:"secondary",className:"padding-top-lg",children:"About Park"}),Object(x.jsx)(_.a,{variant:"h4",component:"p",children:Object(x.jsx)("span",{className:"subtitle",children:"Summary"})})]}),Object(x.jsx)(q.a,{item:!0,children:void 0===c?Object(x.jsx)(ee.a,{title:"Save Park",arrow:!0,children:Object(x.jsx)(f.a,{color:"primary",onClick:function(){return o(l)},children:Object(x.jsx)(ae.a,{})})}):Object(x.jsx)(ee.a,{title:"Remove Park",arrow:!0,children:Object(x.jsx)(f.a,{color:"primary",onClick:function(){return i(l)},children:Object(x.jsx)(se.a,{})})})})]}),Object(x.jsx)(_.a,{className:"color-3 padding-top",children:a}),Object(x.jsxs)(y.a,{className:"hours color-1",children:[s.phoneNumbers?Object(x.jsxs)(P.a,{children:[Object(x.jsx)("span",{className:"strong",children:"Tel:"}),"\xa0 ",(t=s.phoneNumbers[0].phoneNumber,[t.slice(0,3),t.slice(3,6),t.slice(6)].join("-"))]}):null,s.emailAddresses?Object(x.jsxs)(P.a,{children:[Object(x.jsx)("span",{className:"strong",children:"Email:"}),"\xa0 ",s.emailAddresses[0].emailAddress]}):null]}),Object(x.jsx)("div",{className:"padding-top",children:Object(x.jsx)(K.a,{href:n,target:"_blank",variant:"contained",size:"large",color:"primary",endIcon:Object(x.jsx)(be.a,{}),children:"View Park Website"})}),Object(x.jsx)("div",{style:d,className:"image-hidden-xs"})]})};function ve(e){var t=e.image,a=e.fees,n={width:"100%",height:"55%",minHeight:500,position:"relative",left:0,top:0,background:t?"url(".concat(t.url,") no-repeat center"):"#A38B74",backgroundSize:"cover",zIndex:-1,display:"flex",alignItems:"flex-end"};return Object(x.jsx)(q.a,{item:!0,container:!0,style:n,children:Object(x.jsxs)(q.a,{item:!0,className:"details-fees text-light",children:[Object(x.jsx)(_.a,{variant:"h6",component:"h3",gutterBottom:!0,children:"Entrance Fees"}),Object(x.jsx)(_.a,{gutterBottom:!0,children:Object(x.jsxs)("span",{className:"strong",children:["Cost: $",a[0].cost]})}),Object(x.jsx)(_.a,{children:a[0].description})]})})}var ge=function(e){var t=e.activities;return Object(x.jsxs)(q.a,{item:!0,className:"details-activity-item item-1 background-1",children:[Object(x.jsxs)(_.a,{variant:"h6",component:"h2",className:"text-light",gutterBottom:!0,children:["Activites",Object(x.jsx)("span",{className:"subtitle",children:"To Do"})]}),Object(x.jsx)(y.a,{className:"text-light",children:t.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(P.a,{children:Object(x.jsx)(S.a,{children:e.name})},e.id),Object(x.jsx)(C.a,{className:"background-3"})]})}))})]})},fe=a(98),ke=a.n(fe),ye=a(95),Pe=a.n(ye),Ne=a(96),Se=a.n(Ne),Ce=a(97),Ie=a.n(Ce),we=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={temp:null,tempDetails:null},e.renderWeatherIcon=function(e){var t;switch(e){case"Partly cloudy":case"Cloudy":case"Overcast":case"Fog":t=Object(x.jsx)(Pe.a,{});break;case"Mist":case"Patchy rain possible":case"Patchy light drizzle":case"Light drizzle":case"Patchy light rain":case"Light rain":case"Moderate rain at times":case"Moderate rain":case"Heavy rain at times":case"Heavy rain":case"Light freezing rain":case"Thundery outbreaks possible":case"Patchy freezing drizzle possible":case"Freezing drizzle":case"Heavy freezing drizzle":case"Rain":t=Object(x.jsx)(Se.a,{});break;case"Patchy snow possible":case"Patchy sleet possible":case"Blowing snow":case"Blizzard":case"Freezing fog":t=Object(x.jsx)(Ie.a,{});break;default:t=Object(x.jsx)(ke.a,{})}return t},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.address.find((function(e){return"Physical"===e.type}));fetch("https://api.weatherstack.com/current?access_key=".concat("fba8c59e3a5f9d7d2ed8d4014b3ddc97","&units=f&query=").concat(t.postalCode)).then((function(e){return e.json()})).then((function(t){e.setState({temp:t.current.temperature,tempDetails:t.current.weather_descriptions[0]})}))}},{key:"render",value:function(){return Object(x.jsxs)(q.a,{item:!0,className:"details-activity-item item-2 background-2 text-light",children:[Object(x.jsx)(_.a,{variant:"h6",component:"h2",className:"center",gutterBottom:!0,children:"Current Weather"}),Object(x.jsx)("div",{className:"weather-icon",children:this.renderWeatherIcon(this.state.tempDetails)}),Object(x.jsxs)("div",{className:"center",children:[Object(x.jsxs)(_.a,{className:"padding-top",variant:"h5",component:"p",children:[this.state.temp,"\u2109"]}),Object(x.jsx)(_.a,{variant:"subtitle1",children:this.state.tempDetails})]}),Object(x.jsx)(_.a,{className:"padding-top-lg",children:this.props.description.split(".").slice(0,3).join(".")})]})}}]),a}(n.Component),Me=function(e){var t,a=e.park,n=e.handleUnsavePark,s=e.handleSaveParks,r=e.savedParks;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(xe,{info:a.description,url:a.url,contactInfo:a.contacts,image:a.images[Math.floor(Math.random()*a.images.length)],parkIsSaved:(t=a,r.find((function(e){return e.id===t.id}))),handleUnsavePark:n,handleSaveParks:s,parkInfo:a}),Object(x.jsxs)(q.a,{item:!0,xs:12,sm:12,md:4,className:"relative details-right",children:[Object(x.jsx)(ve,{image:a.images[Math.floor(Math.random()*a.images.length)],fees:a.entranceFees}),Object(x.jsxs)(q.a,{item:!0,container:!0,className:"details-activities",children:[Object(x.jsx)(ge,{activities:a.activities}),Object(x.jsx)(we,{address:a.addresses,description:a.weatherInfo})]})]})]})},Ae=a(59),He={width:"100%",height:"100%"},ze=function(e){var t=e.latitude,a=e.longitude,n=e.campgrounds,s=e.selectedCampground,r=e.handleCampgroundClick,c=e.handleCampgroundWindowClick;return Object(x.jsx)(Ae.c,{googleMapsApiKey:"AIzaSyCr5GS8r-DkNhOCsRs6plxlEB8C1Xm_dx8",children:Object(x.jsxs)(Ae.a,{mapContainerStyle:He,center:{lat:t,lng:a},zoom:8,children:[0!==n.length?n.map((function(e){return Object(x.jsx)(Ae.d,{position:{lat:parseInt(e.latitude),lng:parseInt(e.longitude)},onClick:function(){return r(e)}},e.id)})):Object(x.jsx)(_.a,{variant:"h4",component:"p",gutterBottom:!0,className:"map-modal text-light",children:"No Campgrounds Avaliable"}),s&&Object(x.jsx)(Ae.b,{position:{lat:parseInt(s.latitude),lng:parseInt(s.longitude)},onCloseClick:c,children:Object(x.jsxs)(Z.a,{elevation:0,className:"info-window",children:[0!==s.images.length?Object(x.jsx)(X.a,{image:s.images[0].url}):null,Object(x.jsxs)(Q.a,{children:[Object(x.jsx)(_.a,{variant:"h6",component:"p",color:"secondary",gutterBottom:!0,children:s.name}),Object(x.jsx)(_.a,{variant:"caption",component:"p",color:"secondary",children:s.description})]})]})})]})})},De=function(e){var t=e.campground,a=e.height,n={maxHeight:a?"".concat(a,"px"):"800px"};return Object(x.jsxs)(q.a,{item:!0,xs:12,sm:12,md:3,style:n,className:"details-camping background-2 text-light",children:[Object(x.jsx)(_.a,{variant:"h6",component:"h3",gutterBottom:!0,children:"Campground Information"}),0!==t.operatingHours.length?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(_.a,{variant:"subtitle1",component:"p",className:"padding-top",children:"Hours"}),Object(x.jsx)(_.a,{variant:"body2",gutterBottom:!0,children:t.operatingHours[0].description})]}):null,t.fees&&t.fees.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(_.a,{variant:"subtitle1",component:"p",className:"padding-top",children:e.title}),Object(x.jsx)(_.a,{variant:"body2",gutterBottom:!0,children:e.description}),Object(x.jsx)(y.a,{className:"hours",children:Object(x.jsx)(P.a,{children:Object(x.jsxs)("span",{class:"strong",children:["Cost: $",e.cost]})})})]},e.title)})),Object(x.jsx)(_.a,{variant:"subtitle1",component:"p",className:"padding-top",children:"Reservations"}),Object(x.jsx)(_.a,{variant:"body2",children:t.reservationInfo}),Object(x.jsxs)(y.a,{className:"hours",children:[Object(x.jsxs)(P.a,{children:["First Come: ",t.numberOfSitesFirstComeFirstServe," Spots"]}),Object(x.jsxs)(P.a,{children:["Reserved: ",t.numberOfSitesReservable," Spots"]})]}),t.reservationUrl&&Object(x.jsx)("div",{className:"padding-top",children:Object(x.jsx)(K.a,{href:t.reservationUrl,target:"_blank",variant:"contained",size:"large",endIcon:Object(x.jsx)(be.a,{}),children:"Reserve Spot"})}),Object(x.jsx)(_.a,{variant:"subtitle1",component:"p",className:"padding-top",children:"Directions"}),Object(x.jsx)(_.a,{variant:"body2",gutterBottom:!0,children:t.directionsOverview}),Object(x.jsx)("div",{className:"padding-top",children:Object(x.jsx)(K.a,{href:t.directionsUrl,target:"_blank",variant:"contained",size:"large",endIcon:Object(x.jsx)(be.a,{}),children:"Directions"})})]})},Te=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={campgrounds:[],selectedCampground:null},e.handleCampgroundClick=function(t){e.setState({selectedCampground:t})},e.handleCampgroundWindowClick=function(){e.setState({selectedCampground:null})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://developer.nps.gov/api/v1/campgrounds?parkCode=".concat(this.props.parkcode,"=&api_key=").concat("GDTNkwzQ9ZhJSamTurHittNkI6YnlO2vKmlEqITr","&limit=500")).then((function(e){return e.json()})).then((function(t){e.setState({campgrounds:t.data})}))}},{key:"render",value:function(){var e=document.getElementById("park-details").offsetHeight;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(q.a,{item:!0,xs:12,sm:12,md:this.state.selectedCampground?6:9,className:"details-map",children:Object(x.jsx)(ze,{longitude:parseInt(this.props.longitude),latitude:parseInt(this.props.latitude),campgrounds:this.state.campgrounds,selectedCampground:this.state.selectedCampground,handleCampgroundClick:this.handleCampgroundClick,handleCampgroundWindowClick:this.handleCampgroundWindowClick})}),this.state.selectedCampground&&Object(x.jsx)(De,{height:e,campground:this.state.selectedCampground})]})}}]),a}(n.Component),Ue=a(99),We=a.n(Ue),Fe=function(e){var t=e.history,a=e.location,n=e.match,s=e.park,r=e.savedParks,c=e.handleUnsavePark,i=e.handleSaveParks;return Object(x.jsxs)(q.a,{container:!0,children:[Object(x.jsx)(q.a,{item:!0,children:Object(x.jsx)(K.a,{size:"large",variant:"text",startIcon:Object(x.jsx)(We.a,{}),onClick:t.goBack,children:"Go Back"})}),Object(x.jsxs)(q.a,{item:!0,container:!0,className:"park-details",id:"park-details",children:[Object(x.jsxs)(q.a,{item:!0,className:"details-left",xs:12,sm:12,md:3,children:[Object(x.jsx)(pe,{state:s.states,name:s.fullName,history:t,page:a.pathname}),Object(x.jsx)(Oe,{hours:s.operatingHours[0],address:s.addresses,directionsUrl:s.directionsUrl})]}),Object(x.jsx)(p.a,{path:"".concat(n.path,"/overview"),children:Object(x.jsx)(Me,{savedParks:r,handleUnsavePark:c,handleSaveParks:i,park:s})}),Object(x.jsx)(p.a,{path:"".concat(n.path,"/camping"),children:Object(x.jsx)(Te,{parkcode:s.parkCode,longitude:s.longitude,latitude:s.latitude})})]})]})},Be=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={savedParks:[],selectedPark:null},e.handleSaveParks=function(t){var a={method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(t)};fetch("http://localhost:3000/parks",a),e.setState((function(e){return{savedParks:[].concat(Object(o.a)(e.savedParks),[t])}}))},e.handleUnsavePark=function(t){var a=e.state.savedParks.filter((function(e){return e!==t}));e.setState({savedParks:a}),fetch("http://localhost:3000/parks/".concat(t.id),{method:"DELETE"})},e.handleSelectPark=function(t){e.setState({selectedPark:t})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/parks").then((function(e){return e.json()})).then((function(t){e.setState({savedParks:t})}))}},{key:"render",value:function(){var e=this;return Object(x.jsx)(u.a,{children:Object(x.jsxs)(F,{children:[Object(x.jsx)(p.a,{exact:!0,path:"/",render:function(t){return Object(x.jsx)(je,Object(i.a)(Object(i.a)({},t),{},{handleSaveParks:e.handleSaveParks,handleUnsavePark:e.handleUnsavePark,handleSelectPark:e.handleSelectPark,savedParks:e.state.savedParks}))}}),Object(x.jsx)(p.a,{exact:!0,path:"/saved-parks",render:function(t){return Object(x.jsx)(ue,Object(i.a)(Object(i.a)({},t),{},{savedParks:e.state.savedParks,handleSelectPark:e.handleSelectPark,handleUnsavePark:e.handleUnsavePark,handleSaveParks:e.handleSaveParks}))}}),Object(x.jsx)(p.a,{path:"/park-details",render:function(t){return Object(x.jsx)(Fe,Object(i.a)(Object(i.a)({},t),{},{park:e.state.selectedPark,savedParks:e.state.savedParks,handleUnsavePark:e.handleUnsavePark,handleSaveParks:e.handleSaveParks}))}})]})})}}]),a}(n.Component),Re=a(100),Ve=a(183),Ee=Object(Re.a)({palette:{primary:{light:"#a5c89a",main:"#76976c",dark:"#496941",contrastText:"#fff"},secondary:{main:Ve.a[900],contrastText:"#fff"}},typography:{h1:{fontFamily:'"Montserrat", Helvetica, Arial, sans-serif',fontWeight:600,fontSize:"5em"},h2:{fontFamily:'"Montserrat", Helvetica, Arial, sans-serif',fontWeight:600,fontSize:"3.75em"},h3:{fontFamily:'"Montserrat", Helvetica, Arial, sans-serif',fontWeight:600,fontSize:"3em"},h4:{fontFamily:'"Montserrat", Helvetica, Arial, sans-serif',fontWeight:600},h5:{fontFamily:'"Montserrat", Helvetica, Arial, sans-serif',fontWeight:600},h6:{fontFamily:'"Montserrat", Helvetica, Arial, sans-serif',fontWeight:600,fontSize:"1.25em"},subtitle1:{fontSize:"1.25em"},body2:{fontWeight:100,fontSize:"1em",lineHeight:1.5}}}),Ge=a(184);c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(Ge.a,{theme:Ee,children:Object(x.jsx)(Be,{})})}),document.getElementById("root"))},85:function(e,t,a){}},[[128,1,2]]]);
//# sourceMappingURL=main.856e1d35.chunk.js.map