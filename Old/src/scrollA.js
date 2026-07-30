// scrollAnimation.js

export default {
    bind(el, binding) {
        const options = binding.value || {};
        const animationClass = options.animationClass || 'fade-in';
        const offset = options.offset || 0;

        el.style.transition = 'none';

        window.addEventListener('scroll', () => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top - windowHeight + offset < 0) {
                el.classList.add(animationClass);
                el.style.transition = '';
            }
        });
    },
};
