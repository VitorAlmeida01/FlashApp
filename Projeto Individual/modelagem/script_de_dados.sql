SHOW databases;
Create DATABASE flashapp;
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
DROP TABLE deck;
CREATE TABLE deck(
	idDeck INT PRIMARY KEY AUTO_INCREMENT,
    titulo varchar(45) NOT NULL,
    dtCriacao DATE,
    fkUsuario INT,
    CONSTRAINT chkUsuario FOREIGN KEY (fkUsuariO) REFERENCES usuario(idUsuario)
);

ALTER TABLE deck
DROP COLUMN qtdEstudada;

ALTER TABLE deck
DROP COLUMN dtEstudo;

CREATE TABLE estudo (
	idEstudo INT AUTO_INCREMENT,
    qtdEstudo INT,
    dtEstudo TIMESTAMP,
    fkDeck INT,
    CONSTRAINT chkFkDeck FOREIGN KEY (fkDeck) REFERENCES deck(idDeck),
    PRIMARY KEY(idEstudo, fkDeck)
);
DROP TABLE estudo;
INSERT INTO estudo (qtdEstudo, dtEstudo, fkDeck) VALUES
	(2, CURRENT_TIMESTAMP, 1);
    
SELECT * FROM estudo;

DESC deck;

select * from flashCard;

DROP TABLE flashCard;
CREATE TABLE flashCard(
	idFlashCard INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    pergunta VARCHAR(200),
    resposta VARCHAR(200),
    dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fKDeck INT,
    CONSTRAINT chkDeck FOREIGN KEY (fkDeck) REFERENCES deck(idDeck)
);

desc flashCard;
DROP TABLE avaliacao;
CREATE TABLE avaliacao(
	idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    statusAvaliacao TINYINT,
    fkFlashCard INT,
    CONSTRAINT chkFlashCard FOREIGN KEY (fkFlashCard) REFERENCES flashCard(idFlashCard),
    CONSTRAINT chkAvaliacao CHECK (statusAvaliacao IN (0, 1))
);


INSERT INTO deck (titulo, dtCriacao, fkUsuario) VALUES
	('Java Script', '2024-11-11', 1),
    ('Tecnologia da informação', '2024-11-11', 1);
    
INSERT INTO flashCard (titulo, pergunta, resposta, dtCriacao, fkDeck) VALUES
	('Pergunta 1', 'O que é um for?', 'Uma estrutura de repetição' , '2024-11-11', 1),
    ('Pergunta 1', 'O que é uma premissa?', 'Coisas que tomamos como verdade' , '2024-11-11', 1);
    
INSERT INTO avaliacao (statusAvaliacao, fkFlashCard) VALUES
	(0, 1),
    (1, 2);
    
SELECT deck.titulo Titulo, deck.dtCriacao Data_de_criacao, usuario.nome Usuario, usuario.email email_usuario FROM deck 
JOIN usuario ON deck.fkUsuario = usuario.idUsuario;


SELECT * FROM avaliacao;

SELECT COUNT(CASE WHEN statusAvaliacao = 0 THEN 1 END) AS quantidade_zero,
	   COUNT(CASE WHEN statusAvaliacao = 1 THEN 1 END) AS quantidade_um,
       COUNT(*),
       fkFlashCard
 FROM avaliacao 
JOIN flashcard on fkFlashCard = idFlashCard
JOIN deck ON fkDeck = idDeck
JOIN usuario ON fkUsuario = idUsuario
WHERE idUsuario = 1
GROUP BY fkFlashCard;
    
    