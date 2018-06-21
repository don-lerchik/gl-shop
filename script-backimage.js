var link1 = document.querySelector(".link1");
var link2 = document.querySelector(".link2");
var link3 = document.querySelector(".link3");
var popup1 = document.querySelector(".back-image1");
var popup2 = document.querySelector(".back-image2");
var popup3 = document.querySelector(".back-image3");
var anim = document.querySelector(".opacity");
link1.addEventListener("click",function(event) {
    if (popup3.classList.contains("opacity")) {
        popup1.style.zIndex = "-1";
        popup2.style.zIndex = "-3";
        popup3.style.zIndex = "-2";
    }
    else {
        popup1.style.zIndex = "-1";
        popup2.style.zIndex = "-2";
        popup3.style.zIndex = "-3";
    }
    popup1.classList.add("opacity2");
    popup2.classList.remove("opacity");
    popup2.classList.remove("opacity2");
    popup3.classList.remove("opacity");
});
link2.addEventListener("click",function(event) {
    if (popup3.classList.contains("opacity")) {
        popup2.classList.add("opacity2");
        popup1.style.zIndex = "-3";
        popup2.style.zIndex = "-1";
        popup3.style.zIndex = "-2";
    }
    else {
        popup2.classList.add("opacity");
        popup1.style.zIndex = "-2";
        popup2.style.zIndex = "-1";
        popup3.style.zIndex = "-3";
        
    }
    popup3.classList.remove("opacity");
    popup1.classList.remove("opacity2");
});
link3.addEventListener("click",function(event) {
    if (popup2.classList.contains("opacity2")){
        popup1.style.zIndex = "-3";
        popup2.style.zIndex = "-2";
        popup3.style.zIndex = "-1"; 
    }
    if  (popup2.classList.contains("opacity")){
        popup1.style.zIndex = "-3";
        popup2.style.zIndex = "-2";
        popup3.style.zIndex = "-1"; 
    }
    else {
        popup1.style.zIndex = "-2";
        popup2.style.zIndex = "-3";
        popup3.style.zIndex = "-1"; 
    }
    popup3.classList.add("opacity");
    popup1.classList.remove("opacity2");
    popup2.classList.remove("opacity");
    popup2.classList.remove("opacity2");
});