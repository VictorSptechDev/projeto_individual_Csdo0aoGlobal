var usuarioModel = require("../models/usuarioModel");

var TOKENS_ACESSO = {
    PRATA2026: "aluno",
    GLOBAL2026: "administrador",
    ADMIN: "administrador"
};

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined || email == "") {
        return res.status(400).send("Seu email está undefined!");
    }

    if (senha == undefined || senha == "") {
        return res.status(400).send("Sua senha está indefinida!");
    }

    usuarioModel.autenticar(email, senha)
        .then(function (resultadoAutenticar) {
            if (resultadoAutenticar.length == 0) {
                return res.status(403).send("Email e/ou senha inválido(s)");
            }

            if (resultadoAutenticar.length > 1) {
                return res.status(403).send("Mais de um usuário com o mesmo login e senha!");
            }

            var usuario = resultadoAutenticar[0];

            if (usuario.status_usuario !== "ativo") {
                return res.status(403).send("Usuário inativo ou com acesso negado.");
            }

            res.json({
                id: usuario.id_usuario,
                nome: usuario.nome,
                email: usuario.email,
                tipoUsuario: usuario.tipo_usuario,
                statusUsuario: usuario.status_usuario
            });
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage || "Erro ao realizar o login.");
        });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var token = req.body.tokenServer;

    if (nome == undefined || nome == "") {
        return res.status(400).send("Seu nome está undefined!");
    }

    if (email == undefined || email == "") {
        return res.status(400).send("Seu email está undefined!");
    }

    if (senha == undefined || senha == "") {
        return res.status(400).send("Sua senha está undefined!");
    }

    if (token == undefined || token == "") {
        return res.status(400).send("Seu token de acesso está undefined!");
    }

    var tipoUsuario = TOKENS_ACESSO[String(token).trim().toUpperCase()];

    if (tipoUsuario == undefined) {
        return res.status(403).send("Token de acesso inválido.");
    }

    usuarioModel.buscarPorEmail(email)
        .then(function (usuariosEncontrados) {
            if (usuariosEncontrados.length > 0) {
                return res.status(409).send("Este e-mail já está cadastrado.");
            }

            return usuarioModel.cadastrar(nome, email, senha, tipoUsuario)
                .then(function (resultado) {
                    res.status(201).json({
                        id: resultado.insertId,
                        nome: nome,
                        email: email,
                        tipoUsuario: tipoUsuario
                    });
                });
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);

            if (erro.code === "ER_DUP_ENTRY") {
                return res.status(409).send("Este e-mail já está cadastrado.");
            }

            res.status(500).json(erro.sqlMessage || "Erro ao realizar o cadastro.");
        });
}

module.exports = {
    autenticar,
    cadastrar
};
