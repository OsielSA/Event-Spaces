CREATE TABLE Event_Halls(
	id_hall SERIAL PRIMARY KEY,
	hall_name VARCHAR(100),
	manager_name VARCHAR(100),
	hall_address VARCHAR(100),
	hall_phone VARCHAR(100),
	email VARCHAR(100),
	facebook VARCHAR(100),l
	instagram VARCHAR(100),
	registration_date TIMESTAMP
);

insert into Event_Halls values
(1,'Hacienda las Palmas', 'Tio Alejandro', 'direccion 1', '65214525487', 'haciendalaspalmas1@gmail.com', null, null, NOW())

select * from Event_Halls;

--drop table Reservations;
CREATE TABLE Reservations(
	id_reservation SERIAL PRIMARY KEY,
	id_hall INT,
	id_package INT,
	code_reservation VARCHAR(100),
	customer_name VARCHAR(100),
	reservation_status int,
	reservation_date DATE,
	registration_date TIMESTAMP
);

CREATE TABLE Packages_Pricing(
	id_package SERIAL PRIMARY KEY,
	id_hall INT,
	package_name VARCHAR(100),
	package_description VARCHAR(100), 
	price NUMERIC(10, 2),
	max_capacity INT --LIMITE DE PERSONAS
)

insert into Packages_Pricing values
(1, 1, 'Paquete 1', '', 12000, 150)


select * from Packages_Pricing
ALTER TABLE Reservations
ALTER COLUMN reservation_date TYPE DATE;

CREATE TABLE Cat_Reservation_Status(
	id_status INT PRIMARY KEY,
	description VARCHAR(30)
)
INSERT INTO Cat_Reservation_Status VALUES
(1, 'PENDING'),
(2, 'CONFIRMED'),
(3, 'CANCELLED')

insert into Reservations values
(1,1, 'CV6G4', 'Osiel Sainz', false, NOW(), NOW())




select * from Event_Halls;
select * from Reservations where id_hall = 1 and reservation_date = '2024-03-26' and reservation_status != 3;
delete from Reservations where id_hall = 1 and reservation_date = '2024-03-26';

