CREATE DATABASE flashapp;

show databases;

use flashapp;

select * from usuario;

DELETE FROM usuario
WHERE idUsuario BETWEEN 4 and 12;

DROP TABLE usuario;
DROP TABLE flashcard;
DROP TABLE deck;
DROP TABLE avaliacao;

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
    titulo VARCHAR(45) NOT NULL,
    pergunta VARCHAR(200) NOT NULL,
    resposta VARCHAR(200) NOT NULL,
    fKDeck INT,
    CONSTRAINT chkDeck FOREIGN KEY (fkDeck) REFERENCES deck(idDeck)
);

CREATE TABLE avaliacao(
	idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    statusAvaliacao TINYINT NOT NULL,
    fkFlashCard INT,
    CONSTRAINT chkFlashCard FOREIGN KEY (fkFlashCard) REFERENCES flashCard(idFlashCard)
);

