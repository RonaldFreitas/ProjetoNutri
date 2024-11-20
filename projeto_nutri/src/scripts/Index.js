// Seleciona todos os títulos das perguntas
const faqItems = document.querySelectorAll('.faq-item h2');

// Adiciona um evento de clique a cada título
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const content = item.nextElementSibling; // Seleciona a resposta correspondente
        // Alterna a visibilidade da resposta
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        // Adiciona ou remove a classe 'active' para animar a seta
        item.classList.toggle('active');
    });
});

// Adiciona um evento de "submit" ao formulário de contato
document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário, evitando que a página seja recarregada

    // Obtém os valores dos campos 'nome' e 'mensagem' do formulário
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe uma mensagem de agradecimento ao usuário, utilizando o nome informado no campo
    document.getElementById('resultado-mensagem').innerText = `Obrigado, ${nome}! Sua mensagem foi enviada.`;

    // Limpa os campos do formulário após o envio
    this.reset();
});

// Função de scroll suave para links de âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link, que seria saltar diretamente para a âncora

        // Realiza a rolagem suave até o elemento de destino da âncora
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Define o comportamento de rolagem como suave
        });
    });
});

// Espera até o conteúdo da página ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os elementos que possuem a classe 'fade-in'
    const fadeIns = document.querySelectorAll('.fade-in');

    // Função para verificar se o elemento está visível na tela
    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8; // Define o ponto de ativação como 80% da altura da janela

        fadeIns.forEach(fadeIn => {
            const boxTop = fadeIn.getBoundingClientRect().top; // Pega a posição do topo do elemento em relação à tela

            // Se o topo do elemento está acima do ponto de ativação (80% da altura da janela), adiciona a classe 'visible'
            if (boxTop < triggerBottom) {
                fadeIn.classList.add('visible');
            } else {
                fadeIn.classList.remove('visible'); // Caso contrário, remove a classe 'visible' se o elemento não estiver visível
            }
        });
    }

    // Adiciona um evento de scroll para verificar a visibilidade do elemento ao rolar a página
    window.addEventListener('scroll', checkVisibility);

    // Chama a função imediatamente ao carregar a página para garantir que os elementos visíveis sejam ativados
    checkVisibility();
});

// Evento de scroll para aplicar animação à seção de serviços
window.addEventListener('scroll', function() {
    const servicesSection = document.querySelector('.services-section');
    const sectionPosition = servicesSection.getBoundingClientRect().top; // Posição da seção em relação à janela de visualização
    const screenPosition = window.innerHeight / 1.2; // Ponto da tela onde a animação começa (a seção deve estar 1/1.2 da altura da tela)

    // Se a posição da seção estiver acima do ponto da tela, adiciona a classe 'slide-in' à seção, ativando a animação
    if (sectionPosition < screenPosition) {
        servicesSection.classList.add('slide-in');
    }
});