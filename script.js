const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoNovamente = document.querySelector(".novamente-btn);
botaoNovamente.style.display = "none";                                              
const perguntas = [
    {
        enunciado: "Como você vê o impacto a IA na educação?",
        alternativas: [
            {
                texto: "A IA pode personalisar o aprendizado, oferecendo experiência educacionais mais eficientes e adaptáveis.",
                afirmacao: "Você acredita que IA pode revolucionar a educação, oferecendo materiais e exercícios personalisadospara cada aluno."
            },
            {
                texto: "A IA pode prejudicar a educação ao substituir professores e desumanizar o processo de aprendizagem.",
                afirmacao: "Você teme que a IA retire o papel fundamental dos profssores e a interação humana no processo educativo."
            }
        ]
    },
    {
        enunciado: "Agora imagine que essa pode ser usada em escolas, empregos e até no governo tomando decisões com base em dados. Você confiaria que ela tomasse decisões importantes em seu lugar?",
        alternativas: [
            {
                texto: "Sim, porque ela é lǵica e rápida.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: " Não, porque ela falta humanidade e ética.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Como você acha que a IA pode influenciar o mercado de trabalho?",
        alternativas: [
            {
                texto: "A IA pode criar novas oportunidades de emprego, especialmente em áreas de tecnologia.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "A IA pode eliminar muitos empregos, deixando as pessoas sem trabalho.",
                afirmacao: "Você tem receio de que a automação excessiva acabe gerando desemprego em larga escala."
            }
        ]
    },
    {
        enunciado: "A IA pode melhorar a saúde, ajudando a diagnosticar doenças mais rapidamente. Qual a sua opinião sobre isso?",
        alternativas: [
            {
                texto: "Sim, pois a IA pode analisar grandes volumes de dados e fazer diagnósticos mais rápidos.",
                afirmacao: "Você acredita que a IA pode salvar vidas ao ser aplicada corretamente no diagnóstico médico."
            },
            {
                texto: "Não, a IA pode cometer erros graves sem a supervisão humana.",
                afirmacao: "Você considera que a supervisão humana ainda é essencial, especialmente quando se trata de saúde e vida humana."
            }
        ]
    },
    {
        enunciado: "Como você vê o impacto do ChatGPT na forma como as pessoas fazem pesquisas e escrevem textos?",
        alternativas: [
            {
                texto: "O ChatGPT pode ajudar as pessoas a obter informações rapidamente, facilitando a pesquisa e a escrita de textos.",
                afirmacao: "Você acredita que o ChatGPT é uma ferramenta que pode agilizar o processo de pesquisa e melhorar a produtividade, especialmente para quem tem dificuldades em começar um texto ou encontrar informações."
            },
            {
                texto: "O ChatGPT pode fazer com que as pessoas se tornem preguiçosas e dependentes da tecnologia para produzir conteúdo.",
                afirmacao: "Você tem receio de que o uso excessivo do ChatGPT para criar textos possa prejudicar a criatividade e a habilidade das pessoas de escrever de forma independente."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";

    botaoNovamente.style.display = "block";

    setTimeout(()=> {
        reiniciarJogo();
    },1000);
}

function reiniciarJogo() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.style.display = "none"; 
    botãoNovamente.style.display = "none";
    mostraPergunta();
}

