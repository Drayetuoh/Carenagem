// Botão menu de hamburger
const btnMenu = document.getElementById('btn_menu');
    btnMenu.addEventListener('click', function() {
        // O 'toggle' é um interruptor inteligente: se não tem a classe 'ativo', ele coloca. Se já tem, ele tira.
        this.classList.toggle('ativo');
});

// Botão perfil
const btnCapacetePerfil = document.getElementById('helmet_perfil');
const wrapperPerfil = document.getElementById('perfil_toggle_wrapper');
    if (btnCapacetePerfil && wrapperPerfil) {
        btnCapacetePerfil.addEventListener('click', (evento) => {
            evento.stopPropagation(); // Impede que o clique seja lido pela página inteira
            wrapperPerfil.classList.toggle('ativo');
        });
        document.addEventListener('click', (evento) => {
            if (wrapperPerfil.classList.contains('ativo') && !wrapperPerfil.contains(evento.target)) {
                wrapperPerfil.classList.remove('ativo');
            }
        });
    }

// Botão cadeado
const headerChassi = document.querySelector('.main_header');
const btnTrava = document.getElementById('btn_trava_header');
    if (btnTrava && headerChassi) {
        btnTrava.addEventListener('click', () => {
            // Alterna a classe de fixação no container pai
            const estaFixado = headerChassi.classList.toggle('header_fixado');
        });
    }

// Arcodeão de modulos dinamicis
const secoesEmenta = document.querySelectorAll('details[name="ementa_acordeon"]');

// A trava de segurança: O código só roda se existirem acordeões na página
if (secoesEmenta.length > 0) {
    secoesEmenta.forEach(secao => {
        secao.addEventListener('toggle', (evento) => {
            if (evento.target.open) {
                // Extração e injeção condensadas em linha única para eficiência máxima de memória
                document.getElementById('sidebar_titulo').textContent = evento.target.querySelector('h3').textContent;
                document.getElementById('sidebar_resumo').textContent = evento.target.dataset.resumo || 'Resumo indisponível para este módulo.';
            }
        });
    });
}