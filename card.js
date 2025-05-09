// Espera o carregamento completo da página
window.addEventListener('DOMContentLoaded', () => {
    // Obtém os elementos necessários
    const welcomeCard = document.getElementById('welcome-card');
    const blurBackground = document.getElementById('blur-background');
    const closeBtn = document.getElementById('close-btn');

    // Função para mostrar o card de boas-vindas
    function showWelcomeCard() {
        welcomeCard.classList.add('active');  // Exibe o card com animação
        blurBackground.style.display = 'block';  // Mostra o fundo embacado
    }

    // Função para esconder o card de boas-vindas
    function closeWelcomeCard() {
        welcomeCard.classList.remove('active');  // Esconde o card com animação
        blurBackground.style.display = 'none';  // Esconde o fundo embacado
    }

    // Exibe o card de boas-vindas assim que o site carregar
    showWelcomeCard();

    // Fecha o card de boas-vindas ao clicar no botão de fechar
    closeBtn.addEventListener('click', closeWelcomeCard);
});
