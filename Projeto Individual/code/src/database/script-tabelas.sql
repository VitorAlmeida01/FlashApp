-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE aquatech;

USE aquatech;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
    cpf CHAR(11),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);

drop table usuario;
drop table aquario;
drop table empresa;
drop table aviso;
drop table medida;

select * from aquario join empresa on aquario.fk_empresa = empresa.id;

select * from usuario;



INSERT INTO usuario (cpf, nome, email, senha, fk_empresa) VALUES
('12345678909','Vitor Almeida', 'vitor@example.com', '123',1),
('12345678922', 'Juliana Almeida', 'juliana@example.com', '123', 2);

-- Inserir dados na tabela empresa
INSERT INTO empresa (razao_social, cnpj, codigo_ativacao) VALUES
('Empresa A', '12345678000101', 'ABC123'),
('Empresa B', '23456789000112', 'DEF456'),
('Empresa C', '34567890000123', 'GHI789'),
('Empresa D', '45678901000134', 'JKL012'),
('Empresa E', '56789012000145', 'MNO345');

-- Inserir dados na tabela aviso
INSERT INTO aviso (titulo, descricao, fk_usuario) VALUES
('Aviso 1', 'Descrição do aviso 1', 3),
('Aviso 2', 'Descrição do aviso 2', 4);

-- Inserir dados na tabela aquario
INSERT INTO aquario (descricao, fk_empresa) VALUES
('Aquário 1', 1),
('Aquário 2', 1),
('Aquário 3', 2),
('Aquário 4', 2);

INSERT INTO aquario (descricao, fk_empresa) VALUES
('Aquário 1', 1);

-- Inserir dados na tabela medida
INSERT INTO medida (dht11_umidade, dht11_temperatura, luminosidade, lm35_temperatura, chave, momento, fk_aquario) VALUES
(45.5, 22.3, 300.0, 23.1, 1, '2023-10-01 10:00:00', 1),
(50.0, 21.8, 320.0, 22.5, 0, '2023-10-01 11:00:00', 2),
(55.2, 23.0, 310.0, 24.0, 1, '2023-10-01 12:00:00', 3),
(60.1, 24.5, 330.0, 25.2, 0, '2023-10-01 13:00:00', 4),
(65.3, 25.0, 340.0, 26.3, 1, '2023-10-01 14:00:00', 5);

INSERT INTO medida (dht11_umidade, dht11_temperatura, luminosidade, lm35_temperatura, chave, momento, fk_aquario) VALUES
(45.5, 22.3, 300.0, 23.1, 1, '2023-10-01 10:00:00', 1);