document.addEventListener("DOMContentLoaded", function () {


    gsap.from("article", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        ease: "power2.out"
    });


    gsap.from(".destination-image", {
        duration: 2,
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    });

    

   
});
