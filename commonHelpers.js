/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.querySelectorAll(".faq-question").forEach(r=>{r.addEventListener("click",function(){const n=this.parentElement,i=n.querySelector(".faq-answer");n.classList.toggle("active"),n.classList.contains("active")?i.style.padding="16px":i.style.padding="0"})});document.addEventListener("DOMContentLoaded",function(){new Swiper(".swiperGallery",{navigation:{nextEl:".gallery-arrow-next",prevEl:".gallery-arrow-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}})});document.getElementById("show-menu").addEventListener("click",function(){document.getElementById("modal-menu").style.display="block"});document.getElementById("close-modal").addEventListener("click",function(){document.getElementById("modal-menu").style.display="none"});document.getElementById("modal-menu").addEventListener("click",function(r){r.target===this&&(this.style.display="none")});document.querySelectorAll(".list-modal-nav a").forEach(r=>{r.addEventListener("click",function(){document.getElementById("modal-menu").style.display="none"})});new Swiper(".swiperGallery",{slidesPerView:1,spaceBetween:0,pagination:{el:".swiper-pagination",clickable:!0}});
//# sourceMappingURL=commonHelpers.js.map
