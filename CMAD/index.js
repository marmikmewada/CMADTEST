const navbar = document.querySelector(".navbar");
const close = document.querySelector("#navbar-icon");
const menu = document.querySelector("#menu-icon");
let result = navbar.hasAttribute(hidden);
const toggle = () => {
    if(result === true){
        result = false;
        navbar.setAttribute("id", "hidden")
    }
    else{
        result = true;
        navbar.removeAttribute("id", "hidden");
    }
}
menu.addEventListener("click", ()=>{
    toggle();    
});
close.addEventListener("click", ()=>{
    toggle();
});