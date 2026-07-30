// animate on scroll
export function animateOnScroll(selector) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated-show');
            } else {
                entry.target.classList.remove('animated-show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll(selector);
    hiddenElements.forEach((el) => observer.observe(el));
}