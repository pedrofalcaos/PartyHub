document.addEventListener("DOMContentLoaded", function () {
  // Navegação suave para links internos
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Exemplo simples de validação de formulário de contato
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Impede o envio do formulário para demonstração
      const nameInput = document.querySelector("#name");
      const emailInput = document.querySelector("#email");
      const messageInput = document.querySelector("#message");

      // Validação simples: Verifica se os campos estão vazios
      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert("Por favor, preencha todos os campos.");
      } else {
        alert("Obrigado pelo seu contato!");
        // Aqui, você pode implementar o envio real do formulário
        // Por exemplo, usando AJAX ou uma API de back-end
      }
    });
  }
});
