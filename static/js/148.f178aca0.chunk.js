/*! For license information please see 148.f178aca0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[148],{4462:function(t,r,e){e.r(r);var n=e(4165),o=e(5861),a=e(9439),i=e(2506),s=e(2791),c=e(298),u=e(7689),l=e(1087),f=e(6727),d=e(7692),h=e(5048),p=e(3928),m=e(5465),v=e(3329),y=f.Ry({password:f.Z_().min(8,"Your password is too short.").required("Password is required"),confirmPassword:f.Z_().oneOf([f.iH("password"),null],"Passwords must match").required("Please confirm new password")});r.default=function(){(0,c.zq)();var t=(0,u.s0)(),r=(0,h.v9)((function(t){return t.productsStore})).UserEmail,e=(0,p.ym)(),f=(0,a.Z)(e,2),w=f[0],g=f[1],x=g.error,b=g.data,j=g.isLoading,N=g.isError,E=g.isSuccess,P=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o={email:r,password:e.confirmPassword},w(o);case 2:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}();console.log("succes",b),console.log("error",x);var O=(0,i.TA)({initialValues:{password:"",confirmPassword:""},validateOnBlur:!0,onSubmit:P,validationSchema:y});return(0,s.useEffect)((function(){(N||x)&&O.setErrors({password:(null===x||void 0===x?void 0:x.data.data)||"Something went wrong, Try again later"}),E&&t("/login")}),[N,E]),(0,v.jsx)("div",{className:"w-screen h-screen bg-gray-50 flex justify-center items-center overflow-hidden",children:(0,v.jsx)("div",{className:" w-full md:w-5/12 rounded-md lg:w-4/12 xl:w-3/12 shadow-lg bg-white border border-gray-200 h-full sm:h-5/6  flex flex-col justify-around",children:(0,v.jsxs)("div",{className:"w-10/12  mx-auto flex flex-col gap-14",children:[(0,v.jsx)("div",{className:"flex flex-col  gap-1  ",children:(0,v.jsx)("div",{className:" mx-auto",children:(0,v.jsx)("p",{className:"text-2xl font-medium text-gray-800 font-serif mx-auto",children:"Confirm password"})})}),(0,v.jsxs)("form",{action:"",className:"flex flex-col gap-14",onSubmit:O.handleSubmit,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{className:"font-semibold text-gray-700",children:"Password"}),(0,v.jsxs)("div",{className:"flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200",children:[(0,v.jsx)("span",{children:(0,v.jsx)(d.egU,{className:"text-gray-500"})}),(0,v.jsx)("input",{type:"password",name:"password",value:O.values.password,onChange:O.handleChange,onBlur:O.handleBlur,placeholder:"Create strong password",className:"outline-none w-full bg-transparent"})]}),(0,v.jsx)("p",{className:"text-red-600 text-xs h-4",children:O.touched.password&&O.errors.password?O.errors.password:""})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{className:"font-semibold text-gray-700",children:"Confirm Password"}),(0,v.jsxs)("div",{className:"flex items-center gap-2 py-2 border-b-2 focus-within:border-b-2 focus-within:border-black/60 duration-200",children:[(0,v.jsx)("span",{children:(0,v.jsx)(d.egU,{className:"text-gray-500"})}),(0,v.jsx)("input",{type:"password",name:"confirmPassword",value:O.values.confirmPassword,onChange:O.handleChange,onBlur:O.handleBlur,placeholder:"Enter the password again",className:"outline-none w-full bg-transparent"})]}),(0,v.jsx)("p",{className:"text-red-600 text-xs h-4",children:O.touched.confirmPassword&&O.errors.confirmPassword?O.errors.confirmPassword:""})]}),(0,v.jsx)("button",{type:"submit",className:" \r font-serif  bg-black text-white\r cursor-pointer rounded-full font-medium\r w-11/12 mx-auto py-2  border-black\r transition duration-200 transform active:scale-95 ease-in-out",children:j?(0,v.jsx)("span",{children:(0,v.jsx)("img",{src:m,alt:"load",className:"w-6 filter brightness-0 invert  mx-auto h-6"})}):(0,v.jsx)("span",{children:"Confirm"})})]}),(0,v.jsxs)("div",{className:"text-center",children:[(0,v.jsx)("p",{className:"py-2 text-gray-600",children:"Have not account yet?"}),(0,v.jsx)(l.rU,{to:"/SignUp",className:"font-semibold cursor-pointer underline",children:"SIGNUP"})]})]})})})}},3928:function(t,r,e){e.d(r,{T4:function(){return o},qv:function(){return a},ym:function(){return i}});var n=e(661).f.injectEndpoints({endpoints:function(t){return{sendEmail:t.mutation({query:function(t){return{url:"api/vi/password/forgot/?email=".concat(t),method:"POST",body:{email:t}}},invalidatesTags:[{type:"Carts",id:"LIST"}]}),checkOTP:t.mutation({query:function(t){return{url:"api/vi/password/forgot/checkotp?otp=".concat(t),method:"PUT",body:t}}}),createPassword:t.mutation({query:function(t){return{url:"api/vi/password/forgot/createNewPassword",method:"POST",body:t}}})}}}),o=n.useSendEmailMutation,a=n.useCheckOTPMutation,i=n.useCreatePasswordMutation},9983:function(t,r,e){e.d(r,{w_:function(){return u}});var n=e(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return i=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t},i.apply(this,arguments)},s=function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]])}return e};function c(t){return t&&t.map((function(t,r){return n.createElement(t.tag,i({key:r},t.attr),c(t.child))}))}function u(t){return function(r){return n.createElement(l,i({attr:i({},t.attr)},r),c(t.child))}}function l(t){var r=function(r){var e,o=t.attr,a=t.size,c=t.title,u=s(t,["attr","size","title"]),l=a||r.size||"1em";return r.className&&(e=r.className),t.className&&(e=(e?e+" ":"")+t.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,u,{className:e,style:i(i({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),t.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(t){return r(t)})):r(o)}},5465:function(t,r,e){t.exports=e.p+"static/media/loadprofile.ce3fd696d5e991dd4056.gif"},5861:function(t,r,e){function n(t,r,e,n,o,a,i){try{var s=t[a](i),c=s.value}catch(u){return void e(u)}s.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,a){var i=t.apply(r,e);function s(t){n(i,o,a,s,c,"next",t)}function c(t){n(i,o,a,s,c,"throw",t)}s(void 0)}))}}e.d(r,{Z:function(){return o}})},4165:function(t,r,e){e.d(r,{Z:function(){return o}});var n=e(1002);function o(){o=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(C){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof p?r:p,i=Object.create(o.prototype),s=new L(n||[]);return a(i,"_invoke",{value:N(t,e,s)}),i}function d(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(C){return{type:"throw",arg:C}}}t.wrap=f;var h={};function p(){}function m(){}function v(){}var y={};l(y,s,(function(){return this}));var w=Object.getPrototypeOf,g=w&&w(w(k([])));g&&g!==r&&e.call(g,s)&&(y=g);var x=v.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function j(t,r){function o(a,i,s,c){var u=d(t[a],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==(0,n.Z)(f)&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):r.resolve(f).then((function(t){l.value=t,s(l)}),(function(t){return o("throw",t,s,c)}))}c(u.arg)}var i;a(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function N(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var s=E(i,e);if(s){if(s===h)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=d(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=d(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function k(t){if(t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=v,a(x,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:m,configurable:!0}),m.displayName=l(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(j.prototype),l(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new j(f(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(x),l(x,u,"Generator"),l(x,s,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=e.call(a,"catchLoc"),c=e.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}}}]);
//# sourceMappingURL=148.f178aca0.chunk.js.map