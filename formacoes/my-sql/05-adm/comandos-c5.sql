/*
AULA 03 BACKUP
*/

/*
AULA 01 - 02
Estas duas variáveis estão relacionadas com o número de tabelas temporárias que podem 
ser abertas durante uma seção em memória e em disco. Claro que isso influencia na 
performance do banco, caso seja necessário usar o HD para armazenar tabelas temporárias 
criadas pelo MySQL durante os comandos SQL.
*/
SHOW GLOBAL STATUS LIKE 'Created_tmp_disk_tables';
SHOW GLOBAL STATUS LIKE 'Created_tmp_tables';

/*
5) A variável tmp_table_size, que foi inicializada pelo my.ini, 
tem o valor de 103 e ele pode ser visto pelo comando do WorkBench:
*/
SHOW GLOBAL VARIABLES LIKE 'tmp_table_size';
/*
6) A variável de ambiente pode ser modificada pelo usuário que tenha 
privilégios para isso. Para isso, novamente na base de dados sakila, digite o seguinte comando:
*/
SET GLOBAL tmp_table_size = 208003328;

-- ALTERAR A ENGINE DO BANCO POR PADRAO É INNODB
ALTER TABLE DEFAULT_TABLE ENGINE = MyISAM;