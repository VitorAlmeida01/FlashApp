USE flashapp;
show tables;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    senha VARCHAR(45) NOT NULL
);

CREATE TABLE deck(
	idDeck INT PRIMARY KEY AUTO_INCREMENT,
    titulo varchar(45) NOT NULL,
    dtCriacao DATE,
    statusDeck INT DEFAULT 0,
    fkUsuario INT,
    CONSTRAINT chkUsuario FOREIGN KEY (fkUsuariO) REFERENCES usuario(idUsuario),
    CONSTRAINT chkStatusDeck CHECK (statusDeck IN (0, 1))
);

CREATE TABLE estudo (
	idEstudo INT AUTO_INCREMENT,
    qtdEstudo INT,
    dtEstudo TIMESTAMP,
    fkDeck INT,
    CONSTRAINT FkDeck FOREIGN KEY (fkDeck) REFERENCES deck(idDeck) ON DELETE CASCADE,
    PRIMARY KEY(idEstudo, fkDeck)
);

CREATE TABLE flashcard(
	idFlashCard INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    pergunta VARCHAR(200),
    resposta VARCHAR(200),
    dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fKDeck INT,
    CONSTRAINT chkFkDeck FOREIGN KEY (fkDeck) REFERENCES deck(idDeck) ON DELETE CASCADE
);

CREATE TABLE avaliacao(
	idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    statusAvaliacao TINYINT,
    fkFlashCard INT,
    CONSTRAINT chkFlashcard FOREIGN KEY (fkFlashCard) REFERENCES flashcard(idFlashCard) ON DELETE CASCADE,
    CONSTRAINT chkAvaliacao CHECK (statusAvaliacao IN (0, 1))
);

SELECT
	DATE(f.dtCriacao) AS dataCriacao,
    COUNT(*) AS quantidade
    FROM
		flashcard f
	JOIN deck d ON f.fkDeck = d.idDeck
    JOIN usuario u on d.fkUsuario = u.idUsuario
    WHERE 
    u.idUsuario = 1 AND 
    DATE(f.dtCriacao) >= CURDATE() - INTERVAL 6 DAY AND DATE(f.dtCriacao) < CURDATE() + INTERVAL 1 DAY
    GROUP BY DATE(f.dtCriacao)
    ORDER BY DATE(f.dtCriacao);

INSERT INTO flashcard (titulo, pergunta, resposta, fkDeck) VALUES
	('Modelo Mental', 'O que é modelo mental?', 'São o conjunto de sentidos que
nos levam a fazer uma determinada interpretação sobre
um fato.', 1);
