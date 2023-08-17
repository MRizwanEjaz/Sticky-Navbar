const navbarEL = document.querySelector(".navbar");

const bottomcontainerEL = document.querySelector(".Bottom-container");

console.log(bottomcontainerEL.offsetTop);

window.addEventListener("scroll", () =>{
    if(window.scrollY > bottomcontainerEL.offsetTop - 50){
        navbarEL.classList.add("active");
    }else{
        navbarEL.classList.remove("active");
    }
});

