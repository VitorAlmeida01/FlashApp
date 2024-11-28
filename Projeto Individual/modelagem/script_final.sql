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
    dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    statusDeck INT DEFAULT 0,
    fkUsuario INT,
    CONSTRAINT chkUsuario FOREIGN KEY (fkUsuariO) REFERENCES usuario(idUsuario),
    CONSTRAINT chkStatusDeck CHECK (statusDeck IN (0, 1))
);

INSERT INTO deck (titulo, dtCriacao, statusDeck, fkUsuario)
VALUES 
('Arq. Comp', '2024-11-24 10:00:00', 0, 1),
('Int. SO', '2024-11-25 12:00:00', 0, 1),
('Algoritmos', '2024-11-26 15:30:00', 0, 1),
('Banco de dados', '2024-11-27 08:45:00', 0, 1),
('TI', '2024-11-28 18:00:00', 0, 1);

ALTER TABLE deck
MODIFY COLUMN dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

select * from deck;

CREATE TABLE estudo (
	idEstudo INT AUTO_INCREMENT,
    qtdEstudo INT,
    dtEstudo TIMESTAMP,
    fkDeck INT,
    CONSTRAINT FkDeck FOREIGN KEY (fkDeck) REFERENCES deck(idDeck) ON DELETE CASCADE,
    PRIMARY KEY(idEstudo, fkDeck)
);

select * from estudo;

INSERT INTO estudo (qtdEstudo, dtEstudo, fkDeck)
VALUES 
(1, '2024-11-24 10:00:00', 10), 
(1, '2024-11-25 12:00:00', 11), 
(1, '2024-11-26 15:30:00', 12), 
(1, '2024-11-27 08:45:00', 13), 
(1, '2024-11-28 18:00:00', 14); 

update estudo set qtdEstudo = 4 where fkDeck = 10;

update estudo set qtdEstudo = 6 where fkDeck = 12;

delete from flashcard where idFlashCard between 6 and 30;

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

SELECT 
DATE(f.dtCriacao) as dataCriacao,
COUNT(*) as quantidade
FROM flashcard f
JOIN deck d on f.fkDeck = d.idDeck
JOIN usuario u on d.fkUsuario = u.idUsuario
WHERE DATE(f.dtCriacao) >= curdate() - INTERVAL 6 DAY AND DATE(f.dtCriacao) + INTERVAL 1 DAY
GROUP BY DATE(f.dtCriacao)
ORDER BY DATE(f.dtCriacao);






-- INSERTS
INSERT INTO deck (titulo, fkUsuario) VALUES 
	('Algoritmos', 1),
    ('Arq. Comp', 1),
    ('TI', 1),
    ('Introdução a SO', 1);
    
INSERT INTO flashcard (titulo, pergunta, resposta, dtCriacao, fkDeck)
VALUES 

('Binário', 'O que é um número binário?', 'É um número no sistema de base 2.', '2024-11-24 10:00:00', 10),
('CPU', 'Qual é a função principal da CPU?', 'Executar instruções de programas.', '2024-11-24 10:00:00', 10),
('RAM', 'O que é RAM?', 'É a memória de acesso aleatório.', '2024-11-24 10:00:00', 10),
('Cache', 'Qual a vantagem do cache na CPU?', 'Aumenta a velocidade de acesso.', '2024-11-24 10:00:00', 10),
('ALU', 'O que é a ALU?', 'É a unidade lógica e aritmética.', '2024-11-24 10:00:00', 10),

('Kernel', 'O que é o Kernel de um SO?', 'É o núcleo do sistema operacional.', '2024-11-25 12:00:00', 11),
('Thread', 'O que é uma thread?', 'É a menor unidade de processamento.', '2024-11-25 12:00:00', 11),
('Swap', 'O que é espaço de swap?', 'Memória secundária usada como RAM.', '2024-11-25 12:00:00', 11),
('Boot', 'O que acontece no processo de boot?', 'O SO é carregado na memória.', '2024-11-25 12:00:00', 11),
('PID', 'O que é um PID?', 'É o identificador de um processo.', '2024-11-25 12:00:00', 11),

('Bubble', 'O que é o bubble sort?', 'É um algoritmo de ordenação simples.', '2024-11-26 15:30:00', 12),
('Recursão', 'O que é recursão?', 'Uma função que chama a si mesma.', '2024-11-26 15:30:00', 12),
('Busca', 'Qual a diferença entre busca linear e binária?', 'A binária é mais eficiente em listas ordenadas.', '2024-11-26 15:30:00', 12),
('Grafo', 'O que é um grafo?', 'Uma estrutura de dados com nós e arestas.', '2024-11-26 15:30:00', 12),
('FIFO', 'O que é FIFO?', 'Primeiro a entrar, primeiro a sair.', '2024-11-26 15:30:00', 12),

('SQL', 'O que significa SQL?', 'Structured Query Language.', '2024-11-27 08:45:00', 13),
('Chave', 'O que é uma chave primária?', 'Um identificador único para registros.', '2024-11-27 08:45:00', 13),
('JOIN', 'O que é um JOIN?', 'Combinação de dados de várias tabelas.', '2024-11-27 08:45:00', 13),
('Índice', 'Para que serve um índice?', 'Acelera consultas em tabelas.', '2024-11-27 08:45:00', 13),
('ACID', 'O que significa ACID?', 'Propriedades de transações: Atomicidade, Consistência, Isolamento, Durabilidade.', '2024-11-27 08:45:00', 13),

('Rede', 'O que é uma LAN?', 'Rede local de computadores.', '2024-11-28 18:00:00', 14),
('Cloud', 'O que é computação em nuvem?', 'Entrega de serviços de TI pela internet.', '2024-11-28 18:00:00', 14),
('Firewall', 'Para que serve um firewall?', 'Proteger redes de acessos não autorizados.', '2024-11-28 18:00:00', 14),
('IP', 'O que é um endereço IP?', 'Identificação única de dispositivos na rede.', '2024-11-28 18:00:00', 14),
('Backup', 'Qual a importância do backup?', 'Evita perda de dados em falhas.', '2024-11-28 18:00:00', 14);
