-- AULA 20.1 -  Funções SQL, Joins e Subqueries
-- INNER JOIN
-- 1)Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando 
-- tabelas actor e film_actor .
SELECT a.actor_id, a.first_name, a.last_name, f.film_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;
-- 2)Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use 
-- as tabelas staff e address .
SELECT s.first_name, s.last_name, a.address
FROM sakila.staff AS s
INNER JOIN sakila.address AS a
ON s.address_id = a.address_id;
-- 3)Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem 
-- decrescente, juntamente com o id do endereço e o endereço onde o cliente mora. Essas informações 
-- podem ser encontradas nas tabelas customer e address
SELECT c.customer_id, c.first_name, c.last_name, c.email, a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id
ORDER BY first_name DESC;
-- 4) Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito 
-- da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas 
-- address e customer .
SELECT 
	c.first_name, c.last_name, c.email, a.address_id, a.address, a.district
FROM 
	sakila.customer AS c
		INNER JOIN 
	sakila.address AS a ON c.address_id = a.address_id
WHERE 
	a.district = 'california' 
		AND c.first_name LIKE '%rene%';
-- 5) Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por 
-- nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas 
-- na tabela address e customer
SELECT c.first_name, COUNT(a.address) AS 'QTDE Enderecos'
FROM 
	sakila.customer AS c
		INNER JOIN 
	sakila.address AS a ON c.address_id = a.address_id
WHERE
	c.active = 1
GROUP BY c.first_name
ORDER BY first_name DESC;
-- 6) Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários 
-- no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e 
-- sobrenome do funcionário.
SELECT 
	S.first_name, 
	S.last_name, 
    AVG(P.amount) AS 'Média de Valor'
FROM 
	sakila.staff AS S
		INNER JOIN 
	sakila.payment AS P ON S.staff_id = P.staff_id
WHERE
	YEAR(P.payment_date) = 2006
GROUP BY S.first_name, S.last_name;
-- 7) Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas 
-- actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film;
SELECT * FROM sakila.film_actor;

SELECT 
	FA.actor_id,
    A.first_name,
	FA.film_id, 
    F.title
FROM 
	sakila.film_actor AS FA
		INNER JOIN 
	sakila.film AS F ON FA.film_id = F.film_id
		INNER JOIN
	sakila.actor AS A ON FA.actor_id = A.actor_id;

-- LEFT JOIN AND RIGHT JOIN

-- Exemplo LEFT JOIN 
USE sakila;
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
LEFT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- Exemplo RIGHT JOIN
SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
RIGHT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY a.last_name;

-- SELF JOIN 
-- 1) Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo 
SELECT t1.film_id,t1.title, t1.replacement_cost, t2.film_id, t2.title, t2.replacement_cost
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.replacement_cost = t2.replacement_cost;
-- 2) Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas 
-- os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT * FROM sakila.film; 
SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.rental_duration = t2.rental_duration 
HAVING t1.rental_duration BETWEEN 2 AND 4;

-- UNION E UNION ALL
-- 1) Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela 
-- staff com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir 
-- nenhum funcionário ao unir as tabelas.
SELECT first_name, last_name FROM sakila.staff
UNION ALL
SELECT first_name, last_name FROM sakila.actor;
-- 2) Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm 
-- a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os 
-- resultados únicos.
SELECT first_name, last_name FROM sakila.customer WHERE first_name LIKE '%tracy%' 
UNION
SELECT first_name, last_name FROM sakila.actor WHERE first_name LIKE '%je%';
-- 3) Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da 
-- tabela staff e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados 
-- repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
(SELECT first_name FROM sakila.actor ORDER BY first_name DESC LIMIT 5) 
UNION
(SELECT first_name FROM sakila.staff LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 14)
ORDER BY first_name;
-- 4) Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do 
-- banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 
-- resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
(SELECT first_name, last_name FROM sakila.actor) 
UNION
(SELECT first_name, last_name FROM sakila.customer)
ORDER BY first_name, last_name
LIMIT 15 OFFSET 45;

-- EXISTS
-- 1) Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não 
-- foram emprestados.
SELECT Id, Title FROM hotel.Books AS B
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE B.Id = Books_Lent.book_id
);
-- 2) Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente 
-- emprestados e que contêm a palavra "lost" no título.
SELECT * FROM hotel.Books AS B;
SELECT Id, Title FROM hotel.Books AS B
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE B.Id = Books_Lent.book_id
)
HAVING B.Title LIKE '%lost%';
-- 3) Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram 
-- um carro.
SELECT * FROM hotel.Customers AS C
WHERE NOT EXISTS(
SELECT * FROM hotel.CarSales
WHERE C.CustomerID = CarSales.CustomerID
);
-- 4) Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o 
-- nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT 
	Cust.Name, Car.Name 
FROM
	hotel.Cars AS Car
		INNER JOIN
	hotel.Customers AS Cust
WHERE
	EXISTS(
		SELECT * FROM hotel.CarSales
		WHERE CustomerID = Cust.CustomerID
			AND carID = Car.ID);
