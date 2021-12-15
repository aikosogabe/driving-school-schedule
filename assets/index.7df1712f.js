var B=Object.defineProperty,M=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var F=(n,t,s)=>t in n?B(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s,h=(n,t)=>{for(var s in t||(t={}))I.call(t,s)&&F(n,s,t[s]);if(C)for(var s of C(t))H.call(t,s)&&F(n,s,t[s]);return n},w=(n,t)=>M(n,A(t));import{r as c,j as e,M as P,c as f,R as E,C as R,a as j,b as z,T as L,d as q,P as K,O as Y,e as G,f as J,B as Q,g as U,h as V,i as W}from"./vendor.2383f0dd.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};X();const Z=()=>{const{disableTime:n,setDisableTime:t}=c.exports.useContext(v);return e("ul",{className:"list",css:f`
        margin-top: 16px;
        li {
          display: flex;
          align-items: center;
          margin-top: 8px;
        }
        .name,
        .target {
          display: inline-block;
          min-width: 96px;
        }
        .name {
          font-weight: bold;
        }
        .target,
        .time {
          margin-left: 16px;
        }
        .delete {
          position: relative;
          width: 16px;
          height: 16px;
          margin-left: auto;
          border-radius: 50%;
          background-color: #ff4500;
          text-align: center;
          svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            path {
              fill: #fff;
            }
          }
        }
      `},Object.keys(n).map(s=>{const u=n[s].target,o=n[s].start,r=n[s].end;return e("li",{key:s},e("p",null,e("span",{className:"name"},s),e("span",{className:"target"},"\u5BFE\u8C61\uFF1A",u),e("span",{className:"time"},o.getHours(),":",String(o.getMinutes()).padStart(2,"0")," ","\u301C ",r.getHours(),":",String(r.getMinutes()).padStart(2,"0"))),e("button",{className:"delete",onClick:()=>{const d=Object.assign({},n);delete d[s],t(d)}},e(P,null)))}))},S=({type:n})=>{const t=new Date(2e3,1,1,8,0,0),s=[8,9,10,11,12,13,14,15,16,17,18,19,20],u=[0,10,20,30,40,50],{startTime:o,setStartTime:r,endTime:d,setEndTime:i}=c.exports.useContext(N),p=n==="start"?o:d,g=n==="start"?r:i,m=a=>{const l=t;l.setHours(+a.target.value),l.setMinutes(p.getMinutes()),g(l)},b=a=>{const l=t;l.setHours(p.getHours()),l.setMinutes(+a.target.value),g(l)};return e(E.Fragment,null,e("div",{className:"select"},e("select",{onChange:a=>{m(a)}},s.map(a=>e("option",{key:a,value:a},a)))),e("span",null,":"),e("div",{className:"select"},e("select",{onChange:a=>{b(a)}},u.map(a=>e("option",{key:a,value:a},String(a).padStart(2,"0"))))))},_=f`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  inset: 0;
`,$=f`
  position: fixed;
  top: 50%;
  left: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  width: 560px;
  padding: 20px 20px 32px;
  background-color: #fff;
  border-radius: 8px;
`,ee=f`
  display: block;
  width: 24px;
  height: 24px;
  margin-left: auto;
  svg {
    width: 100%;
    height: 100%;
  }
`,te=f`
  margin-bottom: 16px;
  font-size: 18px;
`,se=f`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  .input {
    input {
      width: 96px;
      padding: 2px 4px;
      border: 1px solid #333;
      border-radius: 4px;
    }
  }
  .target {
    margin-left: 16px;
  }
  .time {
    display: flex;
    margin-left: 16px;
    .select {
      width: 40px;
      select {
        padding: 2px 4px;
        text-align: center;
      }
    }
    span {
      margin: 0 4px;
      line-height: 30px;
    }
  }
  .select {
    position: relative;
    width: 96px;
    svg {
      position: absolute;
      top: 50%;
      right: 4px;
      transform: translateY(-50%);
      pointer-events: none;
    }
    select {
      width: 100%;
      padding: 2px 20px 2px 4px;
      border: 1px solid #333;
      border-radius: 4px;
    }
  }
`,ae=f`
  position: relative;
  width: 24px;
  height: 24px;
  margin-left: auto;
  border-radius: 50%;
  background-color: #008bbb;
  text-align: center;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    path {
      fill: #fff;
    }
  }
`,ne=f`
  color: #ff4500;
  font-size: 14px;
  &[aria-hidden="true"] {
    display: none;
  }
`,N=c.exports.createContext({}),oe=()=>{const n=new Date(2e3,1,1,8,0,0),{disableTime:t,setDisableTime:s}=c.exports.useContext(v),[u,o]=c.exports.useState(""),[r,d]=c.exports.useState("\u5168\u4F53"),[i,p]=c.exports.useState(n),[g,m]=c.exports.useState(n),[b,a]=c.exports.useState(!1);return e(J,null,e(G,{asChild:!0},e("button",{className:"text-button"},"\u9664\u5916\u6761\u4EF6\u3092\u8FFD\u52A0")),e(Y,{css:_}),e(R,{css:$},e(j,{asChild:!0},e("button",{css:ee},e(z,null))),e(L,{css:te},"\u9664\u5916\u6761\u4EF6\u3092\u8FFD\u52A0"),e("div",{className:"input-area",css:se},e("div",{className:"input"},e("input",{type:"text",placeholder:"\u6761\u4EF6\u540D",onChange:l=>{o(l.target.value)}})),e("div",{className:"target"},e("div",{className:"select"},e(q,null),e("select",{name:"",id:"",onChange:l=>{d(l.target.value)}},e("option",{value:"\u5168\u4F53"},"\u5168\u4F53"),e("option",{value:"\u5E73\u65E5"},"\u5E73\u65E5"),e("option",{value:"\u4F11\u65E5"},"\u4F11\u65E5")))),e("div",{className:"time"},e(N.Provider,{value:{startTime:i,setStartTime:p,endTime:g,setEndTime:m}},e(S,{type:"start"}),e("span",null,":"),e(S,{type:"end"}))),e("button",{className:"add",css:ae,onClick:()=>{u?(a(!1),s(w(h({},t),{[u]:{target:r,start:i,end:g}}))):a(!0)}},e(K,null))),e("p",{"aria-hidden":!b,css:ne},"\u6761\u4EF6\u540D\u3092\u5165\u308C\u3066\u304F\u3060\u3055\u3044"),e(Z,null)))},re=n=>{let t;switch(n){case 1:t={start:new Date(2e3,1,1,8,40,0),end:new Date(2e3,1,1,9,30,0)};break;case 2:t={start:new Date(2e3,1,1,9,40,0),end:new Date(2e3,1,1,10,30,0)};break;case 3:t={start:new Date(2e3,1,1,10,40,0),end:new Date(2e3,1,1,11,30,0)};break;case 4:t={start:new Date(2e3,1,1,11,40,0),end:new Date(2e3,1,1,12,30,0)};break;case 5:t={start:new Date(2e3,1,1,13,30,0),end:new Date(2e3,1,1,12,20,0)};break;case 6:t={start:new Date(2e3,1,1,14,30,0),end:new Date(2e3,1,1,15,20,0)};break;case 7:t={start:new Date(2e3,1,1,15,30,0),end:new Date(2e3,1,1,16,20,0)};break;case 8:t={start:new Date(2e3,1,1,16,30,0),end:new Date(2e3,1,1,17,20,0)};break;case 9:t={start:new Date(2e3,1,1,17,30,0),end:new Date(2e3,1,1,18,20,0)};break;case 10:t={start:new Date(2e3,1,1,18,30,0),end:new Date(2e3,1,1,19,20,0)};break}return t},ie=(n,t,s)=>{const u=re(n),o=["\u6708","\u706B","\u6C34","\u6728","\u91D1"],r=["\u571F","\u65E5"];let d=!1;return u&&Object.keys(s).forEach(i=>{(s[i].target==="\u5168\u4F53"||s[i].target==="\u5E73\u65E5"&&o.includes(t)||s[i].target==="\u4F11\u65E5"&&r.includes(t))&&(u.start.getTime()>=s[i].start.getTime()&&u.start.getTime()<=s[i].end.getTime()||u.end.getTime()>=s[i].start.getTime()&&u.end.getTime()<=s[i].end.getTime())&&(d=!0)}),d},v=c.exports.createContext({}),le=()=>{const[n,t]=c.exports.useState([]),[s,u]=c.exports.useState({}),[o,r]=c.exports.useState({}),d=["","","8:40 - 9:30","9:40 - 10:30","10:40 - 11:30","11:40 - 12:30","13:30 - 14:20","14:30 - 15:20","15:30 - 16:20","16:30 - 17:20","17:30 - 18:20","18:30 - 19:20"];return c.exports.useEffect(()=>{fetch("202112.csv").then(p=>p.text()).then(p=>{const g=[];p.split(`
`).forEach(m=>{const b=[],a=m.split(",");a[0]!==""&&(a.forEach((l,x)=>{x!==12&&b.push(l.replace(/\s/g,""))}),g.push(b))}),t(g)})},[]),e("div",{css:f`
        max-width: 1104px;
        margin: 0 auto;
        padding: 40px;
        h1 {
          margin-bottom: 32px;
          font-size: 40px;
          font-weight: bold;
          text-align: center;
        }
        .text-button {
          padding: 4px 12px;
          margin-bottom: 40px;
          color: #fff;
          font-weight: 700;
          background-color: #008bbb;
          border: 2px solid #008bbb;
          border-radius: 8px;
          transition: color 0.2s ease-out, background-color 0.2s ease-out;
          &:hover {
            color: #008bbb;
            background-color: #fff;
          }
        }
        table {
          border-collapse: collapse;
        }
        tr {
          &.closed {
            td {
              color: #fff;
              background-image: linear-gradient(
                45deg,
                #777 25%,
                #555 25%,
                #555 50%,
                #777 50%,
                #777 75%,
                #555 75%
              );
              background-size: 8px 8px;
            }
          }
        }
        th,
        td {
          padding: 8px 4px;
          border: 2px #fff solid;
          border-left: 2px #fff solid;
          text-align: center;
          vertical-align: middle;
          background-color: #f5f5f5;
          &:nth-of-type(1),
          &:nth-of-type(2) {
            width: 40px;
            background-color: #ddd;
          }
          &:nth-of-type(n + 3) {
            width: calc(1120px / 11);
          }
        }
        th {
          font-size: 16px;
          letter-spacing: 0.08rem;
          background-color: #ffd700;
        }
        td {
          font-size: 14px;
          &.disable {
            color: #fff;
            background-color: #999;
            button {
              pointer-events: none;
            }
          }
          button {
            padding: 4px 12px;
            color: #fff;
            font-weight: 700;
            letter-spacing: 0.08rem;
            background-color: #008bbb;
            border: 2px solid #008bbb;
            border-radius: 8px;
            transition: color 0.2s ease-out, background-color 0.2s ease-out;
            &[aria-selected="true"] {
              color: #008bbb;
              background-color: #fff;
            }
            &:disabled {
              background-color: #999;
              border-color: #999;
            }
          }
        }
      `},e("h1",null,"\u{1F697} \u{1F4A8}"),e(v.Provider,{value:{disableTime:o,setDisableTime:r}},e(oe,null)),e("table",null,e("thead",null,e("tr",null,d.map((i,p)=>e("th",{key:p},i)))),e("tbody",null,n.map((i,p)=>{const g=i[0],m=i[1],b=i[2]==="\u5B9A\u4F11\u65E5"||i[2]==="\u5E74\u672B\u4F11\u6687";return e("tr",{key:p,className:b?"closed":""},i.map((a,l)=>{var D,k,y,T;const x=l>1?ie(l-1,m,o):!1;return e("td",{key:l,className:x?"disable":""},a&&l>1&&a!=="\u5B9A\u4F11\u65E5"&&a!=="\u5E74\u672B\u4F11\u6687"&&a!=="\u5165\u6240\u5F0F"&&a!=="\u9069\u6027"?e("button",{"aria-selected":((D=s[a])==null?void 0:D.selected)&&((k=s[a])==null?void 0:k.day)===g,disabled:x||((y=s[a])==null?void 0:y.selected)&&((T=s[a])==null?void 0:T.day)!==g,onClick:O=>{u(w(h({},s),{[a]:{selected:O.currentTarget.ariaSelected!=="true",day:g}}))}},a):a)}))}))))},ue=()=>e(Q,{basename:"/driving-school-schedule/"},e(U,null,e(V,{path:"/",element:e(le,null)})));W.render(e(E.StrictMode,null,e(ue,null)),document.getElementById("root"));
