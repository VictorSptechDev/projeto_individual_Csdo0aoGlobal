var database = require("../database/config");

function cadastrar(partida) {
    var instrucaoSql = `
        INSERT INTO partida_cs2 (
            fk_usuario,
            mapa,
            jogou_com_amigos,
            nickname_amigo,
            eliminacoes_usuario,
            taxa_hs_usuario,
            mortes_usuario,
            dano_usuario,
            eliminacoes_amigo,
            taxa_hs_amigo,
            mortes_amigo,
            dano_amigo
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    var parametros = [
        partida.idUsuario,
        partida.mapa,
        partida.jogouComAmigos ? 1 : 0,
        partida.nicknameAmigo,
        partida.eliminacoesUsuario,
        partida.taxaHsUsuario,
        partida.mortesUsuario,
        partida.danoUsuario,
        partida.eliminacoesAmigo,
        partida.taxaHsAmigo,
        partida.mortesAmigo,
        partida.danoAmigo
    ];

    return database.executar(instrucaoSql, parametros);
}

function listarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT
            id_partida AS idPartida,
            mapa,
            jogou_com_amigos AS jogouComAmigos,
            nickname_amigo AS nicknameAmigo,
            eliminacoes_usuario AS eliminacoesUsuario,
            taxa_hs_usuario AS taxaHsUsuario,
            mortes_usuario AS mortesUsuario,
            dano_usuario AS danoUsuario,
            eliminacoes_amigo AS eliminacoesAmigo,
            taxa_hs_amigo AS taxaHsAmigo,
            mortes_amigo AS mortesAmigo,
            dano_amigo AS danoAmigo,
            DATE_FORMAT(data_partida, '%Y-%m-%d %H:%i') AS dataPartida
        FROM partida_cs2
        WHERE fk_usuario = ?
        ORDER BY data_partida ASC, id_partida ASC;
    `;

    return database.executar(instrucaoSql, [idUsuario]);
}

module.exports = {
    cadastrar,
    listarPorUsuario
};
