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
    statusDeck INT DEFAULT 0,
    fkUsuario INT,
    CONSTRAINT chkUsuario FOREIGN KEY (fkUsuariO) REFERENCES usuario(idUsuario),
    CONSTRAINT chkStatusDeck CHECK (statusDeck IN (0, 1))
);
select * from deck;

CREATE TABLE estudo (
	idEstudo INT AUTO_INCREMENT,
    qtdEstudo INT,
    dtEstudo TIMESTAMP,
    fkDeck INT,
    CONSTRAINT FkDeck FOREIGN KEY (fkDeck) REFERENCES deck(idDeck) ON DELETE CASCADE,
    PRIMARY KEY(idEstudo, fkDeck)
);

ALTER TABLE estudo
DROP CONSTRAINT FkDeck;

ALTER TABLE estudo 
ADD CONSTRAINT	FkDeck FOREIGN KEY (fkDeck) REFERENCES deck(idDeck) ON DELETE CASCADE;

CREATE TABLE flashCard(
	idFlashCard INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    pergunta VARCHAR(200),
    resposta VARCHAR(200),
    dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fKDeck INT,
    CONSTRAINT chkFkDeck FOREIGN KEY (fkDeck) REFERENCES deck(idDeck) ON DELETE CASCADE
);

SELECT CONSTRAINT_NAME, CONSTRAINT_TYPE
FROM information_schema.TABLE_CONSTRAINTS
WHERE TABLE_SCHEMA = 'flashapp' -- Substitua pelo nome do banco
  AND TABLE_NAME = 'flashCard'; -- Substitua pelo nome da tabela

ALTER TABLE flashCard
DROP CONSTRAINT chkFkDeck;

ALTER TABLE flashCard
ADD CONSTRAINT chkFkDeck FOREIGN KEY (fkDeck) REFERENCES deck(idDeck) ON DELETE CASCADE;

CREATE TABLE avaliacao(
	idAvaliacao INT PRIMARY KEY AUTO_INCREMENT,
    statusAvaliacao TINYINT,
    fkFlashCard INT,
    CONSTRAINT chkFlashCard FOREIGN KEY (fkFlashCard) REFERENCES flashCard(idFlashCard) ON DELETE CASCADE,
    CONSTRAINT chkAvaliacao CHECK (statusAvaliacao IN (0, 1))
);

SELECT * FROM estudo;
desc flashCard;

SELECT CONSTRAINT_NAME, CONSTRAINT_TYPE
FROM information_schema.TABLE_CONSTRAINTS
WHERE TABLE_SCHEMA = 'flashapp' -- Substitua pelo nome do banco
  AND TABLE_NAME = 'avaliacao'; -- Substitua pelo nome da tabela


ALTER TABLE deckConcluido
DROP CONSTRAINT chkStatus;

ALTER TABLE deck 
ADD COLUMN statusDeck INT DEFAULT 0;

select * from deck WHERE fkUsuario = 11;

SELECT * FROM estudo;

update estudo set qtdEstudo = 20 where idEstudo = 8;

SELECT COUNT(*) AS decksConcluidos FROM deck WHERE fkUsuario = 11 AND statusDeck = 1;



SELECT  titulo , qtdEstudo FROM estudo JOIN deck ON fkDeck = idDeck
WHERE fkUsuario = 11
ORDER BY qtdEstudo desc limit 1;

SELECT idDeck, titulo FROM deck WHERE fkUsuario = 11 AND statusDeck = 1;
SELECT idDeck, titulo FROM deck WHERE fkUsuario = 11 AND statusDeck = 0 ;


ALTER TABLE deck
ADD CONSTRAINT chkStatusDeck CHECK (statusDeck IN (0, 1));

INSERT INTO deckConcluido (statusDeck, fkDeck) VALUES
		(1, 1);
drop table deckConcluido;
        
SELECT * FROM deckConcluido;

DROP TABLE estudo;
INSERT INTO estudo (qtdEstudo, dtEstudo, fkDeck) VALUES
	(2, CURRENT_TIMESTAMP, 1);
    
SELECT * FROM estudo;
DROP TABLE estudo;
delete from estudo where idEstudo = 4;

INSERT INTO estudo (qtdEstudo, dtEstudo, fkDeck) VALUES
			(1, '2024-11-24 23:20:04' , 39);
            
UPDATE estudo 
SET qtdEstudo = 2
WHERE fkDeck = 44 AND DATE(dtEstudo) = '2024-11-23';
            
SELECT * FROM estudo;
select * from deck;

SELECT DATE(dtEstudo) AS dataEstudo ,SUM(qtdEstudo) AS totalEstudado FROM estudo
JOIN deck on fkDeck = idDeck
JOIN usuario on fkUsuario = idUsuario
WHERE idUsuario = 11 AND dtEstudo >= CURDATE() - INTERVAL 6 DAY AND dtEstudo < CURDATE() + INTERVAL 1 DAY
GROUP BY dataEstudo
ORDER BY dataEstudo;

select * from estudo;

      SELECT 
      DATE(f.dtCriacao) as dataCriacao,
      COUNT(*) as quantidade
    FROM 
      flashCard f
    JOIN 
      deck d ON f.fkDeck = d.idDeck
    JOIN 
      usuario u ON d.fkUsuario = u.idUsuario
    WHERE 
      u.idUsuario = 1 AND DATE(f.dtCriacao) >= CURDATE() - INTERVAL 6 DAY AND DATE(f.dtCriacao) < CURDATE() + INTERVAL 1 DAY
    GROUP BY 
      DATE(f.dtCriacao)
    ORDER BY 
      DATE(f.dtCriacao);

-- >= CURDATE() - INTERVAL 6 DAY AND DATE(f.dtCriacao) < CURDATE() + INTERVAL 1 DAY
-- DATE(f.dtCriacao) <= curdate() group by DATE(f.dtCriacao)

SELECT qtdEstudo, dtEstudo FROM estudo
JOIN deck on fkDeck = idDeck
JOIN usuario on fkUsuario = idUsuario
WHERE idUsuario = 1 AND DATE(dtEstudo) = current_date();




select * from flashCard;

insert into flashCard (titulo, pergunta, resposta, dtCriacao, fkDeck) values
		('teste2', '1', '1222', '2024-11-23 00:00:00', 36),
        ('test3', '1', '1222', '2024-11-22 00:00:00', 36);

desc flashCard;
DROP TABLE avaliacao;


ALTER TABLE avaliacao
DROP CONSTRAINT chkFlashCard;

ALTER TABLE avaliacao
ADD CONSTRAINT chkFlashCard FOREIGN KEY (fkFlashCard) REFERENCES flashCard(idFlashCard) ON DELETE CASCADE;

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
    
    