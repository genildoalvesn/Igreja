document.addEventListener('DOMContentLoaded', function () {
    // Captura todos os botões de navegação automática e manual
    const autoBtns = document.querySelectorAll('.auto-btn');
    const manualBtns = document.querySelectorAll('.manual-btn');
    
    // Captura o container de slides
    const slideContent = document.querySelector('.slide-content');
    
    // Configuração para controle automático do carrossel
    let slideIndex = 0;
    const intervalTime = 5000; // Tempo de intervalo em milissegundos (5 segundos)
    let slideInterval;
    
    // Função para avançar o slide
    const nextSlide = () => {
        slideIndex++;
        if (slideIndex >= autoBtns.length) {
            slideIndex = 0;
        }
        changeSlide();
    };
    
    // Função para trocar o slide
    const changeSlide = () => {
        slideContent.style.transform = `translateX(${-slideIndex * 100}%)`;
        // Remove a classe active de todos os botões automáticos
        autoBtns.forEach(btn => btn.classList.remove('active'));
        // Adiciona a classe active ao botão atual
        autoBtns[slideIndex].classList.add('active');
    };
    
    // Evento para avançar automaticamente o slide
    const startSlide = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
    };
    
    // Eventos para pausar o slide ao passar o mouse sobre o carrossel
    slideContent.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slideContent.addEventListener('mouseleave', startSlide);
    
    // Eventos para navegação manual usando os botões
    manualBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            slideIndex = index;
            changeSlide();
            clearInterval(slideInterval); // Para a navegação automática ao clicar em um botão manual
        });
    });
    
    // Iniciar o carrossel
    startSlide();
});
