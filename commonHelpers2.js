import{S as c,N as d,P as u}from"./assets/vendor-8ff6197b.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".header-menu-open-btn"),r=document.querySelector(".close-btn");n&&n.addEventListener("click",()=>{const o=document.querySelector(".backdrop");o&&(o.classList.add("show"),document.body.style.overflow="hidden")}),r&&r.addEventListener("click",()=>{const o=document.querySelector(".backdrop");o&&(o.classList.remove("show"),document.body.style.overflow="auto")})});document.addEventListener("DOMContentLoaded",function(){new c(".swiper",{modules:[d,u],loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})});
//# sourceMappingURL=commonHelpers2.js.map
