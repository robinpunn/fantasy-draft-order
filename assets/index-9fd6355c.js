(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const l=[],u=document.getElementById("nameInput");function y(){const t=document.getElementById("originalList");t.innerHTML="",l.forEach(r=>{const a=document.createElement("li");a.textContent=r,t.appendChild(a)})}function p(t){if(t.type==="click"||t instanceof KeyboardEvent&&t.key==="Enter"){const r=u.value.trim();r!==""&&(l.push(r),y(),u.value="")}}function g(){if(l.length===0){alert("Please add participants before generating the draft order.");return}const t=l.slice();for(let i=t.length-1;i>0;i--){const c=Math.floor(Math.random()*(i+1));[t[i],t[c]]=[t[c],t[i]]}const r=document.getElementById("draftOrderList");r.innerHTML="",t.forEach((i,c)=>{const d=document.createElement("li"),f=document.createElement("span");f.textContent=`${c+1}. `,d.appendChild(f);const m=document.createElement("span");m.textContent=i,d.appendChild(m),d.style.display="none",r.appendChild(d)}),document.getElementById("draftOrderContainer").classList.remove("hidden");const s=r.getElementsByTagName("li");let e=s.length-1;const n=1e3;function o(){setTimeout(()=>{s[e].style.display="block",e--,e>=0&&o()},n)}o()}document.getElementById("addNameBtn").addEventListener("click",p);u.addEventListener("keydown",p);document.getElementById("generateBtn").addEventListener("click",g);
