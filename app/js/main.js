(()=>{for(var t=document.getElementsByClassName("accordion-header"),e=0;e<t.length;e++)t[e].addEventListener("click",function(){this.classList.toggle("active");var t=this.nextElementSibling;t.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"});var n=document.querySelectorAll(".anchor__trigger");n.forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();t=e.getAttribute("href").substring(1);document.getElementById(t).scrollIntoView({behavior:"smooth"})})}),window.addEventListener("scroll",function(){var i="";document.querySelectorAll(".anchor__item").forEach(function(t){var e=t.offsetTop;window.scrollY>=e-t.clientHeight/3&&(i=t.getAttribute("id"))}),n.forEach(function(t){t.classList.remove("active"),t.getAttribute("href").substring(1)===i&&t.classList.add("active")})})})();
//# sourceMappingURL=main.js.map
