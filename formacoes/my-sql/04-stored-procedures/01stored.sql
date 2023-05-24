USE SUCOS_VENDAS;

USE `sucos_vendas`;
DROP procedure IF EXISTS `hello_word`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `hello_word` ()
BEGIN
SELECT 'HELLO WORD';
END$$hello_word
DELIMITER ;
-- ******************************************************************************

USE `sucos_vendas`;
DROP procedure IF EXISTS `soma`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `soma` ()
BEGIN
SELECT (5+5) AS SOMA;
END$$
DELIMITER ;
-- ******************************************************************************

USE `sucos_vendas`;
DROP procedure IF EXISTS `variavel`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `variavel` ()
BEGIN
DECLARE TEXTO VARCHAR(12) DEFAULT '';
SELECT TEXTO AS TEXTO;
END$$
DELIMITER ;
-- ******************************************************************************

USE `sucos_vendas`;
DROP procedure IF EXISTS `variavel2_hora`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `variavel2_hora` ()
BEGIN
DECLARE DATE_TIME DATETIME DEFAULT LOCALTIMESTAMP;
SELECT DATE_TIME;
END$$
DELIMITER ;
-- ******************************************************************************

USE `sucos_vendas`;
DROP procedure IF EXISTS `variavel3_set`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `variavel3_set` ()
BEGIN
DECLARE DATE_TIME DATETIME DEFAULT LOCALTIMESTAMP;
DECLARE TEXTO VARCHAR(20) DEFAULT '';
SET TEXTO = 'CURSO-ALURA- STORED-PROCEDURES';
SELECT DATE_TIME, TEXTO;
END$$
DELIMITER ;

USE `sucos_vendas`;
DROP procedure IF EXISTS `variavel3_set`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `variavel3_set` ()
BEGIN
DECLARE DATE_TIME DATETIME DEFAULT LOCALTIMESTAMP;
DECLARE TEXTO VARCHAR(50) DEFAULT 'texto inicial';
SELECT DATE_TIME, TEXTO;
SET TEXTO = 'texto modificado';
SELECT DATE_TIME, TEXTO;
END$$
DELIMITER ;
-- ******************************************************************************

-- EXERCICIO
DELIMITER $$
CREATE PROCEDURE `Exerc01`()

BEGIN

DECLARE Cliente VARCHAR(10);
DECLARE Idade INT;
DECLARE DataNascimento DATE;
DECLARE Custo FLOAT;

SET Cliente = 'João';
SET Idade = 10;
SET DataNascimento = '20170110';
SET Custo = 10.23;

SELECT Cliente;
SELECT Idade;
SELECT DataNascimento;
SELECT Custo;

END $$
DELIMITER ;

-- ************************************************************************************************************
USE `sucos_vendas`;
DROP procedure IF EXISTS `man_dados_tb_produtos`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `man_dados_tb_produtos` ()
BEGIN
	INSERT INTO tabela_de_produtos (CODIGO_DO_PRODUTO,NOME_DO_PRODUTO,SABOR,TAMANHO,EMBALAGEM,PRECO_DE_LISTA)
    VALUES ('2001001','Sabor da Serra 700 ml - Manga','Manga','700 ml','Garrafa',7.50),
    ('2001000','Sabor da Serra  700 ml - Melão','Melão','700 ml','Garrafa',7.50),
    ('2001002','Sabor da Serra  700 ml - Graviola','Graviola','700 ml','Garrafa',7.50),
    ('2001003','Sabor da Serra  700 ml - Tangerina','Tangerina','700 ml','Garrafa',7.50),
    ('2001004','Sabor da Serra  700 ml - Abacate','Abacate','700 ml','Garrafa',7.50),
    ('2001005','Sabor da Serra  700 ml - Açai','Açai','700 ml','Garrafa',7.50),
    ('2001006','Sabor da Serra  1 Litro - Manga','Manga','1 Litro','Garrafa',7.50),
    ('2001007','Sabor da Serra  1 Litro - Melão','Melão','1 Litro','Garrafa',7.50),
    ('2001008','Sabor da Serra  1 Litro - Graviola','Graviola','1 Litro','Garrafa',7.50),
    ('2001009','Sabor da Serra  1 Litro - Tangerina','Tangerina','1 Litro','Garrafa',7.50),
    ('2001010','Sabor da Serra  1 Litro - Abacate','Abacate','1 Litro','Garrafa',7.50),
    ('2001011','Sabor da Serra  1 Litro - Açai','Açai','1 Litro','Garrafa',7.50);
	
    SELECT * FROM tabela_de_produtos;
    SELECT * FROM tabela_de_produtos WHERE NOME_DO_PRODUTO LIKE 'Sabor da Serra%';
    
	SET SQL_SAFE_UPDATES = 0;
    UPDATE tabela_de_produtos SET PRECO_DE_LISTA = 8 WHERE NOME_DO_PRODUTO LIKE 'Sabor da Serra%';

    SELECT * FROM tabela_de_produtos WHERE NOME_DO_PRODUTO LIKE 'Sabor da Serra%';

    DELETE FROM tabela_de_produtos WHERE NOME_DO_PRODUTO LIKE 'Sabor da Serra%';

    SELECT * FROM tabela_de_produtos WHERE NOME_DO_PRODUTO LIKE 'Sabor da Serra%';
END$$

DELIMITER ;

-- *************************************************************************************
USE `sucos_vendas`;
DROP procedure IF EXISTS `inclui_dados_tb_produtos`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `inclui_dados_tb_produtos` ()
BEGIN
DECLARE vCodigo VARCHAR(50) DEFAULT '3000001';
DECLARE vNome VARCHAR(50) DEFAULT 'Sabor da Serra  700 ml - Manga';
DECLARE vSabor VARCHAR(50) DEFAULT 'Manga';
DECLARE vTamanho VARCHAR(50) DEFAULT '700 ml';
DECLARE vEmbalagem VARCHAR(50) DEFAULT 'Garrafa';
DECLARE vPreco DECIMAL(10,2) DEFAULT 9.25;
INSERT INTO tabela_de_produtos (CODIGO_DO_PRODUTO,NOME_DO_PRODUTO,SABOR,TAMANHO,EMBALAGEM,PRECO_DE_LISTA)
    VALUES (
    vCodigo,
    vNome,
    vSabor,
    vTamanho,
    vEmbalagem,
    vPreco);
END$$

DELIMITER ;

-- *************************************************************************************
USE `sucos_vendas`;
DROP procedure IF EXISTS `update_idade_tb_clientes`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `update_idade_tb_clientes` ()
BEGIN
	UPDATE tabela_de_clientes set idade =  TIMESTAMPDIFF(YEAR, data_de_nascimento, CURDATE());
END$$
-- *******************************************************************************************
USE `sucos_vendas`;
DROP procedure IF EXISTS `tb_produtos_parametro`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `tb_produtos_parametro` (vCodigo VARCHAR(50),
										vNome VARCHAR(50),vSabor VARCHAR(50),
                                        vTamanho VARCHAR(50),vEmbalagem VARCHAR(50),
                                        vPreco DECIMAL(10,2))
BEGIN

INSERT INTO tabela_de_produtos (CODIGO_DO_PRODUTO,NOME_DO_PRODUTO,SABOR,TAMANHO,EMBALAGEM,PRECO_DE_LISTA)
    VALUES (
    vCodigo,
    vNome,
    vSabor,
    vTamanho,
    vEmbalagem,
    vPreco);
END$$

DELIMITER ;

-- ****************************************************************************************
DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `Reajuste_Comissao` (vPercent FLOAT)
BEGIN
UPDATE tabela_de_vendedores SET percentual_comissao = percentual_comissao * (1 + vPercent);
END
DELIMITER ;

-- *******************************************************************************************
-- COMANDO PARA TRATAR ERROS  
-- DECLARE EXIT HANDLER FOR
DELIMITER $$
CREATE PROCEDURE `Quantidade_Notas`()
BEGIN
DECLARE NUMNOTAS INT ;
SELECT COUNT(*) INTO NUMNOTAS  FROM NOTAS_FISCAIS WHERE DATA_VENDA = '20170101';
SELECT NUMNOTAS;
END $$
DELIMITER ;

-- ********************************************************************************************
USE `sucos_vendas`;
DROP procedure IF EXISTS `inclui_novo_produto_parametro_2`;
DELIMITER $$

USE `sucos_vendas`$$
CREATE PROCEDURE `inclui_novo_produto_parametro_2`(vCodigo varchar(50),
vNome varchar(50), vSabor varchar(50), vTamanho varchar(50),
vEmbalagem varchar(50), vPreco DECIMAL(10,2))
BEGIN
DECLARE mensagem VARCHAR(40);
DECLARE EXIT HANDLER FOR 1062
BEGIN
   SET mensagem = 'Problema de Chave Primária !!!';
   SELECT mensagem;
END;

INSERT INTO tabela_de_produtos
(CODIGO_DO_PRODUTO,NOME_DO_PRODUTO,SABOR,TAMANHO,EMBALAGEM,PRECO_DE_LISTA)
     VALUES (vCodigo,
     vNome,
     vSabor,
     vTamanho,
     vEmbalagem,
     vPreco);
SET mensagem = 'Produto incluido com sucesso !!!';
SELECT mensagem;
END$$
DELIMITER ;

-- ******************************************************************
USE `sucos_vendas`;
DROP procedure IF EXISTS `tb_cliente_velho_novo`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `tb_cliente_velho_novo`(vCPF VARCHAR(20))
BEGIN
	DECLARE vResultado VARCHAR(20);
    DECLARE VDataNasc DATE;
    SELECT DATA_DE_NASCIMENTO INTO VDataNasc FROM 
    TABELA_DE_CLIENTES WHERE CPF = vCPF;
    IF VDataNasc < '20000101' THEN
		SET vResultado = 'ADULTO';
	ELSE
		SET vResultado = 'NOVO';
	END IF;
    SELECT vResultado AS CLIENTE;
END$$

DELIMITER ;

-- **************************************************************************
USE `sucos_vendas`;
DROP procedure IF EXISTS `Testa_Numero_Notas`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `Testa_Numero_Notas` (DATANOTA date)
BEGIN
    DECLARE NUMNOTAS INT;
    SELECT COUNT(*) INTO NUMNOTAS FROM NOTAS_FISCAIS WHERE DATA_VENDA = DATANOTA;
    IF NUMNOTAS > 70 THEN
        SELECT 'Muita Nota', NUMNOTAS;
    ELSE
        SELECT 'Pouca Nota', NUMNOTAS;
    END IF;
    SELECT NUMNOTAS AS NOTAS;
END$$

DELIMITER ;

-- ***********************************************************
USE `sucos_vendas`;
DROP procedure IF EXISTS `TB_PRODUTO_CARO`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `TB_PRODUTO_CARO` (pCodigo VARCHAR(20))
BEGIN
	DECLARE preco FLOAT;
    DECLARE isCaro VARCHAR(20);
    SELECT PRECO_DE_LISTA INTO preco FROM TABELA_DE_PRODUTOS WHERE CODIGO_DO_PRODUTO = pCodigo;
    IF preco >= 12 THEN
		SET isCaro = 'Caro';
	ELSEIF preco >= 8 AND preco < 12 then
		SET isCaro = 'justo';
	ELSE
		SET isCaro = 'barato';
	END IF;
    SELECT isCaro;
END$$

DELIMITER ;

-- ************************************************************************************************
USE `sucos_vendas`;
DROP procedure IF EXISTS `Comparativo_Vendas`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `Comparativo_Vendas`(DataInicial DATE, DataFinal DATE)
BEGIN
DECLARE FaturamentoInicial FLOAT;
DECLARE FaturamentoFinal FLOAT;
DECLARE Variacao float;

SELECT SUM(B.QUANTIDADE * B.PRECO) INTO FaturamentoInicial FROM 
NOTAS_FISCAIS A INNER JOIN ITENS_NOTAS_FISCAIS B
ON A.NUMERO = B.NUMERO
WHERE A.DATA_VENDA = DataInicial;
SELECT SUM(B.QUANTIDADE * B.PRECO) INTO FaturamentoFinal FROM 
NOTAS_FISCAIS A INNER JOIN ITENS_NOTAS_FISCAIS B
ON A.NUMERO = B.NUMERO
WHERE A.DATA_VENDA = DataFinal ;
SET Variacao = ((FaturamentoFinal / FaturamentoInicial) -1) * 100;
IF Variacao > 10 THEN
SELECT 'Verde';
ELSEIF Variacao >= -10 AND Variacao <= 10 THEN
SELECT 'Amarelo';
ELSE
SELECT 'Vermelho';
END IF;   

END$$

DELIMITER ;

-- ******************************************************************************
USE `sucos_vendas`;
DROP procedure IF EXISTS `case_tb_produtos`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE PROCEDURE `case_tb_produtos` (vProduto VARCHAR(50))
BEGIN
	DECLARE vSabor VARCHAR(50);
	SELECT SABOR INTO vSabor FROM TABELA_DE_PRODUTOS
    WHERE CODIGO_DO_PRODUTO = vProduto;
    CASE vSabor
		WHEN 'Lima/Lima' THEN SELECT 'Cìtricos';
		WHEN 'Laranja' THEN SELECT 'Cítricos';
		WHEN 'Morango' THEN SELECT 'NEUTRO';
		ELSE SELECT 'ACIDOS';
    END CASE;
END$$

DELIMITER ;

-- **************************************************************************
DELIMITER $$
CREATE PROCEDURE `Comparativo_Vendas_Case_Cond`(DataInicial DATE, DataFinal DATE)
BEGIN
DECLARE FaturamentoInicial FLOAT;
DECLARE FaturamentoFinal FLOAT;
DECLARE Variacao float;
SELECT SUM(B.QUANTIDADE * B.PRECO) INTO FaturamentoInicial FROM 
NOTAS_FISCAIS A INNER JOIN ITENS_NOTAS_FISCAIS B
ON A.NUMERO = B.NUMERO
WHERE A.DATA_VENDA = DataInicial;
SELECT SUM(B.QUANTIDADE * B.PRECO) INTO FaturamentoFinal FROM 
NOTAS_FISCAIS A INNER JOIN ITENS_NOTAS_FISCAIS B
ON A.NUMERO = B.NUMERO
WHERE A.DATA_VENDA = DataFinal ;
SET Variacao = ((FaturamentoFinal / FaturamentoInicial) -1) * 100; 
CASE
WHEN Variacao > 10 THEN SELECT 'Verde';
WHEN Variacao > -10 AND Variacao < 10 THEN  SELECT 'Amarelo';
WHEN Variacao <= -10 THEN SELECT 'Vermelho';
END CASE;
END$$
DELIMITER ; 

-- ********************************************************************************
-- lopping 
DELIMITER $$
CREATE PROCEDURE `Soma_Dias_Notas`()
BEGIN
DECLARE DATAINICIAL DATE;
DECLARE DATAFINAL DATE;
DECLARE NUMNOTAS INT;
SET DATAINICIAL = '20170101';
SET DATAFINAL = '20170110';
WHILE DATAINICIAL <= DATAFINAL
DO
SELECT COUNT(*) INTO NUMNOTAS  FROM notas_fiscais WHERE DATA_VENDA = DATAINICIAL;
SELECT concat(DATE_FORMAT(DATAINICIAL, '%d/%m/%Y'), '-' , CAST(NUMNOTAS as CHAR(50)));
SELECT ADDDATE(DATAINICIAL, INTERVAL 1 DAY) INTO DATAINICIAL;
END WHILE;

END$$
DELIMITER ;
-- ***********************************************************************************
USE `sucos_vendas`;
DROP procedure IF EXISTS `looping_while`;
DELIMITER $$

USE `sucos_vendas`$$
CREATE PROCEDURE `looping_while`(vNumInicial INT, vNumFinal INT)
BEGIN
   DECLARE vContador INT;
   DELETE FROM TAB_LOOPING;
   SET vContador = vNumInicial;
   WHILE vContador <= vNumFinal
   DO
      INSERT INTO TAB_LOOPING (ID) VALUES (vContador);
      SET vContador = vContador + 1;
   END WHILE;
   SELECT * FROM TAB_LOOPING;
END$$
DELIMITER ;


-- ***********************************************************************************
DELIMITER $$
CREATE PROCEDURE `Limite_creditos`()
BEGIN
DECLARE LIMITECREDITO FLOAT;
DECLARE LIMITECREDITOACUM FLOAT;
DECLARE fim_do_cursor INT;
DECLARE c CURSOR FOR SELECT LIMITE_DE_CREDITO FROM Tabela_de_Clientes;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET fim_do_cursor = 1;
SET fim_do_cursor = 0;
SET LIMITECREDITOACUM = 0;
SET LIMITECREDITO = 0;
OPEN c;
WHILE fim_do_cursor = 0
DO
FETCH c INTO LIMITECREDITO;
    IF fim_do_cursor = 0 THEN
        SET LIMITECREDITOACUM = LIMITECREDITOACUM + LIMITECREDITO;
    END IF;
END WHILE;
SELECT LIMITECREDITOACUM;
CLOSE c;
END
DELIMITER ;
/*
CREATE PROCEDURE `mais_um_campo`()
BEGIN
DECLARE QUANTIDADE INT;
DECLARE PRECO FLOAT;
DECLARE FATURAMENTOACUM FLOAT;
DECLARE fim_do_cursor INT;
DECLARE c CURSOR FOR
SELECT INF.QUANTIDADE, INF.PRECO FROM ITENS_NOTAS_FISCAIS INF
INNER JOIN NOTAS_FISCAIS  NF ON NF.NUMERO = INF.NUMERO
WHERE MONTH(NF.DATA_VENDA) = 1 AND YEAR(NF.DATA_VENDA) = 2017;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET fim_do_cursor = 1;
OPEN c;
SET fim_do_cursor = 0;
SET FATURAMENTOACUM = 0;
WHILE fim_do_cursor = 0
DO
FETCH c INTO QUANTIDADE, PRECO;
IF fim_do_cursor = 0 THEN
SET FATURAMENTOACUM = FATURAMENTOACUM + (QUANTIDADE * PRECO);
END IF;
END WHILE;
CLOSE c;
SELECT FATURAMENTOACUM;
END
*/

/*
FUNÇÃO
USE `sucos_vendas`;
DROP function IF EXISTS `acha_sabor`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE FUNCTION `acha_sabor` (vSabor VARCHAR(50))
RETURNS INTEGER
BEGIN
	DECLARE vRetorno VARCHAR(20) DEFAULT "";
	 CASE vSabor
		WHEN 'Lima/Lima' THEN SET vRetorno = 'Cìtricos';
		WHEN 'Laranja' THEN SET vRetorno = 'Cítricos';
		WHEN 'Morango' THEN SET vRetorno = 'NEUTRO';
		ELSE SET vRetorno = 'ACIDOS';
    END CASE;
RETURN vRetorno;
END$$
DELIMITER ;


CREATE FUNCTION `numero_notas` (DATA DATE)
RETURNS INTEGER
BEGIN
DECLARE NUMNOTAS INT;
SELECT COUNT(*) INTO NUMNOTAS FROM notas_fiscais WHERE DATA_VENDA = DATA;
RETURN NUMNOTAS;
END


USE sucos_vendas;

DROP function IF EXISTS f_acha_tipo_sabor;


DELIMITER $$
USE `sucos_vendas`$$
CREATE FUNCTION `f_acha_tipo_sabor`(vSabor VARCHAR(50)) RETURNS varchar(20) CHARSET utf8mb4
BEGIN
  DECLARE vRetorno VARCHAR(20) default "";
  CASE vSabor
  WHEN 'Lima/Limão' THEN SET vRetorno = 'Cítrico';
  WHEN 'Laranja' THEN SET vRetorno = 'Cítrico';
  WHEN 'Morango/Limão' THEN SET vRetorno = 'Cítrico';
  WHEN 'Uva' THEN SET vRetorno = 'Neutro';
  WHEN 'Morango' THEN SET vRetorno = 'Neutro';
  ELSE SET vRetorno = 'Ácidos';
  END CASE;
  RETURN vRetorno;
END$$
DELIMITER ;

USE `sucos_vendas`;
DROP function IF EXISTS `f_numero_aleatorio`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE FUNCTION `f_numero_aleatorio` (min INT, max INT)
RETURNS INTEGER
BEGIN
	DECLARE vRetorno INT;
    SELECT FLOOR(RAND() * (max-min+1)+min) INTO vRetorno; 
	RETURN vRetorno;
END$$

DELIMITER ;



USE `sucos_vendas`;
DROP function IF EXISTS `f_cliente_aleatorio`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE FUNCTION `f_cliente_aleatorio` ()
RETURNS VARCHAR(11)
BEGIN
	DECLARE vRetorno VARCHAR(11);
    DECLARE num_max_tabela INT;
    DECLARE num_aleatorio INT;
    SELECT COUNT(*) INTO num_max_tabela FROM TABELA_DE_CLIENTES;
    SET num_aleatorio = f_numero_aleatorio(1,num_max_tabela);
    SET num_aleatorio = num_aleatorio - 1;
    SELECT CPF INTO vRetorno FROM TABELA_DE_CLIENTES
    LIMIT num_aleatorio, 1;
RETURN vRetorno;
END$$

DELIMITER ;

*/

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

-- TAREFA
CREATE PROCEDURE `Tabela_Numeros`()
BEGIN
DECLARE CONTADOR INT;
DECLARE CONTMAXIMO INT;
SET CONTADOR = 1;
SET CONTMAXIMO = 100;
DELETE FROM TABELA_ALEATORIOS;
WHILE CONTADOR <= CONTMAXIMO
DO
INSERT INTO TABELA_ALEATORIOS (NUMERO) VALUES (f_numero_aleatorio(0,1000));
SET CONTADOR = CONTADOR + 1;
END WHILE;
SELECT * FROM TABELA_ALEATORIOS;
END

USE `sucos_vendas`;
DROP function IF EXISTS `f_produto_aleatorio`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE FUNCTION `f_produto_aleatorio`() 
RETURNS varchar(10) 
BEGIN
DECLARE vRetorno VARCHAR(10);
DECLARE num_max_tabela INT;
DECLARE num_aleatorio INT;
SELECT COUNT(*) INTO num_max_tabela FROM tabela_de_produtos;
SET num_aleatorio = f_numero_aleatorio(1, num_max_tabela);
SET num_aleatorio = num_aleatorio - 1;
SELECT CODIGO_DO_PRODUTO INTO vRetorno FROM tabela_de_produtos
LIMIT num_aleatorio, 1;
RETURN vRetorno;
END$$
DELIMITER ;

USE `sucos_vendas`;
DROP function IF EXISTS `f_vendedor_aleatorio`;

DELIMITER $$
USE `sucos_vendas`$$
CREATE FUNCTION `f_vendedor_aleatorio`() 
RETURNS varchar(5) 
BEGIN
DECLARE vRetorno VARCHAR(5);
DECLARE num_max_tabela INT;
DECLARE num_aleatorio INT;
SELECT COUNT(*) INTO num_max_tabela FROM tabela_de_vendedores;
SET num_aleatorio = f_numero_aleatorio(1, num_max_tabela);
SET num_aleatorio = num_aleatorio - 1;
SELECT MATRICULA INTO vRetorno FROM tabela_de_vendedores
LIMIT num_aleatorio, 1;
RETURN vRetorno;
END$$

DELIMITER ;

-- STORED PROCEDURES
SET SQL_SAFE_UPDATES = 0;
call hello_word;
call soma;
call variavel;
call variavel2_hora;
call variavel3_set;
call man_dados_tb_produtos;
call inclui_dados_tb_produtos;
call update_idade_tb_clientes;
call tb_produtos_parametro('4000001','Sabor da Serra  200 ml - Goiaba', 'Goiaba','200 ml', 'Garrafa', 3.00);
call Reajuste_Comissao(100);
call tb_cliente_velho_novo('1471156710');
call Testa_Numero_Notas('2015-01-03');
CALL TB_PRODUTO_CARO('1004327');
call Comparativo_Vendas('20150301', '20170301');
CALL case_tb_produtos('1000889');
-- FUNÇÃO
SELECT acha_sabor("laranja");
SELECT f_acha_tipo_sabor("laranja");
SELECT NOME_DO_PRODUTO, SABOR, acha_sabor(SABOR) 
AS TIPO FROM TABELA_DE_PRODUTOS;




