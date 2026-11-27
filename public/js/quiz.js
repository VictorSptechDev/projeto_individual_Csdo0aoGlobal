var perguntasFundamentosCs2 = [
    {
        pergunta: "O que significa fazer um peek no Counter-Strike 2?",
        opcoes: [
            { letra: "A", texto: "Sair de uma cobertura para observar ou enfrentar um adversário." },
            { letra: "B", texto: "Manter a mira fixa em um ponto sem se movimentar." },
            { letra: "C", texto: "Recuar para uma posição segura depois de plantar a bomba." },
            { letra: "D", texto: "Trocar a arma antes de entrar em um bombsite." }
        ],
        corretas: ["A"]
    },
    {
        pergunta: "O que é counter-strafing e qual é seu principal objetivo?",
        opcoes: [
            { letra: "A", texto: "Segurar A e D simultaneamente para correr mais rápido." },
            { letra: "B", texto: "Pressionar brevemente a direção oposta para reduzir o movimento e parar mais rapidamente." },
            { letra: "C", texto: "Pular e agachar simultaneamente durante o disparo." },
            { letra: "D", texto: "Movimentar o mouse na direção contrária ao inimigo." }
        ],
        corretas: ["B"]
    },
    {
        pergunta: "Qual é o princípio mais importante do crosshair placement?",
        opcoes: [
            { letra: "A", texto: "Manter a mira na altura do chão para controlar o recuo." },
            { letra: "B", texto: "Manter a mira na altura provável da cabeça e antecipar a posição do inimigo." },
            { letra: "C", texto: "Manter a mira sempre no centro exato da tela, independentemente do mapa." },
            { letra: "D", texto: "Mirar sempre na região do peito para garantir mais tiros." }
        ],
        corretas: ["B"]
    },
    {
        pergunta: "Qual é a finalidade principal de um jiggle peek?",
        opcoes: [
            { letra: "A", texto: "Sair completamente da cobertura e permanecer no duelo." },
            { letra: "B", texto: "Pular sobre uma parede para surpreender o adversário." },
            { letra: "C", texto: "Expor-se rapidamente e voltar para a cobertura, buscando informação ou provocar um disparo." },
            { letra: "D", texto: "Agachar e permanecer parado atrás da parede." }
        ],
        corretas: ["C"]
    },
    {
        pergunta: "Um adversário está segurando um ângulo fechado com uma AWP. Por que um wide swing pode ser útil?",
        opcoes: [
            { letra: "A", texto: "Porque permite atravessar a parede sem receber dano." },
            { letra: "B", texto: "Porque cria um deslocamento lateral maior, podendo dificultar a antecipação da mira do adversário." },
            { letra: "C", texto: "Porque elimina completamente a imprecisão do rifle em movimento." },
            { letra: "D", texto: "Porque impede o adversário de ouvir seus passos." }
        ],
        corretas: ["B"]
    },
    {
        pergunta: "Ao entrar em um bombsite com vários possíveis ângulos de ameaça, qual princípio de posicionamento é mais seguro?",
        opcoes: [
            { letra: "A", texto: "Entrar olhando para o centro e ignorar as laterais." },
            { letra: "B", texto: "Correr diretamente para o fundo do bombsite." },
            { letra: "C", texto: "Tentar enfrentar todos os ângulos ao mesmo tempo." },
            { letra: "D", texto: "Isolar e limpar os ângulos progressivamente, reduzindo as linhas de visão simultâneas." }
        ],
        corretas: ["D"]
    },
    {
        pergunta: "Qual é o principal efeito de utilizar Shift para caminhar durante uma aproximação?",
        opcoes: [
            { letra: "A", texto: "Reduzir o ruído dos passos, sacrificando velocidade de deslocamento." },
            { letra: "B", texto: "Aumentar a precisão do rifle mesmo enquanto corre." },
            { letra: "C", texto: "Eliminar qualquer som produzido pelo personagem em todas as situações." },
            { letra: "D", texto: "Aumentar a velocidade de movimentação em superfícies abertas." }
        ],
        corretas: ["A"]
    },
    {
        pergunta: "Ao preparar um peek com rifle, quais práticas ajudam a melhorar sua execução? Selecione todas as corretas.",
        opcoes: [
            { letra: "A", texto: "Posicionar a mira na altura provável da cabeça." },
            { letra: "B", texto: "Controlar a velocidade e parar antes de disparar." },
            { letra: "C", texto: "Ignorar as possíveis posições dos inimigos e depender apenas do reflexo." },
            { letra: "D", texto: "Usar a cobertura para controlar quanto do corpo fica exposto." }
        ],
        corretas: ["A", "B", "D"],
        multipla: true
    },
    {
        pergunta: "Caminhar mantendo Shift pressionado reduz o ruído dos passos, mas também diminui a velocidade de deslocamento.",
        opcoes: [
            { letra: "A", texto: "Verdadeiro." },
            { letra: "B", texto: "Falso." }
        ],
        corretas: ["A"]
    },
    {
        pergunta: "Um rifle mantém a mesma precisão de tiro quando o jogador dispara durante um strafe lateral e quando está completamente parado.",
        opcoes: [
            { letra: "A", texto: "Verdadeiro." },
            { letra: "B", texto: "Falso." }
        ],
        corretas: ["B"]
    }
];

var indicePerguntaQuiz = 0;
var pontuacaoQuiz = 0;

function iniciarQuizFundamentos() {
    indicePerguntaQuiz = 0;
    pontuacaoQuiz = 0;
    document.getElementById("quizInicio").hidden = true;
    document.getElementById("quizResultado").hidden = true;
    document.getElementById("quizPergunta").hidden = false;
    renderizarPerguntaQuiz();
}

function renderizarPerguntaQuiz() {
    var perguntaAtual = perguntasFundamentosCs2[indicePerguntaQuiz];
    var alternativas = document.getElementById("quizAlternativas");
    alternativas.textContent = "";

    document.getElementById("quizProgresso").textContent =
        "Pergunta " + (indicePerguntaQuiz + 1) + " de " + perguntasFundamentosCs2.length
        + (perguntaAtual.multipla ? " — selecione todas as corretas." : "");
    document.getElementById("quizEnunciado").textContent = perguntaAtual.pergunta;
    document.getElementById("quizFeedback").textContent = "";
    document.getElementById("quizVerificar").hidden = false;
    document.getElementById("quizProxima").hidden = true;
    document.getElementById("quizProxima").textContent =
        indicePerguntaQuiz === perguntasFundamentosCs2.length - 1 ? "Ver resultado" : "Próxima pergunta";

    perguntaAtual.opcoes.forEach(function (opcao, indice) {
        var rotulo = document.createElement("label");
        var entrada = document.createElement("input");
        var texto = document.createElement("span");

        rotulo.className = "quiz-opcao";
        entrada.type = perguntaAtual.multipla ? "checkbox" : "radio";
        entrada.name = "respostaQuiz";
        entrada.value = opcao.letra;
        entrada.id = "respostaQuiz" + indice;
        texto.textContent = opcao.letra + ") " + opcao.texto;

        rotulo.htmlFor = entrada.id;
        rotulo.appendChild(entrada);
        rotulo.appendChild(texto);
        alternativas.appendChild(rotulo);
    });
}

function verificarRespostaQuiz() {
    var perguntaAtual = perguntasFundamentosCs2[indicePerguntaQuiz];
    var selecionadas = Array.from(document.querySelectorAll("input[name='respostaQuiz']:checked"))
        .map(function (entrada) { return entrada.value; })
        .sort();

    if (selecionadas.length === 0) {
        document.getElementById("quizFeedback").textContent = "Selecione uma resposta antes de continuar.";
        return;
    }

    var corretas = perguntaAtual.corretas.slice().sort();
    var acertou = selecionadas.length === corretas.length
        && selecionadas.every(function (letra, indice) { return letra === corretas[indice]; });

    if (acertou) {
        pontuacaoQuiz++;
        document.getElementById("quizFeedback").textContent = "Resposta correta!";
    } else {
        document.getElementById("quizFeedback").textContent =
            "Resposta incorreta. Alternativa(s) correta(s): " + corretas.join(", ") + ".";
    }

    document.querySelectorAll("input[name='respostaQuiz']").forEach(function (entrada) {
        entrada.disabled = true;
    });
    document.getElementById("quizVerificar").hidden = true;
    document.getElementById("quizProxima").hidden = false;
}

function avancarQuiz() {
    if (indicePerguntaQuiz < perguntasFundamentosCs2.length - 1) {
        indicePerguntaQuiz++;
        renderizarPerguntaQuiz();
        return;
    }

    var percentual = Math.round((pontuacaoQuiz / perguntasFundamentosCs2.length) * 100);
    document.getElementById("quizPergunta").hidden = true;
    document.getElementById("quizResultado").hidden = false;
    document.getElementById("quizPontuacao").textContent =
        "Você acertou " + pontuacaoQuiz + " de " + perguntasFundamentosCs2.length + " perguntas (" + percentual + "%).";
    document.getElementById("quizMensagemFinal").textContent = percentual >= 80
        ? "Mandou bem! Continue praticando para evoluir no CS2."
        : "Revise os conceitos e tente novamente para melhorar sua pontuação.";
}
