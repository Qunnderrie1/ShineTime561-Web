const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const showBtn = document.querySelector(".showMoreBtn")
const morePhotosContainer = document.querySelector(".showMoreContainer")




hamburger.addEventListener("click" , () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
showBtn.addEventListener("click" , ()=>{
    morePhotosContainer.classList.toggle("active")

    if(showBtn.textContent == "Show More"){
        showBtn.textContent = "Show Less";
    }else{
        showBtn.textContent = "Show More";
    }
})