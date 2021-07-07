window.addEventListener("load", ()=>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".preloader").style.display="none";
    },600)
})