
(()=>{
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
        navMenu.classList.add("open");
    }
    function hideNavMenu(){
        navMenu.classList.remove("open");
    }
    //atttach an event to the document
    document.addEventListener("click", (event)=>{
        if(event.target.classList.contains('link-item')){
            //make sure event.target.hash has a value before overriding default behaviour
            if(event.target.hash!==""){
                //prevent default anchor click behaviour
                event.preventDefault();
                const hash = event.target.hash;
                //deactivate existing active section
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                //activate new section
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                //deactivate existing active navigation menu 'link-item'
                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-i-shadow");
                navMenu.querySelector(".active").classList.remove("active","inner-shadow");
               if(navMenu.classList.contains("open")){
                    //activate new navigation menu"link-item'
                event.target.classList.add("active", "inner-shadow");
                event.target.classList.remove("outer-shadow", "hover-in-shadow");
                hideNavMenu()
               }
               else{
                   let navItems = navMenu.querySelectorAll(".link-item"); 
                   navItems.forEach((items)=>{
                       if(hash === items.hash){
                           //activate new navigation menu linkitem
                           item.classList.add("active","inner-shadow");
                           item.classList.remove("outer-shadow","hover-in-shadow");
                       }
                   })
               }
               window.location.hash = hash;
            }
        }
    })
})();
/*-about section tab-*/
(()=>{
    const aboutSection = document.querySelector(".about-section");
    const tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event)=>{
        /* if event.target contains 'tab-item class and not contains 'active' class*/
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            console.log("event.target contains 'tab-item' class and not contains active class" );
            const target = event.target.getAttribute("data-target");
            // deactivate existing active tab-item
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            //activate new tab-item
            event.target.classList.add("active","outer-shadow")
            //deactiavte existing active tab-content
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
        }
    })
})();
/*hide all sections except active*/
(() => {
        const sections = document.querySelectorAll(".section");
        sections.forEach((section)=>{
            if(!section.classList.contains("active")){
                section.classList.add("hide");
            }
        })
})();