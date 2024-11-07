show databases;

use flashapp;

select * from usuario;

ALTER TABLE usuario
MODIFY COLUMN nome VARCHAR(45) NOT NULL;

ALTER TABLE usuario
MODIFY COLUMN senha VARCHAR(45) NOT NULL;

ALTER TABLE usuario
MODIFY COLUMN email VARCHAR(45) NOT NULL;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL
);

CREATE TABLE deck(
	idDeck INT PRIMARY KEY AUTO_INCREMENT,
    TITULO varchar(45) NOT NULL,
    fkUsuario INT,
    CONSTRAINT chkUsuario FOREIGN KEY (fkUsuariO) REFERENCES usuario(idUsuario)
);

CREATE TABLE flashCard(
	idFlashCard INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    pergunta VARCHAR(200),
    resposta VARCHAR(200),
    fKDeck INT,
    CONSTRAINT chkDeck FOREIGN KEY (fkDeck) REFERENCES deck(idDeck)
);

CREATE TABLE avaliacao(
	idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    statusAvaliacao TINYINT,
    fkFlashCard INT,
    CONSTRAINT chkFlashCard FOREIGN KEY (fkFlashCard) REFERENCES flasCard(idFlashCard)
);