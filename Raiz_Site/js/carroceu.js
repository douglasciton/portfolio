const track = document.querySelector('.carousel-track');
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

if (track && nextButton && prevButton) {
    let index = 0;
    let autoplayInterval;

    const moveCarousel = () => {
        const cardWidth = track.querySelector('.certificado-card').offsetWidth;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    };

    const nextSlide = () => {
        const maxIndex = track.children.length - 1;
        index = (index < maxIndex) ? index + 1 : 0; // Volta ao início se for o último
        moveCarousel();
    };

    const prevSlide = () => {
        const maxIndex = track.children.length - 1;
        index = (index > 0) ? index - 1 : maxIndex; // Vai para o último se for o primeiro
        moveCarousel();
    };

    // Funções de Autoplay
    const startAutoplay = () => {
        autoplayInterval = setInterval(nextSlide, 5000); // 5000ms = 5 segundos
    };

    const resetAutoplay = () => {
        clearInterval(autoplayInterval);
        startAutoplay();
    };

    // Eventos de clique
    nextButton.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
    });

    // Inicia o carrossel
    startAutoplay();

    // Pausa ao passar o mouse (opcional, para facilitar a leitura)
    track.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    track.addEventListener('mouseleave', startAutoplay);

    window.addEventListener('resize', moveCarousel);
}