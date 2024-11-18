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
    dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT,
    CONSTRAINT chkUsuario FOREIGN KEY (fkUsuariO) REFERENCES usuario(idUsuario)
);
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

SELECT * FROM usuario;
SELECT * FROM deck;
    
SELECT idUsuario, nome, email FROM usuario WHERE email = 'vitor.almeida@email.com' AND senha = '123';


SELECT 
    f.idFlashCard, 
    f.titulo AS tituloFlashCard, 
    f.pergunta, 
    f.resposta, 
    f.dtCriacao AS dtCriacaoFlashCard, 
    d.idDeck, 
    d.titulo AS tituloDeck, 
    u.idUsuario, 
    u.nome AS nomeUsuario
FROM 
    flashCard f
INNER JOIN 
    deck d ON f.fkDeck = d.idDeck
INNER JOIN 
    usuario u ON d.fkUsuario = u.idUsuario
WHERE 
    u.idUsuario = 1;
    
    
    
    
SELECT 
    COUNT(*)
FROM 
    flashCard f
INNER JOIN 
    deck d ON f.fkDeck = d.idDeck
INNER JOIN 
    usuario u ON d.fkUsuario = u.idUsuario
WHERE 
    u.idUsuario = 1;
    
    
    SELECT 
    COUNT(*)
FROM 
    flashCard f
INNER JOIN 
    deck d ON f.fkDeck = d.idDeck
INNER JOIN 
    usuario u ON d.fkUsuario = u.idUsuario
WHERE 
    u.idUsuario = 1 and f.dtCriacao LIKE '2024-11-17%';
    
    use flashapp;

select * from flashcard;

DELETE FROM usuario WHERE idUsuario = 51; 

SELECT 
    f.dtCriacao,
    COUNT(*) as quantidade
FROM 
    flashCard f
INNER JOIN 
    deck d ON f.fkDeck = d.idDeck
INNER JOIN 
    usuario u ON d.fkUsuario = u.idUsuario
WHERE 
    u.idUsuario = 1 AND f.dtCriacao <= CURDATE()
GROUP BY 
    f.dtCriacao
ORDER BY 
    f.dtCriacao;

select DATE(f.dtCriacao),  COUNT(*) as quantidade from flashcard f
join deck on f.fkDeck = deck.idDeck
join usuario on deck.fkUsuario = usuario.idUsuario where idUsuario = 1 AND DATE(f.dtCriacao) <= curdate() group by DATE(f.dtCriacao);

SELECT DATE(f.dtCriacao) AS data, COUNT(*) AS quantidade
FROM flashCard f
JOIN deck ON f.fkDeck = deck.idDeck
JOIN usuario ON deck.fkUsuario = usuario.idUsuario
WHERE usuario.idUsuario = 1
  AND DATE(f.dtCriacao) <= CURDATE() -- Compara somente a data
GROUP BY DATE(f.dtCriacao);
    
    SELECT 
      DATE(f.dtCriacao) as data,
      COUNT(*) as quantidade
    FROM 
      flashCard f
    INNER JOIN 
      deck d ON f.fkDeck = d.idDeck
    INNER JOIN 
      usuario u ON d.fkUsuario = u.idUsuario
    WHERE 
      u.idUsuario = 1 AND f.dtCriacao  LIKE '2024-11-17%';



SELECT 
      DATE(f.dtCriacao) as dataCriacao,
      COUNT(*) as quantidade
    FROM 
      flashCard f
    INNER JOIN 
      deck d ON f.fkDeck = d.idDeck
    INNER JOIN 
      usuario u ON d.fkUsuario = u.idUsuario
    WHERE 
      u.idUsuario = 1 AND DATE(f.dtCriacao) >= '2024-11-11' 	and DATE(f.dtCriacao) <= CURDATE() 
    GROUP BY 
      DATE(f.dtCriacao)
    ORDER BY 
      DATE(f.dtCriacao);
      
      
      
          SELECT 
      DATE(f.dtCriacao) as data,
      COUNT(*) as quantidade
    FROM 
      flashCard f
    INNER JOIN 
      deck d ON f.fkDeck = d.idDeck
    INNER JOIN 
      usuario u ON d.fkUsuario = u.idUsuario
    WHERE 
      u.idUsuario = 1 AND DATE(f.dtCriacao) >= CURDATE() - INTERVAL 6 DAY AND DATE(f.dtCriacao) < CURDATE() + INTERVAL 1 DAY
    GROUP BY 
      DATE(f.dtCriacao)
    ORDER BY 
      DATE(f.dtCriacao);