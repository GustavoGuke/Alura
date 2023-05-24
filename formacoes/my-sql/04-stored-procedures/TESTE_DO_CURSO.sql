-- TRIGGERS 2
CREATE TABLE TAB_FATURAMENTO

(DATA_VENDA DATE NULL, TOTAL_VENDA FLOAT);


DELIMITER //

CREATE TRIGGER TG_CALCULA_FATURAMENTO_INSERT AFTER INSERT ON ITENS_NOTAS_FISCAIS

FOR EACH ROW BEGIN

  Call p_calculo_faturamento;

END//


DELIMITER //

CREATE TRIGGER TG_CALCULA_FATURAMENTO_UPDATE AFTER UPDATE ON ITENS_NOTAS_FISCAIS

FOR EACH ROW BEGIN

  Call p_calculo_faturamento;

END//


DELIMITER //

CREATE TRIGGER TG_CALCULA_FATURAMENTO_DELETE AFTER DELETE ON ITENS_NOTAS_FISCAIS

FOR EACH ROW BEGIN

  Call p_calculo_faturamento;

END//

-- TRIGGERS
USE sucos_vendas;

DROP procedure IF EXISTS p_calculo_faturamento;


DELIMITER $$

USE sucos_vendas$$

CREATE PROCEDURE p_calculo_faturamento()

BEGIN

  DELETE FROM TAB_FATURAMENTO;

  INSERT INTO TAB_FATURAMENTO

  SELECT A.DATA_VENDA, SUM(B.QUANTIDADE * B.PRECO) AS TOTAL_VENDA FROM

  NOTAS_FISCAIS A INNER JOIN ITENS_NOTAS_FISCAIS B

  ON A.NUMERO = B.NUMERO

  GROUP BY A.DATA_VENDA;

END$$


DELIMITER ;

-- RESOLVENDO PROBLEMA DE PK
USE sucos_vendas;

DROP procedure IF EXISTS p_inserir_venda;


DELIMITER $$

USE sucos_vendas$$

CREATE DEFINER=root@localhost PROCEDURE p_inserir_venda(vData DATE, max_itens INT,

max_quantidade INT)

BEGIN

DECLARE vCliente VARCHAR(11);

DECLARE vProduto VARCHAR(10);

DECLARE vVendedor VARCHAR(5);

DECLARE vQuantidade INT;

DECLARE vPreco FLOAT;

DECLARE vItens INT;

DECLARE vNumeroNota INT;

DECLARE vContador INT DEFAULT 1;

DECLARE vNumItensNota INT;

SELECT MAX(numero) + 1 INTO vNumeroNota from notas_fiscais;

SET vCliente = f_cliente_aleatorio();

SET vVendedor = f_vendedor_aleatorio();

INSERT INTO notas_fiscais (CPF, MATRICULA, DATA_VENDA, NUMERO, IMPOSTO)

VALUES (vCliente, vVendedor, vData, vNumeroNota, 0.18);

SET vItens = f_numero_aleatorio(1, max_itens);

WHILE vContador <= vItens

DO

   SET vProduto = f_produto_aleatorio();

   SELECT COUNT(*) INTO vNumItensNota FROM itens_notas_fiscais

   WHERE NUMERO = vNumeroNota AND CODIGO_DO_PRODUTO = vProduto;

   IF vNumItensNota = 0 THEN

      SET vQuantidade = f_numero_aleatorio(10, max_quantidade);

      SELECT PRECO_DE_LISTA INTO vPreco FROM tabela_de_produtos

      WHERE CODIGO_DO_PRODUTO = vProduto;

      INSERT INTO itens_notas_fiscais (NUMERO, CODIGO_DO_PRODUTO,

      QUANTIDADE, PRECO) VALUES (vNumeroNota, vProduto, vQuantidade, vPreco);

   END IF;
   SET vContador = vContador + 1;
END WHILE;
END$$
DELIMITER ;

-- problema pratico
USE sucos_vendas;
DROP procedure IF EXISTS p_inserir_venda;
DELIMITER $$
USE sucos_vendas$$
CREATE PROCEDURE p_inserir_venda(vData DATE, max_itens INT,
max_quantidade INT)
BEGIN
DECLARE vCliente VARCHAR(11);
DECLARE vProduto VARCHAR(10);
DECLARE vVendedor VARCHAR(5);
DECLARE vQuantidade INT;
DECLARE vPreco FLOAT;
DECLARE vItens INT;
DECLARE vNumeroNota INT;
DECLARE vContador INT DEFAULT 1;
SELECT MAX(numero) + 1 INTO vNumeroNota from notas_fiscais;
SET vCliente = f_cliente_aleatorio();
SET vVendedor = f_vendedor_aleatorio();
INSERT INTO notas_fiscais (CPF, MATRICULA, DATA_VENDA, NUMERO, IMPOSTO)
VALUES (vCliente, vVendedor, vData, vNumeroNota, 0.18);
SET vItens = f_numero_aleatorio(1, max_itens);
WHILE vContador <= vItens
DO
   SET vProduto = f_produto_aleatorio();
   SET vQuantidade = f_numero_aleatorio(10, max_quantidade);
   SELECT PRECO_DE_LISTA INTO vPreco FROM tabela_de_produtos
   WHERE CODIGO_DO_PRODUTO = vProduto;
   INSERT INTO itens_notas_fiscais (NUMERO, CODIGO_DO_PRODUTO,
   QUANTIDADE, PRECO) VALUES (vNumeroNota, vProduto, vQuantidade, vPreco);
   SET vContador = vContador + 1;
END WHILE;
END$$
DELIMITER ;
-- numero random
-- RAND() * (NUMMAX - NUMMINIMO + 1) + NUMMINIMO 
SELECT FLOOR(RAND() * (300-15+1)+15);
SELECT f_numero_aleatorio(15, 300);
SELECT F_cliente_aleatorio();
SELECT * FROM TABELA_DE_CLIENTES;

-- habilitar as funções
SET GLOBAL log_bin_trust_function_creators = 1;

SELECT * FROM TABELA_DE_PRODUTOS;
SELECT SABOR FROM TABELA_DE_PRODUTOS WHERE CODIGO_DO_PRODUTO = '1000889';

SELECT PRECO_DE_LISTA FROM TABELA_DE_PRODUTOS WHERE CODIGO_DO_PRODUTO = '1000889';

SELECT * FROM TABELA_DE_PRODUTOS;

SELECT DATA_DE_NASCIMENTO, TIMESTAMPDIFF ( YEAR, data_de_nascimento, CURDATE() ) as idade FROM TABELA_DE_CLIENTES;

SELECT * FROM TABELA_DE_CLIENTES;

SELECT NOME, TIMESTAMPDIFF (YEAR, DATA_DE_NASCIMENTO, CURDATE()) AS    IDADE
FROM  tabela_de_clientes;

USE `sucos_vendas`;
SELECT * FROM TABELA_DE_PRODUTOS WHERE SABOR='GOIABA';
SELECT * FROM TABELA_DE_VENDEDORES;


SELECT * FROM TABELA_DE_CLIENTES WHERE CPF = '1471156710';

SELECT DISTINCT * FROM ITENS_NOTAS_FISCAIS A 
INNER JOIN NOTAS_FISCAIS B 
ON A.NUMERO = B.NUMERO;

SELECT COUNT(*) AS NOTAS FROM NOTAS_FISCAIS WHERE DATA_VENDA = '2015-01-03';
SELECT * FROM NOTAS_FISCAIS;

SELECT * FROM NOTAS_FISCAIS INNER JOIN ITENS_NOTAS_FISCAIS;
SELECT SUM(B.QUANTIDADE * B.PRECO) AS TOTAL_VENDA FROM 
NOTAS_FISCAIS A INNER JOIN ITENS_NOTAS_FISCAIS B
ON A.NUMERO = B.NUMERO
WHERE A.DATA_VENDA = '20170301';