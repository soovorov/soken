(()=>{for(var e=document.getElementsByClassName("accordion-header"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.classList.toggle("active"),e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"});var o=document.querySelectorAll(".anchor__trigger"),c=(o.forEach(function(t){t.addEventListener("click",function(e){e.preventDefault();e=t.getAttribute("href").substring(1);document.getElementById(e).scrollIntoView({behavior:"smooth"})})}),window.addEventListener("scroll",function(){var c="";document.querySelectorAll(".anchor__item").forEach(function(e){var t=e.offsetTop;window.scrollY>=t-e.clientHeight/3&&(c=e.getAttribute("id"))}),o.forEach(function(e){e.classList.remove("active"),e.getAttribute("href").substring(1)===c&&e.classList.add("active")})}),document.querySelector(".js-menu-toggle")),s=document.querySelector(".js-site-header"),c=(c.addEventListener("click",function(e){e.preventDefault(),s.classList.toggle("show-menu"),bodyScrollLock.disableBodyScroll(s),s.classList.contains("show-menu")||bodyScrollLock.enableBodyScroll(s)}),document.querySelector(".form")),n=document.querySelector(".status-image"),r=document.querySelector(".verify-form");c&&c.addEventListener("submit",function(e){e.preventDefault(),n.src="./images/member/success.svg",r.classList.add("submit-success")})})();
//# sourceMappingURL=main.js.map
