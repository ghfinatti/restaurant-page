(()=>{"use strict";const e=(()=>{const e=document.querySelector("#content"),t=document.createElement("div");return{createHeader:()=>{t.classList.add("nav-bar"),e.appendChild(t)},createNavBtns:()=>{const e=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div");t.appendChild(e),t.appendChild(n),t.appendChild(a),e.textContent="Home",n.textContent="Menu",a.textContent="Contact"}}})();e.createHeader(),e.createNavBtns()})();