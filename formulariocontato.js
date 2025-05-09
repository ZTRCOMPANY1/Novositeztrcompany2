document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Evita o envio padrão caso o formulário esteja inválido
    const form = event.target;
    if (!form.checkValidity()) {
        event.preventDefault(); // Evita o envio
        alert("Por favor, Preencha todos os campos obrigatórios corretamente.");
    }
});