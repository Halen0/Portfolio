const link = document.querySelectorAll(".nav__link");
const menu = document.querySelector(".navbar__nav");
const bar = document.querySelector(".bar");
const x = document.querySelector(".x");

link.forEach(element => {
    element.addEventListener("click",(e)=>{
        menu.style.left = "-750px";
        bar.style.display = "block";
        x.style.display = "none";
    });
});

bar.addEventListener("click",(e)=>{
    menu.style.left = "0";
    bar.style.display = "none";
    x.style.display = "block";
});

x.addEventListener("click",(e)=>{
    menu.style.left = "-750px";
    bar.style.display = "block";
    x.style.display = "none";
});