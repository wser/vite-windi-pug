import{o as e,c as t,a as l,p as o,b as u,r as n,d as s,t as i,u as c,F as a,w as d,e as r,f as p,g as v}from"./vendor.1ff4154c.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const o=new URL(e,location),u=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,n)=>{const s=new URL(e,o);if(self[t].moduleMap[s])return l(self[t].moduleMap[s]);const i=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){n(new Error(`Failed to import: ${e}`)),u(c)},onload(){l(self[t].moduleMap[s]),u(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("assets/");const b={class:"markdown-body"},g=l("h1",null,"Hello Markdown",-1),m=l("h2",null,"HOw R U",-1),A={expose:[],setup:l=>(l,o)=>(e(),t("div",b,[g,m]))};const I=d("data-v-7debfd72");o("data-v-7debfd72");const w=l("p",null,[l("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"},"Vite Documentation "),l("i",null," | "),l("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1),G=r("Edit "),R=l("code",null,"components/HelloWorld.vue ",-1),f=r("test hot module replacement.");u();const h={expose:[],props:{msg:String},setup(o){const u=n({count:0});return I(((n,d)=>{const r=s("to");return e(),t(a,null,[l("h1",null,i(o.msg),1),w,l("button",{class:"button hover:text-red-500 hover:color-yellow-200",onClick:d[1]||(d[1]=e=>u.count++)},"count is: "+i(u.count),1),l("p",null,[G,R,l(r,null,{default:I((()=>[f])),_:1})]),l(c(A))],64)}))},__scopeId:"data-v-7debfd72"};const j={},N=l("h2",{class:"button"}," Button ",-1),L=l("div",{class:"foo"}," foo ",-1),M=l("div",{class:"prose"}," Hello ",-1);j.render=function(o,u){const n=s("router-link");return e(),t(a,null,[l("div",{class:["px-5 p-1 text-green hover:text-green-100",{"bg-teal-100":!0,"hover:w-1/2":!0}]}," Hello World "),N,L,M,l(n)],64)};var W={name:"vite-windi-pug",description:"Lite Vite setup for fast and enjoyable prototyping 'n production with composable modern dev techs (Vue 3, Pug) and auto deployment on push through gh-pages branch plus some plugins: (Tailwind-windicss, Markdown-it)",author:"wser",version:"0.1.3",scripts:{dev:"vite",build:"vite build",serve:"vite preview"},dependencies:{vue:"^3.0.5"},devDependencies:{"@vitejs/plugin-vue":"^1.1.4","@vue/compiler-sfc":"^3.0.5",pug:"^3.0.0",vite:"^2.0.0","vite-plugin-md":"^0.5.1","vite-plugin-windicss":"^0.2.2"}};const V=l("img",{alt:"Vue logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAADI2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwMTQgNzkuMTU2Nzk3LCAyMDE0LzA4LzIwLTA5OjUzOjAyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5OTZCQjhGQTc2MTYxMUU1QTg0RThGQjE2NDkxNjJEOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5OTZCQjhGOTc2MTYxMUU1QTg0RThGQjE2NDkxNjJEOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTZBMTI3OTc2OTIxMUUzOTE4OThEOTBCRjhDRTQ3NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NTZBMTI3QTc2OTIxMUUzOTE4OThEOTBCRjhDRTQ3NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlYejCoAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAA3lBMVEVHcExBuINA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"},null,-1),B=r('msg="Hello Vue 3 + Vite + PUG"'),T=l("p",null,"Hi",-1),U=l("br",null,null,-1),S=l("br",null,null,-1);v({expose:[],setup:o=>(o,u)=>(e(),t(a,null,[V,l(h,null,{default:p((()=>[B])),_:1}),T,l("div",null,i(c(W).description),1),U,S,l(j)],64))}).mount("#app");
