window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0)
})

function myFunction() {
    var element = document.getElementById("menu");
    element.classList.toggle("menuslide");
 }