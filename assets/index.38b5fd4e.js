import{p as e,a as t,r as o,o as s,c as n,b as a,t as l,F as u,w as r,d as c,e as p,f as d}from"./vendor.6751cbb9.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,a)=>{const l=new URL(e,s);if(self[t].moduleMap[l])return o(self[t].moduleMap[l]);const u=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(u),onerror(){a(new Error(`Failed to import: ${e}`)),n(r)},onload(){o(self[t].moduleMap[l]),n(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("assets/");const m=r("data-v-ffdff048");e("data-v-ffdff048");const f=a("p",null,[a("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"},"Vite Documentation"),c(" | "),a("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1),i=a("p",null,[c(" Edit "),a("code",null,"components/HelloWorld.vue"),c(" to test hot module replacement. ")],-1);t();const g={expose:[],props:{msg:String},setup(e){const t=o({count:0});return m(((o,r)=>(s(),n(u,null,[a("h1",null,l(e.msg),1),f,a("button",{onClick:r[1]||(r[1]=e=>t.count++)},"count is: "+l(t.count),1),i],64))))},__scopeId:"data-v-ffdff048"};const v=a("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1),b=c('msg="Hello Vue 3 + Vite + PUG"'),h=a("p",null,"Hi",-1);d({expose:[],setup:e=>(e,t)=>(s(),n(u,null,[v,a(g,null,{default:p((()=>[b])),_:1}),h],64))}).mount("#app");