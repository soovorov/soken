(()=>{for(var e=document.getElementsByClassName("accordion-header"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){this.classList.toggle("active");var e=this.nextElementSibling;e.classList.toggle("active"),e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"});var s=document.querySelectorAll(".anchor__trigger"),i=(s.forEach(function(t){t.addEventListener("click",function(e){e.preventDefault();e=t.getAttribute("href").substring(1);document.getElementById(e).scrollIntoView({behavior:"smooth"})})}),window.addEventListener("scroll",function(){var i="";document.querySelectorAll(".anchor__item").forEach(function(e){var t=e.offsetTop;window.scrollY>=t-e.clientHeight/3&&(i=e.getAttribute("id"))}),s.forEach(function(e){e.classList.remove("active"),e.getAttribute("href").substring(1)===i&&e.classList.add("active")})}),document.querySelector(".form")),c=document.querySelector(".status-image"),r=document.querySelector(".verify-form");i&&i.addEventListener("submit",function(e){e.preventDefault(),c.src="./images/member/success.svg",r.classList.add("submit-success")})})();
//# sourceMappingURL=main.js.map
