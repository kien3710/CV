window.addEventListener("load", () =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    //page loader
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
    document.querySelector(".page-loader").style.display = ("none");
    }, 600);
});





//togge navbar------------------------------
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click" ,()=> {
    hideSection();
    toggeleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggeleNavbar (){
    document.querySelector(".header").classList.toggle("active");
}
//------------ACTIVE SETION------------------------------------------
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        //active overlay
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggeleNavbar();
        }
        else { 
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0); 
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");

        }, 500);
    } 
});




// ---------------------about tabs----------------
const tabsContainer = document.querySelector(".about-tab"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active"); 
    };
})
//-------------------------portfolio item dentail------------------------
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("view-project-btn")){
        toggelePortfolioPopup();
        document.querySelector(".prortfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);

    }
})
function toggelePortfolioPopup(){
    document.querySelector(".prortfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main ").classList.toggle ("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", toggelePortfolioPopup);
//hidden popu when click ourside   
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        toggelePortfolioPopup();
    }
}) 

function portfolioItemDetails(porfolioItem){
    document.querySelector(".pp-thumbnail img ").src = 
    porfolioItem.querySelector(".protfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    porfolioItem.querySelector(".protfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    porfolioItem.querySelector(".portfolio-item-details").innerHTML;


}

// typing text js



var x = 0;
var textEffect = 'Nguyen Trung Kien';
var container = document.getElementById("effect");

function animate(){
    if (x < textEffect.length){
        container.innerHTML += textEffect.charAt(x);
        x++;
        setTimeout(animate, 120)
    }
}
animate();

//toggle dark 
var iconn = document.getElementById("iconn");
iconn.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        iconn.src = "img/sunny.png"
    }else {
        iconn.src = "img/moon.png";
    }

};
