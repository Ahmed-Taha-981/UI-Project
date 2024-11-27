const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".destination-card", {
    ...scrollRevealOption, 
    interval: 500
});
ScrollReveal().reveal(".journey-grid", { 
    ...scrollRevealOption, 
    interval: 500, 
    reset: true
});

ScrollReveal().reveal(".religous-grid", { 
    ...scrollRevealOption, 
    interval: 500, 
    reset: true
});