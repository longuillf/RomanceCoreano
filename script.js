const passos = document.querySelectorAll('.passo');

function mostrarPasso(id) {
    passos.forEach(passo => {
        passo.classList.remove('ativo'); // Remove a classe 'ativo' de todos os passos
    });
    document.getElementById(`passo-${id}`).classList.add('ativo'); // Adiciona a classe 'ativo' ao passo atual
}

document.querySelectorAll('.btn-proximo').forEach(botao => {
    botao.addEventListener('click', () => {
        const proximoPasso = botao.getAttribute('data-proximo'); // Pega o próximo passo a ser exibido
        const escolha = botao.getAttribute('data-escolha'); // Pega a escolha feita pelo usuário

        // Armazena a escolha inicial no localStorage para usar depois
        if (escolha) {
            localStorage.setItem('escolhaInicial', escolha);
        }

        // Verifica se a escolha leva a um final, se sim, mostra o passo do final baseado na escolha inicial
        if (proximoPasso.startsWith('final')) {
            const escolhaFinal = localStorage.getItem('escolhaInicial');
            mostrarPasso(`final-${escolhaFinal}`);
        } else {
            // Caso contrário, vai para o próximo passo normalmente
            mostrarPasso(proximoPasso);
        }
    });
});

// Inicia a história no passo 0 (primeiro passo)
mostrarPasso(0);
