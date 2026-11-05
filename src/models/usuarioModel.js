var database = require("../database/config");

function autenticar(email, senha) {
    var instrucaoSql = `
        SELECT id_usuario, nome, email, tipo_usuario, status_usuario
        FROM usuario
        WHERE email = ? AND senha = ?;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [email, senha]);
}

function buscarPorEmail(email) {
    var instrucaoSql = `
        SELECT id_usuario, email
        FROM usuario
        WHERE email = ?;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [email]);
}

function cadastrar(nome, email, senha, tipoUsuario) {
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, tipo_usuario) VALUES (?, ?, ?, ?);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [nome, email, senha, tipoUsuario]);
}

module.exports = {
    autenticar,
    buscarPorEmail,
    cadastrar
};
