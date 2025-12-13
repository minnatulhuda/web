import{r as s,j as t}from"./index-D1TsKtu7.js";const w=()=>t.jsx("svg",{className:"w-4 h-4 text-slate-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})}),j=({label:p,name:n,value:r,options:o,onChange:f,onSelect:h,disabled:a=!1,placeholder:m="Pilih...",className:b=""})=>{const[d,l]=s.useState(!1),[i,c]=s.useState([]),u=s.useRef(null);s.useEffect(()=>{if(!o){c([]);return}if(r){const e=r.toLowerCase();c(o.filter(x=>x.name.toLowerCase().includes(e)))}else c(o)},[r,o]),s.useEffect(()=>{const e=x=>{u.current&&!u.current.contains(x.target)&&l(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const g=e=>{h(e),l(!1)};return t.jsxs("div",{className:"relative w-full",ref:u,children:[t.jsxs("div",{className:"relative",children:[t.jsx("input",{type:"text",id:n,name:n,value:r,onChange:e=>{f(e),l(!0)},onFocus:()=>l(!0),disabled:a,placeholder:" ",autoComplete:"off",className:`
            peer w-full px-4 pt-6 pb-2
            rounded-xl border border-slate-300 dark:border-slate-700
            bg-slate-50 dark:bg-slate-800
            text-slate-900 dark:text-slate-100
            focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400/40
            outline-none transition-all
            ${a?"opacity-50 cursor-not-allowed bg-slate-100 dark:bg-slate-900":""}
            ${b}
          `}),t.jsx("label",{htmlFor:n,className:`
            absolute left-4 top-2
            text-slate-500 dark:text-slate-400
            text-xs font-bold
            pointer-events-none
            transition-all duration-200
            peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal
            peer-focus:top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-focus:font-bold
          `,children:p||m}),t.jsx("div",{className:"absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-200",style:{transform:d?"rotate(180deg) translateY(50%)":"translateY(-50%)"},children:t.jsx(w,{})})]}),d&&!a&&i.length>0&&t.jsx("ul",{className:"absolute z-50 w-full mt-1 max-h-60 overflow-y-auto bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow-xl animate-fade-in-down scrollbar-hide",children:i.map(e=>t.jsx("li",{onClick:()=>g(e),className:"px-4 py-3 text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-700 cursor-pointer border-b border-gray-50 dark:border-slate-800 last:border-none",children:e.name},e.id))}),d&&!a&&i.length===0&&r&&t.jsx("div",{className:"absolute z-50 w-full mt-1 p-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl shadow-lg text-sm text-center text-slate-400",children:"Tidak ditemukan"})]})};export{j as A};
