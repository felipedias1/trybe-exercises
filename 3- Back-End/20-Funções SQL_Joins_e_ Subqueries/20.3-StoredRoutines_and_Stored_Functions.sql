-- 20.3-StoredRoutines_and_Stored_Functions
-- Stored Procedure
-- 1) Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. 
-- Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id 
-- do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$

CREATE PROCEDURE MostrarDezAtoresMaisPopulares()
BEGIN
SELECT 
	A.first_name, A.last_name, COUNT(FA.actor_id) AS total_movies
FROM 
	actor AS A
		INNER JOIN
	film_actor AS FA 
ON A.actor_id = FA.actor_id
GROUP BY FA.actor_id
ORDER BY total_movies DESC
LIMIT 10;
END $$

DELIMITER ;

CALL MostrarDezAtoresMaisPopulares();

-- 2)Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma 
-- string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria 
-- selecionada. Use as tabelas film , film_category e category para montar essa procedure.

DELIMITER $$
CREATE PROCEDURE SelecionarFilmePorCategoria(IN categ VARCHAR(50))
BEGIN
	SELECT 
		FC.film_id, F.title, C.category_id, C.name  
    FROM
		category AS C
			INNER JOIN
		film AS F ON C.name = categ
			INNER JOIN
		film_category AS FC ON FC.film_id = F.film_id;
END $$

DELIMITER ;

CALL SelecionarFilmePorCategoria('Action')

-- 3) Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o 
-- cliente está ou não ativo, através de um parâmetro de saída.
DELIMITER $$
CREATE PROCEDURE VerificarClienteAtivo(IN em VARCHAR(100), OUT act VARCHAR(50))
BEGIN
	SELECT 
		active
    FROM
		customer
	WHERE 
		email = em
	INTO 
		act;
END $$

DELIMITER ;

SELECT * FROM customer;

CALL VerificarClienteAtivo('AARON.SELBY@sakilacustomer.org', @active);
SELECT @active;

-- Stored Functions
-- 1) Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de 
-- pagamentos feitos até o momento por um determinado customer_id
DELIMITER $$
CREATE FUNCTION ContaTotalPagamentosPorId(id INT)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE tot INT;
    SELECT COUNT(*)
		FROM payment
		WHERE payment.customer_id = id INTO tot; 
    RETURN tot;
END $$

DELIMITER ;

SELECT ContaTotalPagamentosPorId(2);





