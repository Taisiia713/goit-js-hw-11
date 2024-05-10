import{S as g,i as l}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function m(n){const s="43812511-1ad98af5969ab2e5e6977c36e",e=`https://pixabay.com/api/?${new URLSearchParams({key:s,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(e).then(t=>t.json())}const p=document.querySelector(".gallery");function d(n){const s=n.map(r=>`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
            src="${r.webformatURL}"
            alt="${r.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${r.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${r.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${r.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${r.downloads}</li>
     </ul>
  </a>
</li>`).join("");p.insertAdjacentHTML("beforeend",s),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const f=document.getElementById("search-form"),c=document.getElementById("search-input"),i=document.querySelector(".gallery"),u=document.querySelector(".loading");f.addEventListener("submit",h);function h(n){n.preventDefault();const s=c.value.trim();if(s==="")return l.warning({message:"Please try again! Write something.",position:"topRight",color:"red"});u.classList.add("loader"),m(s).then(a=>{if(a.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),i.innerHTML="";return}i.innerHTML="",d(a.hits)}).catch(a=>{console.error("Error fetching data:",a),i.innerHTML=""}).finally(()=>{u.classList.remove("loader")}),c.value=""}
//# sourceMappingURL=commonHelpers.js.map
