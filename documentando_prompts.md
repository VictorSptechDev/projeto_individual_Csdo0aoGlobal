# AGENTS.md

## Visão geral

Descreva brevemente o projeto: qual é o objetivo da aplicação, qual problema ela resolve e, se necessário, quem são os principais usuários;

O projeto é relacinado á uma plataforma web que ensina jogadores de counter strike 2 sobre o nível profissional competitivo do jogo, apresnta sobre campeonatos, majors, e cativa o interesse de jogadores novos a conhecer o nível competitivo do jogo, o objetivo é ensinar jogadores novatos a chegarem no nível profissional a partir de mini aulas, cursos, e passo a passo, também como objetivo cativar e buscar novos jogadores, o problema consiste em o jogador ter dificuldade de analisar os próprios erros, o diferencial da plataforma é o gráfico sobre desempenho em mapas especificos, que apresenta deficiencias na jogatina do usuario, mostra onde o jogador mais acerta e mais erra a partir de cálculos matemáticos, os principais usuários são "gamers" pessoas que gostam de jogos online coperativos.

### Tecnologias

HTML: será utilizado para construir a estrutura das páginas do site, como a tela de cadastro, a área do curso e o painel de estatísticas.

CSS: será responsável pela estilização e pelo visual da aplicação, incluindo cores, organização dos elementos, gráficos e adaptação das páginas.

JavaScript: será utilizado para implementar a lógica da aplicação, realizar cálculos matemáticos relacionados às estatísticas dos jogadores, manipular informações e permitir a interação entre o usuário e o site.

Chart.js: biblioteca JavaScript que será utilizada para criar gráficos visuais de desempenho, permitindo comparar os resultados do jogador em diferentes mapas e acompanhar sua evolução.

MySQL: sistema de gerenciamento de banco de dados que será utilizado para armazenar e organizar informações, como os dados dos usuários e as estatísticas de desempenho registradas pela aplicação.

API: será responsável por intermediar a comunicação entre o site e o banco de dados, permitindo enviar, consultar e receber informações necessárias para o funcionamento da aplicação.

## Comandos

para fazer o projeto rodar e funcionar, use estes comandos no powersheel:

npm i
npm start
git add .
git commit -m '  '
git push

no git commit -m '(seu comentario aqui)'
coloque sempre todas as alterações feitas e especifique brevemente o que fez

## Arquitetura

- */public*: Contém os arquivos estáticos (HTML, CSS e JS do cliente) das telas de cadastro e da dashboard.
- */src/routes*: Define os endpoints da API HTTP, recebendo as requisições do front-end.
- */src/controllers*: Contém a lógica de negócio, extraindo os dados da requisição e acionando as instruções de banco de dados.
- */src/models ou /database*: Gerencia a conexão com o MySQL e as funções que executam as queries SQL (INSERT, SELECT).
- *Fluxo de uma requisição*: Interface Web (Formulário fetch()) -> Rota Node.js -> Controller -> MySQL -> Retorno de Status ou JSON.

## Padrões de desenvolvimento

quando se trata do html sempre utilize let ao invés de var, sempre em todas as ocasiões copie a forma que eu escrevo e minha sintaxe, espaçamentos, formas que eu dou os nomes para variáveis, a forma do meu raciocínio em calculos com o script, 

em banco de dados: por favor sempre escreva os comandos em letras maísculas, e sempre comente o código sobre o que está fazendo 


a dica de ouro é sempre fazer pequenos comentários para facilitar minha visualização para eu entender o coódigo. 

## Cuidados e restrições

por favor siga a risca sobre o que eu pedi, não precisa colocar mais coisas ou mudar a minha forma de raciocínio, eu vou dando os comandos para alteração, se possível sempre que quiser adicionar alguma função não solicitada sempre me avise, também se tiver idéias ou sugestões me fale antes do código, o projeto não pode ter opções de pagamentos e assinatura, leve em consideração que é um projeto em fase beta e de análise para desenvolvimento, então não precisa estar pronto todas as funções, me ajude a fazer o projeto passo a passo de forma gradual, o projeto não pode fugir das linguagens e tecnologias que eu citei, de forma alguma troque isso!


## Regra geral: 
Antes de implementar uma alteração, siga as tecnologias, arquitetura, convenções e restrições descritas neste documento. Caso alguma informação esteja ausente, analise o código existente e siga os padrões já adotados no projeto.




\-- utilizei o antigravity para separar o css em pastas diverentes para organizar e facilitar o trabalho \*Usando agente (Claude.opus 4.6 )



\-- PROMPT:

Eu estou realizando um site sobre meu interesse sobre counter strike 2, como isso é importante para mim, e como se fosse um blog para dicas de evolução de como chegar ao global no counter strike2, acabei comentendo um erro e aqui que entra sua ajuda, eu fiz o css de tudo em umas pasta só e acabei criando mais uma para organizar o css mas acabei esquecendo, organize todo o css e separe em cada pasta difrente o css de cada pagina separadinha e nomeie



\-- a partir daqui eu utilizei o opencode

preciso que voce refatore todo o banco de dados do meu projeto de counterstrike, preciso que voce tenha de referencia o banco de dados na pasta database, script-tabelas.sql e procure entre as pastas onde tem os inserts e selects para fazer a pagina de login e cadastro funcionar, fica no usuario.controller.js, usuarios.js , usuariomodel.js , faça o banco de dados funcionar com a tela de login e cadastro





reverta tudo como antes não era para voce mudar as tabelas que eu fiz no script-tabelas, era so nas outras tabelas para fazer a conecção dar certo, gostei que voce mudou op html de login e cadastro para ficar parecido com o banco de dados, so por favor no campo de cadastro deixe novamente o campo de token de acesso, por que funcionará por um token que o usuario recebera manualmente que liberará o tipo de acesso do usuario



usei o antigravity com o gemini 3.8



**troque a cor do prata para cinza e global para dourado, preciso que seja em layers diferentes mas fazendo parte do mesmo texto**



**me explique e coloque essa pequena imagem: https://tse4.mm.bing.net/th/id/OIP.QazZmqt2AYJ49asUTM4PPAHaEK?r=0\&rs=1\&pid=ImgDetMain\&o=7\&rm=3 , do lado do prata ao global como uma imagem pequena**

