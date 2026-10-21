const backToTopButton = () => {

    const backToTopBtn = document.getElementById('backToTopButton');

    window.addEventListener('scroll', () => {
            
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('button_is_visible');
        } else {
            backToTopBtn.classList.remove('button_is_visible');
        }
    });

        backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        });

}

export default backToTopButton;