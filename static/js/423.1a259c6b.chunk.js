"use strict";(self.webpackChunktheculinarydecisions=self.webpackChunktheculinarydecisions||[]).push([[423],{2425:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(2791),i=n.p+"static/media/MichelleHead.180ff8c0a7afe53300dd.jpg",s=n.p+"static/media/LevanHead.0bec333fe9b71581bf52.jpg",a=n.p+"static/media/Dining.c30f598d04f4785104e1.jpg",o=n(9439),l=n(1413),c=n(3366);var d=n(5671),u=n(3144),g=n(7326),f=n(136),h=n(7277),m=["as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"],p=Object.defineProperty,v=function(e,t,n){return function(e,t,n){t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},b=new Map,x=new WeakMap,y=0,w=void 0;function j(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return"".concat(t,"_").concat("root"===t?(n=e.root)?(x.has(n)||(y+=1,x.set(n,y.toString())),x.get(n)):"0":e[t]);var n})).toString()}function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:w;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){var i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var s=function(e){var t=j(e),n=b.get(t);if(!n){var r,i=new Map,s=new IntersectionObserver((function(t){t.forEach((function(t){var n,s=t.isIntersecting&&r.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=s),null==(n=i.get(t.target))||n.forEach((function(e){e(s,t)}))}))}),e);r=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:s,elements:i},b.set(t,n)}return n}(n),a=s.id,o=s.observer,l=s.elements,c=l.get(e)||[];return l.has(e)||l.set(e,c),c.push(t),o.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(l.delete(e),o.unobserve(e)),0===l.size&&(o.disconnect(),b.delete(a))}}r.Component;function k(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.threshold,i=t.delay,s=t.trackVisibility,a=t.rootMargin,l=t.root,c=t.triggerOnce,d=t.skip,u=t.initialInView,g=t.fallbackInView,f=t.onChange,h=r.useState(null),m=(0,o.Z)(h,2),p=m[0],v=m[1],b=r.useRef(),x=r.useState({inView:!!u,entry:void 0}),y=(0,o.Z)(x,2),w=y[0],j=y[1];b.current=f,r.useEffect((function(){var e;if(!d&&p)return e=O(p,(function(t,n){j({inView:t,entry:n}),b.current&&b.current(t,n),n.isIntersecting&&c&&e&&(e(),e=void 0)}),{root:l,rootMargin:a,threshold:n,trackVisibility:s,delay:i},g),function(){e&&e()}}),[Array.isArray(n)?n.toString():n,p,l,a,c,d,s,g,i]);var k=null==(e=w.entry)?void 0:e.target,V=r.useRef();p||!k||c||d||V.current===k||(V.current=k,j({inView:!!u,entry:void 0}));var M=[v,w.inView,w.entry];return M.ref=M[0],M.inView=M[1],M.entry=M[2],M}var V=n(4075),M=n.n(V),N=n(184),P=function(){var e={threshold:.1,triggerOnce:!1},t=k(e),n=t.ref,r=t.inView,o=k(e),l=o.ref,c=o.inView;return(0,N.jsxs)("div",{children:[(0,N.jsx)("div",{className:"shadow-lg -z-0",children:(0,N.jsx)("img",{src:a,alt:"diningPhoto",className:"relative object-cover w-screen sm:object-center h-[550px] sm:h-[700px] shadow-lg -z-0",loading:"lazy"})}),(0,N.jsxs)("div",{className:"justify-center pt-10 sm:grid sm:grid-cols-2 sm:gap-8 sm:p-5 xl:pt-20",children:[(0,N.jsxs)("div",{className:"flex flex-col items-center justify-center text-center group",ref:n,children:[(0,N.jsx)("h1",{className:"text-3xl font-extrabold sm:text-4xl lg:mr-40 lg:text-6xl font-Montserrat",children:"Levan Donato"}),(0,N.jsx)("p",{className:"text-black lg:pb-5 lg:mr-40 lg:text-2xl font-Montserrat",children:"Managing Partner"}),(0,N.jsxs)("div",{className:"relative",children:[(0,N.jsx)(M(),{left:!0,when:r,children:(0,N.jsx)("img",{className:"shadow-xl sm:rounded-full sm:h-[500px] w-auto lg:mr-40",alt:"Headshot",src:s,loading:"lazy"})}),(0,N.jsx)("div",{className:"z-10 justify-center duration-700 sm:shadow-2xl sm:absolute sm:opacity-0 sm:bottom-0 sm:bg-gray-200 sm:outline-none rounded-2xl sm:left-12 lg:ml-72 sm:group-hover:opacity-80",children:(0,N.jsx)("p",{className:"sm:m-5 m-2 mx-5 text-center sm:text-justify sm:text-base text-sm lg:m-0 lg:p-5 pt-5 text-black bg-transparent sm:border lg:h-auto font-semibold lg:leading-8 leading-6 lg:w-[500px] rounded-2xl sm:opacity-0 sm:group-hover:opacity-100 font-Montserrat",children:"A first-generation American, Levan offers a diverse and unique perspective. With over 20 years' experience in luxury resort operations and leadership, she has collaborated with a variety of hospitality powerhouses across the Las Vegas strip. Her passion for curating new and innovative concepts led her to spearhead the opening of Resorts World Las Vegas as the Director of Beverage & Cocktails. She successfully developed strategic programs and creative concepts for over forty food and beverage venues. A hospitality professional, her expansive knowledge in new openings and business acumen has dedicated her to Culinary Decisions, where she takes immense pride in assisting others in developing effective business strategies."})})]})]}),(0,N.jsxs)("div",{className:"flex flex-col items-center justify-center pt-10 text-center group",ref:l,children:[(0,N.jsx)("h1",{className:"text-3xl font-extrabold sm:text-4xl lg:ml-40 lg:text-6xl font-Montserrat",children:"Michelle Tran"}),(0,N.jsx)("p",{className:"text-black lg:ml-40 lg:pb-5 lg:text-2xl font-Montserrat",children:"Managing Partner"}),(0,N.jsxs)("div",{className:"relative",children:[(0,N.jsx)(M(),{right:!0,when:c,children:(0,N.jsx)("img",{className:"shadow-xl sm:rounded-full sm:h-[500px] lg:ml-40 w-auto",alt:"Headshot",src:i,loading:"lazy"})}),(0,N.jsx)("div",{className:"z-10 justify-center pt-5 mx-5 text-sm text-center duration-700 sm:text-justify sm:pt-0 sm:text-base sm:shadow-2xl sm:absolute sm:opacity-0 sm:bottom-5 sm:bg-gray-200 rounded-2xl sm:right-12 lg:mr-72 sm:group-hover:opacity-80",children:(0,N.jsx)("p",{className:"sm:pt-5 sm:m-5 m-2 lg:m-0 lg:p-5 text-black bg-transparent sm:border lg:h-auto font-semibold lg:leading-8 leading-6 lg:w-[500px] text-sm rounded-2xl sm:opacity-0 sm:group-hover:opacity-100 font-Montserrat",children:"Michelle, fueled by her unwavering dedication to the hospitality industry and an impeccable knack for crafting exquisite menus, boasts an impressive track record of overseeing operations at prestigious high-volume establishments nestled along the illustrious Las Vegas Strip. Her journey has been punctuated by stints at renowned venues such as Catch Las Vegas and Resorts World All\u0113 on 66, where her contributions earned notable recognition. Presently, she is at the helm of an ambitious venture dedicated to elevating the hospitality landscape by providing invaluable support for entrepreneurs seeking to refine and elevate their business objectives. Here, she leverages her expertise to facilitate effective operational execution while developing comprehensive training programs that emphasize consistency and financial acumen."})})]})]})]})]})}},4942:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9142);function i(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},1413:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},3366:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=423.1a259c6b.chunk.js.map