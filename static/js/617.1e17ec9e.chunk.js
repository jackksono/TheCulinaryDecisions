"use strict";(self.webpackChunktheculinarydecisions=self.webpackChunktheculinarydecisions||[]).push([[617],{6617:function(e,t,s){s.r(t);var r=s(4942),o=s(1413),n=s(9439),l=s(2791),a=s(9170),i=s(7530),c=s(7425),x=s(6053),d=s(184);t.default=function(e){var t=(0,l.useState)({name:"",email:"",phone:""}),s=(0,n.Z)(t,2),u=s[0],m=s[1],h=(0,l.useState)(""),p=(0,n.Z)(h,2),f=p[0],b=p[1],g=(0,l.useState)(),j=(0,n.Z)(g,2),v=j[0],y=j[1],N=(0,l.useState)(!1),k=(0,n.Z)(N,2),w=k[0],C=k[1],M=(0,l.useState)(!1),q=(0,n.Z)(M,2),S=q[0],Z=q[1],P=function(){return(0,d.jsx)("p",{className:"text-xs text-black sm:text-base",children:"Your message has been successfully sent!"})},z=(0,a.Vd)((function(){e.setTrigger(!1)})),B=function(){return(0,d.jsx)("p",{children:"**Please enter a valid email**"})},E=function(e){var t=e.target.name,s=e.target.value;m((0,o.Z)((0,o.Z)({},u),{},(0,r.Z)({},t,s)))},L=function(){document.querySelector(".toggle").classList.toggle("hidden"),document.querySelector(".arrow").classList.toggle("hidden"),document.querySelector(".close").classList.toggle("hidden")};return e.trigger?(0,d.jsx)("div",{className:"fixed z-20 overflow-auto inset-x-0 justify-center mx-auto w-3/4 sm:w-1/2 h-[450px] sm:h-[700px] items-center bg-white  rounded-xl box-shadow-inset-0--3em-3em-opacity-10",ref:z,children:(0,d.jsxs)("form",{className:"",method:"post",onSubmit:function(e){return function(e,t){e.preventDefault(),S?Z(!0):(i.ZP.sendForm("service_nznrnso","template_5kja3h8",e.target,"5Gj3usQUeUTfCkRdY").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),m(""),y(""),b(""),C(!0))}(e)},children:[(0,d.jsx)("div",{className:"flex justify-end pr-5 text-2xl text-black font-Montserrat",children:(0,d.jsx)("button",{onClick:function(){return e.setTrigger(!1)},children:"X"})}),(0,d.jsx)("h1",{className:"flex justify-center text-xl font-extrabold text-black sm:text-4xl font-Montserrat",children:"Business Inquiries"}),(0,d.jsxs)("div",{className:"pt-3 pl-6 text-black sm:pt-0",children:[(0,d.jsxs)("span",{className:"flex pl-3 text-xs font-bold text-black sm:text-lg font-Montserrat",children:["Name  ",(0,d.jsx)("span",{className:"sm:text-sm",children:"(required)"})]}),(0,d.jsx)("input",{className:"flex justify-center p-1 m-1 sm:m-1 border-2 h-[20px] sm:h-auto border-black border-solid font-Montserrat w-11/12 text-xs sm:text-lg focus:outline-none focus:border-4 focus:border-solid focus:shadow-2xl rounded-xl",type:"text",name:"name",id:"",onChange:E,value:u.name,placeholder:"Enter name",required:!0})]}),(0,d.jsxs)("div",{className:"pl-6 text-black sm:pt-2",children:[(0,d.jsxs)("span",{className:"flex pl-3 text-xs font-bold sm:text-lg font-Montserrat",children:["Email ",(0,d.jsx)("span",{className:"sm:text-sm",children:"(required)"})]}),(0,d.jsx)("input",{className:"flex justify-center w-11/12 p-1 m-1 sm:m-1 h-[20px] sm:h-auto border-2 font-Montserrat text-xs border-black border-solid sm:text-lg focus:outline-none rounded-xl focus:border-4 focus:border-solid focus:shadow-2xl",type:"email",name:"email",id:"",onChange:function(e){/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(u.email)?Z(!1):Z(!0),E(e)},value:u.email,placeholder:"example@gmail.com",required:!0}),(0,d.jsx)("h2",{className:"font-semibold text-center text-red-900 underline text-md font-Montserrat",children:S?(0,d.jsx)(B,{}):null})]}),(0,d.jsxs)("div",{className:"pl-6 text-black sm:pt-2",children:[(0,d.jsx)("span",{className:"flex pl-3 text-xs font-bold sm:text-lg font-Montserrat",children:"Phone Number:"}),(0,d.jsx)("input",{className:"flex justify-center p-1 m-1 sm:m-1 border-2 h-[20px] sm:h-auto border-black border-solid font-Montserrat w-11/12 text-xs sm:text-lg focus:outline-none focus:border-4 focus:border-solid focus:shadow-2xl rounded-xl",type:"phone",name:"phone",id:"",onChange:E,value:u.phone,placeholder:"+1 (xxx)-xxx-xxxx"})]}),(0,d.jsxs)("div",{className:"pl-6 text-black sm:pt-2",children:[(0,d.jsxs)("span",{className:"flex pl-3 text-xs font-bold sm:text-lg font-Montserrat",children:["Service Requested ",(0,d.jsx)("span",{className:"sm:text-sm",children:"(required)"})]}),(0,d.jsx)("input",{className:"relative flex justify-center w-11/12 p-1 m-1 sm:m-1 h-[20px] font-Montserrat sm:h-auto text-xs sm:text-lg border-2 border-black border-solid focus:outline-none rounded-xl focus:border-4 focus:border-solid focus:shadow-2xl",type:"serviceRequested",name:"serviceRequested",id:"",onClick:L,onChange:E,value:f,placeholder:"List of Services...",required:!0}),(0,d.jsx)(c.kc8,{className:"arrow absolute sm:text-[100px] text-black transform -translate-y-6 sm:-translate-y-1/2 right-0 mr-12 sm:pb-12 sm:mr-12 sm:cursor-pointer hover:text-gray-400",onClick:L}),(0,d.jsx)(x.v8y,{className:"close hidden absolute sm:text-[80px] text-black transform -translate-y-5 sm:-translate-y-1/2 right-0 pb-1 mr-10 sm:pb-12 sm:mr-16 sm:cursor-pointer hover:text-gray-400",onClick:L}),(0,d.jsx)("div",{className:"justify-center pt-0 pl-1 sm:pl-4",children:(0,d.jsxs)("div",{className:"items-center hidden w-1/2 text-[8px] bg-white border border-black sm:text-base toggle rounded-xl",children:[(0,d.jsx)("ul",{className:"flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){b("Brand Marketing"),L()},children:"Brand Marketing"}),(0,d.jsx)("ul",{className:"flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){b("Event Planning"),L()},children:"Event Planning"}),(0,d.jsx)("ul",{className:"flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){b("Food and Beverage Consulting"),L()},children:"Food and Beverage Consulting"}),(0,d.jsx)("ul",{className:"flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){b("Hospitality Consulting"),L()},children:"Hospitality Consulting"}),(0,d.jsx)("ul",{className:"flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){b("Merchandising"),L()},children:"Merchandising"}),(0,d.jsx)("ul",{className:"flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){b("Nightlife Consulting"),L()},children:"Nightlife Consulting"}),(0,d.jsx)("ul",{className:"flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){b("Open Venue Protocol"),L()},children:"Open Venue Protocol"}),(0,d.jsx)("ul",{className:"flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){b("Sourcing"),L()},children:"Sourcing"}),(0,d.jsx)("ul",{className:"flex sm:p-2 pl-2  border cursor-pointer h-[20px] sm:h-auto border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){b("Other"),L()},children:"Other"})]})})]}),(0,d.jsxs)("div",{className:"pl-6 text-black align-baseline sm:pt-2",children:[(0,d.jsxs)("span",{className:"flex pl-3 text-xs font-bold sm:text-lg font-Montserrat",children:["Message ",(0,d.jsx)("span",{className:"sm:text-sm",children:"(required)"})]}),(0,d.jsx)("textarea",{className:"flex justify-center w-11/12 p-1 m-1 sm:m-1 h-[75px] font-Montserrat sm:h-auto text-xs sm:text-lg border-2 border-black border-solid focus:outline-none focus:border-4 rounded-xl focus:border-solid focus:shadow-2xl",name:"message",id:"",cols:"30",rows:"5",onChange:function(e){y(e.target.value)},value:v,placeholder:"Enter message here...",required:!0})]}),(0,d.jsx)("h2",{className:"justify-center pb-2 text-lg text-center text-white",children:w?(0,d.jsx)(P,{}):null}),(0,d.jsx)("div",{className:"items-center justify-center text-centerv sm:py-2",children:(0,d.jsx)("button",{className:"w-1/5 sm:text-xl p-2 h-[40px] text-white sm:w-1/4 bg-black rounded-xl hover:text-black hover:bg-stone-100",type:"submit",children:"Send"})})]})}):""}}}]);
//# sourceMappingURL=617.1e17ec9e.chunk.js.map