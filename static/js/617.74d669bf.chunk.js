"use strict";(self.webpackChunktheculinarydecisions=self.webpackChunktheculinarydecisions||[]).push([[617],{6617:function(e,t,r){r.r(t);var l=r(4942),s=r(1413),o=r(9439),n=r(2791),a=r(9170),i=r(7530),c=r(7425),d=r(6053),x=r(184);t.default=function(e){var t=(0,n.useState)({name:"",email:"",phone:""}),r=(0,o.Z)(t,2),u=r[0],g=r[1],h=(0,n.useState)(""),m=(0,o.Z)(h,2),b=m[0],f=m[1],p=(0,n.useState)(),j=(0,o.Z)(p,2),v=j[0],y=j[1],N=(0,n.useState)(!1),k=(0,o.Z)(N,2),w=k[0],C=k[1],q=(0,n.useState)(!1),S=(0,o.Z)(q,2),Z=S[0],M=S[1],P=function(){return(0,x.jsx)("p",{className:"text-black",children:"Your message has been successfully sent!"})},z=(0,a.Vd)((function(){e.setTrigger(!1)})),B=function(){return(0,x.jsx)("p",{children:"**Please enter a valid email**"})},E=function(e){var t=e.target.name,r=e.target.value;g((0,s.Z)((0,s.Z)({},u),{},(0,l.Z)({},t,r)))},L=function(){document.querySelector(".toggle").classList.toggle("hidden"),document.querySelector(".arrow").classList.toggle("hidden"),document.querySelector(".close").classList.toggle("hidden")};return e.trigger?(0,x.jsx)("div",{className:"fixed z-10 lg:mb-28 overflow-auto lg:inset-x-0 justify-center lg:mx-auto w-84 lg:w-1/2 lg:h-[820px] items-center bg-white  rounded-xl box-shadow-inset-0--3em-3em-opacity-10",ref:z,children:(0,x.jsxs)("form",{className:"",method:"post",onSubmit:function(e){return function(e,t){e.preventDefault(),Z?M(!0):(i.ZP.sendForm("service_nznrnso","template_5kja3h8",e.target,"5Gj3usQUeUTfCkRdY").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),g(""),y(""),f(""),C(!0))}(e)},children:[(0,x.jsx)("div",{className:"flex justify-end pr-5 text-2xl text-black",children:(0,x.jsx)("button",{onClick:function(){return e.setTrigger(!1)},children:"X"})}),(0,x.jsx)("h1",{className:"flex justify-center text-2xl font-extrabold text-black lg:text-4xl font-Montserrat",children:"Business Inquiries"}),(0,x.jsxs)("div",{className:"pl-6 text-lg text-black",children:[(0,x.jsx)("span",{className:"pl-3 text-sm font-bold text-black lg:flex lg:text-2xl font-Montserrat",children:"Name (required)"}),(0,x.jsx)("input",{className:"flex justify-center p-1 m-1 lg:m-3 border-2 h-[25px] lg:h-auto border-black border-solid  w-11/12 text-md lg:text-lg focus:outline-none focus:border-4 focus:border-solid focus:shadow-2xl bg-opacity-90 rounded-xl",type:"text",name:"name",id:"",onChange:E,value:u.name,placeholder:"Enter name",required:!0})]}),(0,x.jsxs)("div",{className:"pl-6 text-lg text-black lg:pt-2",children:[(0,x.jsxs)("span",{className:"pl-3 text-sm font-bold lg:flex lg:text-2xl font-Montserrat",children:["Email ",(0,x.jsx)("span",{className:"lg:text-sm",children:"(required)"})]}),(0,x.jsx)("input",{className:"flex justify-center w-11/12 p-1 m-1 lg:m-3 h-[25px] lg:h-auto border-2  border-black border-solid lg:text-lg focus:outline-none rounded-xl focus:border-4 focus:border-solid focus:shadow-2xl",type:"email",name:"email",id:"",onChange:function(e){/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(u.email)?M(!1):M(!0),E(e)},value:u.email,placeholder:"example@gmail.com",required:!0}),(0,x.jsx)("h2",{className:"font-semibold text-center text-red-900 underline text-md ",children:Z?(0,x.jsx)(B,{}):null})]}),(0,x.jsxs)("div",{className:"pl-6 text-lg text-black lg:pt-2",children:[(0,x.jsx)("span",{className:"pl-3 text-sm font-bold lg:flex lg:text-2xl font-Montserrat",children:"Phone Number:"}),(0,x.jsx)("input",{className:"flex justify-center p-1 m-1 lg:m-3 border-2 h-[25px] lg:h-auto border-black border-solid  w-11/12 text-md lg:text-lg focus:outline-none focus:border-4 focus:border-solid focus:shadow-2xl bg-opacity-90 rounded-xl",type:"phone",name:"phone",id:"",onChange:E,value:u.phone,placeholder:"+1 (xxx)-xxx-xxxx"})]}),(0,x.jsxs)("div",{className:"pl-6 text-lg text-black lg:pt-2",children:[(0,x.jsxs)("span",{className:"pl-3 text-sm font-bold lg:flex lg:text-2xl font-Montserrat",children:["Service Requested ",(0,x.jsx)("span",{className:"lg:text-sm",children:"(required)"})]}),(0,x.jsx)("input",{className:"relative flex justify-center w-11/12 p-1 m-1 lg:m-3 h-[25px] lg:h-auto text-md lg:text-lg border-2 border-black border-solid focus:outline-none rounded-xl focus:border-4 focus:border-solid focus:shadow-2xl",type:"serviceRequested",name:"serviceRequested",id:"",onClick:L,value:b,placeholder:"List of Services...",required:!0}),(0,x.jsx)(c.kc8,{className:"arrow absolute lg:text-[120px] text-black transform lg:-translate-y-1/2 lg:right-0 lg:mb-10 lg:pb-16 lg:mr-12 lg:cursor-pointer",onClick:L}),(0,x.jsx)(d.v8y,{className:"close hidden absolute lg:text-[100px] text-gray-500 transform lg:-translate-y-1/2 lg:right-0 lg:mb-10 lg:pb-16 lg:mr-16 lg:cursor-pointer",onClick:L}),(0,x.jsx)("div",{className:"justify-center lg:pl-4",children:(0,x.jsxs)("div",{className:"items-center hidden w-1/2 bg-white border border-black toggle rounded-xl",children:[(0,x.jsx)("ul",{className:"flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){f("Brand Marketing"),L()},children:"Brand Marketing"}),(0,x.jsx)("ul",{className:"flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){f("Event Planning"),L()},children:"Event Planning"}),(0,x.jsx)("ul",{className:"flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){f("Food and Beverage Consulting"),L()},children:"Food and Beverage Consulting"}),(0,x.jsx)("ul",{className:"flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){f("Hospitality Consulting"),L()},children:"Hospitality Consulting"}),(0,x.jsx)("ul",{className:"flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){f("Merchandising"),L()},children:"Merchandising"}),(0,x.jsx)("ul",{className:"flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){f("Nightlife Consulting"),L()},children:"Nightlife Consulting"}),(0,x.jsx)("ul",{className:"flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){f("Open Venue Protocol"),L()},children:"Open Venue Protocol"}),(0,x.jsx)("ul",{className:"flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){f("Sourcing"),L()},children:"Sourcing"}),(0,x.jsx)("ul",{className:"flex p-2 border cursor-pointer border-gray-50 rounded-xl hover:bg-gray-400 hover:text-white",onClick:function(){f("Other"),L()},children:"Other"})]})})]}),(0,x.jsxs)("div",{className:"pl-6 text-black align-baseline lg:pt-2",children:[(0,x.jsxs)("span",{className:"pl-3 text-sm font-bold lg:flex lg:text-2xl font-Montserrat",children:["Message ",(0,x.jsx)("span",{className:"lg:text-sm",children:"(required)"})]}),(0,x.jsx)("textarea",{className:"flex justify-center w-11/12 p-1 m-1 lg:m-3 h-[75px] lg:h-auto text-md lg:text-lg border-2 border-black border-solid focus:outline-none focus:border-4 rounded-xl focus:border-solid focus:shadow-2xl",name:"message",id:"",cols:"30",rows:"7",onChange:function(e){y(e.target.value)},value:v,placeholder:"Enter message here...",required:!0})]}),(0,x.jsx)("h2",{className:"justify-center pb-2 text-lg text-center text-white",children:w?(0,x.jsx)(P,{}):null}),(0,x.jsx)("div",{className:"items-center justify-center text-centerv lg:py-2",children:(0,x.jsx)("button",{className:"w-1/5 lg:text-xl p-2 h-[40px] text-white lg:w-1/4 bg-black rounded-xl hover:text-black hover:bg-stone-100",type:"submit",children:"Send"})})]})}):""}}}]);
//# sourceMappingURL=617.74d669bf.chunk.js.map