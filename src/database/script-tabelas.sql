-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE doprataaoglobal;
USE doprataaoglobal;


CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    tipo_usuario VARCHAR(20) DEFAULT 'aluno',
    status_usuario VARCHAR(20) DEFAULT 'ativo',

    CONSTRAINT chk_tipo_usuario
    CHECK (tipo_usuario IN ('aluno', 'administrador')),

    CONSTRAINT chk_status_usuario
    CHECK (status_usuario IN ('ativo', 'inativo', 'negado'))
);

CREATE TABLE curso (
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    nome_curso VARCHAR(100) NOT NULL,
    descricao VARCHAR(255),
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    status_curso VARCHAR(20) DEFAULT 'ativo',

    CONSTRAINT chk_status_curso
    CHECK (status_curso IN ('ativo', 'inativo'))
);

CREATE TABLE modulo (
    id_modulo INT PRIMARY KEY AUTO_INCREMENT,
    id_curso INT NOT NULL,
    nome_modulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(255),
    ordem INT,

    CONSTRAINT fk_modulo_curso
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
);

CREATE TABLE conteudo (
    id_conteudo INT PRIMARY KEY AUTO_INCREMENT,
    id_modulo INT NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    descricao VARCHAR(255),
    data_publicacao DATETIME DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_conteudo_modulo
    FOREIGN KEY (id_modulo) REFERENCES modulo(id_modulo)
);

CREATE TABLE acesso_curso (
    id_acesso INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_curso INT NOT NULL,
    data_solicitacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_decisao DATETIME,
    status_acesso VARCHAR(20) DEFAULT 'pendente',

    CONSTRAINT chk_status_acesso
    CHECK (status_acesso IN ('pendente', 'aprovado', 'recusado')),

    CONSTRAINT fk_acesso_usuario
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),

    CONSTRAINT fk_acesso_curso
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso),

    CONSTRAINT uq_usuario_curso
    UNIQUE (id_usuario, id_curso)
);

/*como o administrador libera o acesso a determinado curso: */
INSERT INTO acesso_curso (id_usuario, id_curso)
VALUES (2, 1);


/* aprovção: */

UPDATE acesso_curso
SET status_acesso = 'aprovado',
    data_decisao = CURRENT_TIMESTAMP
WHERE id_usuario = 2
AND id_curso = 1;


/* ver aprovações */
SELECT
    usuario.nome,
    curso.nome_curso,
    acesso_curso.status_acesso

FROM acesso_curso

INNER JOIN usuario
ON acesso_curso.id_usuario = usuario.id_usuario

INNER JOIN curso
ON acesso_curso.id_curso = curso.id_curso

WHERE acesso_curso.status_acesso = 'aprovado';






/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */


/*USAR ISTO NO FUTURO PARA A DASH !!!!!! */
create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	temperatura DECIMAL,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);