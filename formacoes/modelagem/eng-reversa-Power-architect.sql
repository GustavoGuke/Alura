
CREATE TABLE Tb_EDITORA (
                cod_editora VARCHAR(20) NOT NULL,
                tel_1 VARCHAR(14) NOT NULL,
                tel_2 VARCHAR(14) NOT NULL,
                email VARCHAR(50) NOT NULL,
                nome_conta VARCHAR(50) NOT NULL,
                PRIMARY KEY (cod_editora)
);


CREATE TABLE Tb_LIVROS (
                cod_livros VARCHAR(20) NOT NULL,
                nome_livro VARCHAR(50) NOT NULL,
                titulo VARCHAR(50) NOT NULL,
                isbn VARCHAR(13) NOT NULL,
                ano_public DATE NOT NULL,
                valor DECIMAL NOT NULL,
                autor VARCHAR(50) NOT NULL,
                cod_editora VARCHAR(20) NOT NULL,
                PRIMARY KEY (cod_livros)
);


CREATE TABLE Tb_ESTOQUE (
                cod_livros VARCHAR(20) NOT NULL,
                cod_editora VARCHAR(20) NOT NULL,
                qtde INT NOT NULL,
                PRIMARY KEY (cod_livros, cod_editora)
);


CREATE TABLE Tb_CLIENTE (
                cod_cleinte VARCHAR(20) NOT NULL,
                nome VARCHAR(50) NOT NULL,
                tel_1 VARCHAR(14),
                tel_2 VARCHAR(14),
                rua VARCHAR(150) NOT NULL,
                bairro VARCHAR(50) NOT NULL,
                PRIMARY KEY (cod_cleinte)
);

ALTER TABLE Tb_CLIENTE COMMENT 'CURSO MD - CLIENTE';


CREATE TABLE Tb_P_JURIDICA (
                cod_cleinte VARCHAR(20) NOT NULL,
                cnpj VARCHAR(20) NOT NULL,
                ie VARCHAR(20) NOT NULL,
                PRIMARY KEY (cod_cleinte)
);


CREATE TABLE Tb_P_FISICA (
                cod_cleinte VARCHAR(20) NOT NULL,
                cpf VARCHAR(15) NOT NULL,
                rg VARCHAR(15) NOT NULL,
                PRIMARY KEY (cod_cleinte)
);


CREATE TABLE Tb_PEDIDO (
                cod_pedido VARCHAR(10) NOT NULL,
                valor DECIMAL NOT NULL,
                data DATE NOT NULL,
                cod_cleinte VARCHAR(20) NOT NULL,
                PRIMARY KEY (cod_pedido)
);


CREATE TABLE Tb_ITEM_PEDIDO (
                cod_pedido VARCHAR(10) NOT NULL,
                cod_livros VARCHAR(20) NOT NULL,
                qtd_pedido INT NOT NULL,
                valor_item DECIMAL NOT NULL,
                PRIMARY KEY (cod_pedido, cod_livros)
);


ALTER TABLE Tb_LIVROS ADD CONSTRAINT tb_editora_tb_livros_fk
FOREIGN KEY (cod_editora)
REFERENCES Tb_EDITORA (cod_editora)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Tb_ITEM_PEDIDO ADD CONSTRAINT tb_livros_tb_item_pedido_fk
FOREIGN KEY (cod_livros)
REFERENCES Tb_LIVROS (cod_livros)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Tb_ESTOQUE ADD CONSTRAINT tb_livros_tb_estoque_fk
FOREIGN KEY (cod_livros)
REFERENCES Tb_LIVROS (cod_livros)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Tb_ESTOQUE ADD CONSTRAINT tb_livros_tb_estoque_fk1
FOREIGN KEY (cod_editora)
REFERENCES Tb_LIVROS (cod_livros)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Tb_PEDIDO ADD CONSTRAINT tb_cliente_tb_pedido_fk
FOREIGN KEY (cod_cleinte)
REFERENCES Tb_CLIENTE (cod_cleinte)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Tb_P_FISICA ADD CONSTRAINT tb_cliente_tb_p_fisica_fk
FOREIGN KEY (cod_cleinte)
REFERENCES Tb_CLIENTE (cod_cleinte)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Tb_P_JURIDICA ADD CONSTRAINT tb_cliente_tb_p_juridica_fk
FOREIGN KEY (cod_cleinte)
REFERENCES Tb_CLIENTE (cod_cleinte)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Tb_ITEM_PEDIDO ADD CONSTRAINT tb_pedido_tb_item_pedido_fk
FOREIGN KEY (cod_pedido)
REFERENCES Tb_PEDIDO (cod_pedido)
ON DELETE NO ACTION
ON UPDATE NO ACTION;
