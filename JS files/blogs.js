document.addEventListener('DOMContentLoaded', () => {
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('highlight');
        });

        card.addEventListener('mouseleave', () => {

            card.classList.remove('highlight');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach(card => {
 
        card.addEventListener('mouseenter', () => {
            card.classList.add('bounce');
        });

        card.addEventListener('animationend', () => {
          
            card.classList.remove('bounce');
        });

       
    });
});
