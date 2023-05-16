(function(){"use strict";var e={1037:function(e,t,n){var l=n(9242),r=(n(7658),n(3396)),o=n(4870);const s={class:"pt-5"},i={class:"bg-white w-full px-5 py-7 sm:px-10 sm:py-10 rounded-full flex items-center overflow-hidden gap-3"},a={class:"grid gap-2 flex-1"};var u={__name:"addNote",emits:["add"],setup(e,{emit:t}){const n=(0,o.iH)(""),u=(0,o.iH)(""),c=()=>{const e=n.value.trim();e.length>0?(t("add",{messege:n.value,time:(new Date).toDateString(),description:u.value}),n.value="",u.value=""):alert("Please Add messege to the note!")};return(e,t)=>((0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("div",i,[(0,r._)("div",a,[(0,r.wy)((0,r._)("input",{type:"text",class:"flex-1 shrink py-2 px-2 sm:py-5 sm:px-5 h-full outline-none rounded-full","onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),placeholder:"Note Title"},null,512),[[l.nr,n.value]]),(0,r.wy)((0,r._)("input",{type:"text",class:"flex-1 shrink py-2 px-2 sm:py-5 sm:px-5 h-full outline-none rounded-full","onUpdate:modelValue":t[1]||(t[1]=e=>u.value=e),placeholder:"description"},null,512),[[l.nr,u.value]])]),(0,r._)("button",{onClick:c,class:"bg-blue-500 text-white px-1 py-2 sm:px-3 sm:py-5 rounded-full"}," Add Note ")])]))}};const c=u;var d=c,p=n(7139);const v={class:"mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3"},f={class:"font-bold w-full text-2xl after:absolute after:w-1 after:h-10 after:left-0 after:bg-black mb-1 max-w-[10ch] overflow-x-visible"},g={class:"text-gray-400 mb-5"},m={class:"text-lg"},x={class:"flex gap-2 justify-end"},w=["onClick"],y=(0,r._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"},null,-1),h=[y],b=["onClick"],_=(0,r._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"},null,-1),k=[_];var N={__name:"NotesList",props:{Notes:Array},emits:["delet","edit"],setup(e,{emit:t}){const n=(e,n)=>{t("delet",{note:e,index:n})},l=(e,n)=>{t("edit",{note:e,index:n})};return(t,o)=>((0,r.wg)(),(0,r.iD)("div",v,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.Notes,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:"bg-white w-full p-8 relative rounded-lg",key:t},[(0,r._)("h3",f,(0,p.zw)(e.messege),1),(0,r._)("p",g,(0,p.zw)(e.time),1),(0,r._)("p",m,(0,p.zw)(e.description),1),(0,r._)("div",x,[((0,r.wg)(),(0,r.iD)("svg",{onClick:n=>l(e,t),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 cursor-pointer hover:stroke-green-500 duration-300"},h,8,w)),((0,r.wg)(),(0,r.iD)("svg",{onClick:l=>n(e,t),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 cursor-pointer hover:stroke-red-500 duration-300"},k,8,b))])])))),128))]))}};const A=N;var O=A;const C={class:"relative w-full h-full z-50"},j=["onClick"],S={class:"bg-white w-1/2 p-7 rounded-lg grid"},H=(0,r._)("h2",{class:"text-3xl"},"Edit Note",-1),D={class:"flex justify-end gap-3"};var E={__name:"ModelForm",props:{NotesArray:Array,currentindex:Number},emits:["close","save"],setup(e,{emit:t}){const n=e,s=(0,o.iH)(n.NotesArray[n.currentindex].messege),i=(0,o.iH)(n.NotesArray[n.currentindex].description),a=()=>{t("close")},u=()=>{let e=s.value.trim();e.length>0?t("save",{EditMessege:s,Editdesc:i,index:n.currentindex}):alert("Please add value")};return(e,t)=>((0,r.wg)(),(0,r.j4)(r.lR,{to:"#model"},[(0,r._)("div",C,[(0,r._)("div",{onClick:(0,l.iM)(a,["self"]),class:"bg-black bg-opacity-50 absolute w-screen h-screen top-0 flex justify-center items-center"},[(0,r._)("div",S,[H,(0,r.wy)((0,r._)("input",{type:"text",class:"bg-gray-100 my-3 px-2 py-3","onUpdate:modelValue":t[0]||(t[0]=e=>s.value=e)},null,512),[[l.nr,s.value]]),(0,r.wy)((0,r._)("input",{type:"text",class:"bg-gray-100 px-2 py-3 mb-3","onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e)},null,512),[[l.nr,i.value]]),(0,r._)("div",D,[(0,r.WI)(e.$slots,"default"),(0,r._)("button",{class:"bg-green-500 px-3 py-2 rounded-xl text-white",onClick:u}," save ")])])],8,j)])]))}};const M=E;var L=M;const U={class:"container mx-auto max-w-[90%]"};var z={__name:"App",setup(e){const t=(0,o.iH)(!1),n=(0,o.iH)(null),l=(0,o.iH)([]),s=e=>{l.value.push(e),localStorage.setItem("NotesArray",JSON.stringify(l.value))};(0,r.bv)((()=>{const e=JSON.parse(localStorage.getItem("NotesArray"));l.value=e}));const i=e=>{l.value.splice(e.index,1),localStorage.setItem("NotesArray",JSON.stringify(l.value))},a=e=>{t.value=!0,n.value=e.index},u=()=>{t.value=!1},c=e=>{l.value[e.index].messege=e.EditMessege,l.value[e.index].description=e.Editdesc,t.value=!1,localStorage.setItem("NotesArray",JSON.stringify(l.value))};return(e,p)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[t.value?((0,r.wg)(),(0,r.j4)((0,o.SU)(L),{key:0,isEditing:t.value,onClose:u,onSave:c,currentindex:n.value,NotesArray:l.value},{default:(0,r.w5)((()=>[(0,r._)("button",{class:"bg-red-500 px-3 py-2 rounded-xl text-white",onClick:u}," cancel ")])),_:1},8,["isEditing","currentindex","NotesArray"])):(0,r.kq)("",!0),(0,r._)("div",U,[(0,r.Wm)((0,o.SU)(d),{onAdd:s}),(0,r.Wm)((0,o.SU)(O),{Notes:l.value,onDelet:i,onEdit:a},null,8,["Notes"])])],64))}};const I=z;var V=I;(0,l.ri)(V).mount("#app")}},t={};function n(l){var r=t[l];if(void 0!==r)return r.exports;var o=t[l]={exports:{}};return e[l].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,l,r,o){if(!l){var s=1/0;for(c=0;c<e.length;c++){l=e[c][0],r=e[c][1],o=e[c][2];for(var i=!0,a=0;a<l.length;a++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](l[a])}))?l.splice(a--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[l,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var r,o,s=l[0],i=l[1],a=l[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(a)var c=a(n)}for(t&&t(l);u<s.length;u++)o=s[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},l=self["webpackChunknoteapp"]=self["webpackChunknoteapp"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(1037)}));l=n.O(l)})();
//# sourceMappingURL=app.b326d50e.js.map