document.addEventListener("DOMContentLoaded", function () {
    console.log("Página de créditos carregada com sucesso");
});

// Dados dos perfis
// Dados dos perfis
const profiles = {
    "julio": {
        name: "DJ JULIO BEAT",
        role: "Fundador, Desenvolvedor e Designer",
        linhaa: "______________________________________",
        descricaoo: "Descrição",
        description: "Criador do jogo Parkour Space, responsável pelo desenvolvimento e design do jogo.",
        photo: "images/julio.png", // Foto de perfil
        banner: "images/julio.png" // Banner de perfil
    },
    "programador": {
        name: "João Silva",
        role: "Programador",
        description: "Responsável pela codificação e mecânicas do jogo.",
        photo: "images/programador.jpg",
        banner: "images/programador-banner.jpg"
    },
    "artista": {
        name: "Ana Souza",
        role: "Artista 3D",
        description: "Criou os modelos 3D e animações para o jogokkkkkkkkkkkkkkkkk.",
        photo: "images/artista.jpg",
        banner: "images/artista-banner.jpg"
    },
    "designer": {
        name: "Lucas Mendes",
        role: "UI/UX Designer",
        description: "Criou a interface e experiência do usuário.",
        photo: "images/designer.jpg",
        banner: "images/designer-banner.jpg"
    },
    "testador": {
        name: "Mariana Oliveira",
        role: "Testadora",
        description: "Testou o jogo e ajudou a identificar bugs.",
        photo: "images/testador.jpg",
        banner: "images/testador-banner.jpg"
    },
    "compositor": {
        name: "Carlos Ferreira",
        role: "Produção Musical",
        description: "Criou a trilha sonora do jogo.",
        photo: "images/compositor.jpg",
        banner: "images/compositor-banner.jpg"
    }
};

// Mostrar modal do perfil
function showProfile(id) {
    document.getElementById("profile-name").textContent = profiles[id].name;
    document.getElementById("profile-role").textContent = profiles[id].role;
    document.getElementById("profile-linhaa").textContent = profiles[id].linhaa;
    document.getElementById("profile-descricaoo").textContent = profiles[id].descricaoo;
    document.getElementById("profile-description").textContent = profiles[id].description;
    document.getElementById("profile-photo").src = profiles[id].photo; // Definir foto de perfil
    document.getElementById("profile-banner").src = profiles[id].banner; // Definir banner de perfil
    document.getElementById("profile-modal").style.display = "flex";
}

// Fechar modal
function closeProfile() {
    document.getElementById("profile-modal").style.display = "none";
}

