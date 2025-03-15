function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function animateOnScroll() {
    const progressSection = document.querySelector('.current-progress');
    if (isInViewport(progressSection)) {
        const progressItems = document.querySelectorAll('.progress-item, .status-item');
        progressItems.forEach(item => {
            item.style.opacity = '1';
        });
        window.removeEventListener('scroll', animateOnScroll);
    }
}
window.addEventListener('scroll', animateOnScroll);
animateOnScroll();