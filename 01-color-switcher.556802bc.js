!function(){var t,e=document.querySelector(["button[data-start]"]),n=document.querySelector(["button[data-stop]"]);function o(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}e.addEventListener("click",(function(){o(),t=setInterval((function(){o()}),1e3),e.setAttribute("disabled",""),n.removeAttribute("disabled")})),n.addEventListener("click",(function(){clearInterval(t),t=null,e.removeAttribute("disabled"),n.setAttribute("disabled","")}))}();
//# sourceMappingURL=01-color-switcher.556802bc.js.map
