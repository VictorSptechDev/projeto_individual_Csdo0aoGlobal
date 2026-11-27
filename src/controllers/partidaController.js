var partidaModel = require("../models/partidaModel");

var MAPAS_VALIDOS = [
    "mirage",
    "dust",
    "nuke",
    "inferno",
    "anubis",
    "cache",
    "ancient",
    "cobblestone"
];

function inteiroDentroDoIntervalo(valor, minimo, maximo) {
    return Number.isInteger(valor)
        && valor >= minimo
        && (maximo === null || valor <= maximo);
}

function cadastrar(req, res) {
    var dados = req.body || {};
    var idUsuario = Number(dados.idUsuario);
    var jogouComAmigos = dados.jogouComAmigos === "amigos";
    var nicknameAmigo = jogouComAmigos ? String(dados.nicknameAmigo || "").trim() : null;

    if (!inteiroDentroDoIntervalo(idUsuario, 1, null)) {
        return res.status(400).json({ message: "Usuário inválido. Faça login novamente." });
    }

    if (MAPAS_VALIDOS.indexOf(dados.mapa) === -1) {
        return res.status(400).json({ message: "Selecione um mapa válido." });
    }

    if (dados.jogouComAmigos !== "amigos" && dados.jogouComAmigos !== "solo") {
        return res.status(400).json({ message: "Selecione se jogou com amigos ou solo." });
    }

    if (
        !inteiroDentroDoIntervalo(dados.eliminacoesUsuario, 0, null)
        || !inteiroDentroDoIntervalo(dados.taxaHsUsuario, 0, 100)
        || !inteiroDentroDoIntervalo(dados.mortesUsuario, 0, null)
        || !inteiroDentroDoIntervalo(dados.danoUsuario, 0, null)
    ) {
        return res.status(400).json({ message: "Confira suas estatísticas. A taxa de HS deve ser um inteiro entre 0 e 100." });
    }

    var partida = {
        idUsuario: idUsuario,
        mapa: dados.mapa,
        jogouComAmigos: jogouComAmigos,
        nicknameAmigo: nicknameAmigo,
        eliminacoesUsuario: dados.eliminacoesUsuario,
        taxaHsUsuario: dados.taxaHsUsuario,
        mortesUsuario: dados.mortesUsuario,
        danoUsuario: dados.danoUsuario,
        eliminacoesAmigo: null,
        taxaHsAmigo: null,
        mortesAmigo: null,
        danoAmigo: null
    };

    if (jogouComAmigos) {
        if (
            nicknameAmigo.length < 2
            || nicknameAmigo[0] !== "@"
            || nicknameAmigo.indexOf("@", 1) !== -1
        ) {
            return res.status(400).json({ message: "Nickname inválido. Use exatamente um @ no início, por exemplo: @jogador." });
        }

        if (
            !inteiroDentroDoIntervalo(dados.eliminacoesAmigo, 0, null)
            || !inteiroDentroDoIntervalo(dados.taxaHsAmigo, 0, 100)
            || !inteiroDentroDoIntervalo(dados.mortesAmigo, 0, null)
            || !inteiroDentroDoIntervalo(dados.danoAmigo, 0, null)
        ) {
            return res.status(400).json({ message: "Confira as estatísticas do amigo. A taxa de HS deve ser um inteiro entre 0 e 100." });
        }

        partida.eliminacoesAmigo = dados.eliminacoesAmigo;
        partida.taxaHsAmigo = dados.taxaHsAmigo;
        partida.mortesAmigo = dados.mortesAmigo;
        partida.danoAmigo = dados.danoAmigo;
    }

    partidaModel.cadastrar(partida)
        .then(function (resultado) {
            res.status(201).json({ idPartida: resultado.insertId });
        })
        .catch(function (erro) {
            console.error("Erro ao cadastrar partida:", erro);
            res.status(500).json({ message: "Não foi possível salvar a partida no banco de dados." });
        });
}

function listarPorUsuario(req, res) {
    var idUsuario = Number(req.params.idUsuario);

    if (!inteiroDentroDoIntervalo(idUsuario, 1, null)) {
        return res.status(400).json({ message: "Usuário inválido." });
    }

    partidaModel.listarPorUsuario(idUsuario)
        .then(function (partidas) {
            res.status(200).json(partidas);
        })
        .catch(function (erro) {
            console.error("Erro ao buscar partidas:", erro);
            res.status(500).json({ message: "Não foi possível carregar as partidas." });
        });
}

module.exports = {
    cadastrar,
    listarPorUsuario
};
