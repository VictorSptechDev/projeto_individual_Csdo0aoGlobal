CREATE TABLE IF NOT EXISTS partida_cs2 (
    id_partida INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT NOT NULL,
    mapa VARCHAR(30) NOT NULL,
    jogou_com_amigos TINYINT(1) NOT NULL,
    nickname_amigo VARCHAR(80),
    eliminacoes_usuario INT UNSIGNED NOT NULL,
    taxa_hs_usuario TINYINT UNSIGNED NOT NULL,
    mortes_usuario INT UNSIGNED NOT NULL,
    dano_usuario INT UNSIGNED NOT NULL,
    eliminacoes_amigo INT UNSIGNED,
    taxa_hs_amigo TINYINT UNSIGNED,
    mortes_amigo INT UNSIGNED,
    dano_amigo INT UNSIGNED,
    data_partida DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_partida_usuario_data (fk_usuario, data_partida),
    CONSTRAINT fk_partida_cs2_usuario
        FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);
