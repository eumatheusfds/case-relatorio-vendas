-- Unindo as duas tabelas
CREATE TABLE tabela_unificada AS
SELECT db1.c1 AS data, db1.c2 AS id_marca_, db1.c3 AS vendas, db1.c4 AS valor_do_veiculo, db1.c5 AS nome, db2.c2 AS marca
FROM corrected_database_1 AS db1
JOIN corrected_database_2 AS db2
ON db1.c2 = db2.c1;
