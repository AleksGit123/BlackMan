function scrollFunction() {
    let scrollThreshold = 200; 

  
    window.onscroll = function() {scrollFunction()};
    let header = document.querySelector(".index_header");

    if (document.body.scrollTop > scrollThreshold || document.documentElement.scrollTop > scrollThreshold) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
}

export default scrollFunction