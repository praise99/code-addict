const navslide=function(){
    const burger=document.querySelector(".burger");
    const nav=document.querySelector(".navlinks");
    const navlinks=document.querySelectorAll(".navlinks li")

    //toggle the nav
    burger.addEventListener("click",()=>{
        nav.classList.toggle("nav-active");
        navlinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation=""
            }else{
                link.style.animation=`navlinksfade 0.5s ease forwards ${index/7+1.49}`
            }
        })
        //toggle burger
        burger.classList.toggle("toggle")
    })

    
}
navslide();