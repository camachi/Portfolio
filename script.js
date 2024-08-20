//funcionamineto del nav interactivo
const ham = document.querySelector(".hm");
const navMenu = document.querySelector(".nav-ul");

ham.addEventListener("click", () =>{
ham.classList.toggle("active");
navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", ()=>{
      ham.classList.remove("active");  
      navMenu.classList.remove("active"); 
    }))
    

