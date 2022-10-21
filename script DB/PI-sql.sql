-- CREATE DATABASE PIuno;
USE PIuno;
-- 
-- CREATE TABLE importadoras(
-- importadora_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- importadora_nombre VARCHAR(20),
-- importadora_descripcion VARCHAR(200),
-- importadora_telefono INT,
-- importadora_direccion VARCHAR(40),
-- importadora_correo VARCHAR(40),
-- importadora_nit VARCHAR(25),
-- importadora_red1 VARCHAR(20),
-- importadora_red2 VARCHAR(20)
-- );
-- 
-- CREATE TABLE tipo_cliente(
-- tipo_cliente_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- tipo_cliente_nombre VARCHAR(20)
-- )
-- 
-- CREATE TABLE clientes(
-- cliente_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- cliente_nombre VARCHAR(20),
-- cliente_correo VARCHAR(40),
-- cliente_contraseña VARCHAR(20),
-- cliente_cc VARCHAR(20),
-- cliente_nit VARCHAR(20),
-- 
-- tipo_cliente_id INT,
-- FOREIGN KEY (tipo_cliente_id) REFERENCES tipo_cliente(tipo_cliente_id)
-- );
-- 
-- CREATE TABLE empleado_cargo(
-- empleado_cargo_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- empleado_cargo_nombre VARCHAR(20)
-- )
-- 
-- CREATE TABLE empleado_estado(
-- empleado_estado_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- empleado_estado_nombre VARCHAR(20)
-- )
-- 
-- CREATE TABLE empleados(
-- empleado_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- empleado_nombre VARCHAR(20),
-- empleado_correo VARCHAR(40),
-- empleado_contraseña VARCHAR(20),
-- empleado_cc VARCHAR(20),
-- 
-- empleado_cargo_id INT,
-- FOREIGN KEY (empleado_cargo_id) REFERENCES empleado_cargo(empleado_cargo_id),
-- 
-- empleado_estado_id INT,
-- FOREIGN KEY (empleado_estado_id) REFERENCES empleado_estado(empleado_estado_id)
-- );
-- 
-- CREATE TABLE vehiculos_categoria(
-- vehiculos_categoria_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- vehiculos_categoria_nombre VARCHAR(20)
-- )
-- 
-- CREATE TABLE vehiculos_marca(
-- vehiculos_marca_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- vehiculos_marca_nombre VARCHAR(20)
-- )
-- 
-- CREATE TABLE vehiculos_tipo(
-- vehiculos_tipo_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- vehiculos_tipo_nombre VARCHAR(20)
-- )
-- 
-- CREATE TABLE vehiculos_motor(
-- vehiculos_motor_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- vehiculos_motor_nombre VARCHAR(20)
-- )
-- 
-- CREATE TABLE vehiculos_trasmision(
-- vehiculos_trasmision_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- vehiculos_trasmision_nombre VARCHAR(20)
-- )
-- 
-- CREATE TABLE vehiculos(
-- vehiculo_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- vehiculo_nombre VARCHAR(20),
-- vehiculo_año DATE,
-- vehiculo_cilindraje INT,
-- vehiculo_potencia INT,
-- vehiculo_velocidades INT,
-- vehiculo_puertas INT,
-- vehiculo_cuatroporcuatro INT,
-- vehiculo_garantiaaño DATE,
-- vehiculo_garantiakm INT,
-- vehiculo_tecnologia1 VARCHAR(30),
-- vehiculo_tecnologia2 VARCHAR(30),
-- vehiculo_tecnologia3 VARCHAR(30),
-- vehiculo_tecnologia4 VARCHAR(30),
-- vehiculo_foto1 VARCHAR(200),
-- vehiculo_foto2 VARCHAR(200),
-- vehiculo_foto3 VARCHAR(200),
-- vehiculo_foto4 VARCHAR(200),
-- vehiculo_foto5 VARCHAR(200),
-- vehiculo_video VARCHAR(200),
-- vehiculo_descripcion VARCHAR(300),
-- 
-- vehiculos_categoria_id INT,
-- FOREIGN KEY (vehiculos_categoria_id) REFERENCES vehiculos_categoria(vehiculos_categoria_id),
-- vehiculos_marca_id INT,
-- FOREIGN KEY (vehiculos_marca_id) REFERENCES vehiculos_marca(vehiculos_marca_id),
-- vehiculos_tipo_id INT,
-- FOREIGN KEY (vehiculos_tipo_id) REFERENCES vehiculos_tipo(vehiculos_tipo_id),
-- vehiculos_motor_id INT,
-- FOREIGN KEY (vehiculos_motor_id) REFERENCES vehiculos_motor(vehiculos_motor_id),
-- vehiculos_trasmision_id INT,
-- FOREIGN KEY (vehiculos_trasmision_id) REFERENCES vehiculos_trasmision(vehiculos_trasmision_id)
-- )
-- 
-- CREATE TABLE inventarios(
-- inventario_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- inventario_cantidad INT,
-- inventario_precio INT,
-- inventario_color VARCHAR(20),
-- 
-- vehiculo_id INT,
-- FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(vehiculo_id)
-- )
-- 
-- CREATE TABLE facturas_estado(
-- facturas_estado_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- facturas_estado_nombre VARCHAR(20)
-- )
-- 
-- CREATE TABLE facturas(
-- factura_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- factura_fechainicial  DATE,
-- factura_fechaconfirmacion DATE,
-- factura_valor INT,
-- factura_iva INT,
-- factura_total INT,
-- 
-- cliente_id INT,
-- FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id),
-- empleado_id INT,
-- FOREIGN KEY (empleado_id) REFERENCES empleados(empleado_id),
-- facturas_estado_id INT,
-- FOREIGN KEY (facturas_estado_id) REFERENCES facturas_estado(facturas_estado_id)
-- )
-- 
-- CREATE TABLE ordenes(
-- orden_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- orden_cantidad INT,
-- orden_color VARCHAR(20),
-- 
-- vehiculo_id INT,
-- FOREIGN KEY (vehiculo_id) REFERENCES vehiculos(vehiculo_id),
-- factura_id INT,
-- FOREIGN KEY (factura_id) REFERENCES facturas(factura_id)
-- )

CREATE TABLE contactanos(
correo_electronico VARCHAR(50),
numero_telefono INT,
modelo_autos VARCHAR(50),
modelo_motos VARCHAR(50),
interes_repuestos VARCHAR(50),
interes_compra VARCHAR(50),
interes_testdrive VARCHAR(50),
interes_informacion VARCHAR(50),
ingrese_descripcion VARCHAR(200)
)

-- llenado solo vehiculos

-- INSERT INTO vehiculos_categoria(vehiculos_categoria_nombre)
-- VALUES('automoviles'),
-- ('motocicletas');
-- 
-- INSERT INTO vehiculos_marca(vehiculos_marca_nombre)
-- VALUES('mazda'),
-- ('renault'),
-- ('ford');
-- 
-- INSERT INTO vehiculos_tipo(vehiculos_tipo_nombre)
-- VALUES('campero'),
-- ('automovil'),
-- ('camioneta');
-- 
-- INSERT INTO vehiculos_motor(vehiculos_motor_nombre)
-- VALUES('electrico'),
-- ('hibrido'),
-- ('combustion');
-- 
-- INSERT INTO vehiculos_trasmision(vehiculos_trasmision_nombre)
-- VALUES('manual'),
-- ('automatica'),
-- ('tiptronic');

-- INSERT INTO vehiculos_tipo(vehiculos_tipo_nombre)
-- VALUES('motocicleta');

INSERT INTO vehiculos(vehiculo_nombre,vehiculo_año,vehiculo_cilindraje,vehiculo_potencia,vehiculo_velocidades,vehiculo_puertas,vehiculo_cuatroporcuatro,vehiculo_garantiaaño,vehiculo_garantiakm,vehiculo_tecnologia1,vehiculo_tecnologia2,vehiculo_tecnologia3,vehiculo_tecnologia4,vehiculo_foto1,vehiculo_foto2,vehiculo_foto3,vehiculo_foto4,vehiculo_foto5,vehiculo_video,vehiculo_descripcion,vehiculos_categoria_id,vehiculos_marca_id,vehiculos_tipo_id,vehiculos_motor_id,vehiculos_trasmision_id)
VALUES('CARRO3','2022-10-07',2600,155,5,3,1,'2027-10-07',150000,'asistente de voz','IA','deteccion proximidades','lector de huellas','Grand-vitara-1.png','Grand-vitara-2.png','Grand-vitara-3.png','Grand-vitara-4.png','Grand-vitara-5.png','Grand-vitara-video','El Suzuki Vitara, Suzuk es un automóvil todoterreno producido por el fabricante japonés Suzuki. Posee motor delantero longitudinal, se ofrece con tracción trasera o a las cuatro ruedas, y en versiones de 3 y 5 puertas.',1,2,1,2,3),
('MOTO3','2022-10-07',1200,95,6,0,0,'2027-10-07',150000,'pantalla','IA','RAIN','lector de huellas','Sportster-S-1.png','Sportster-S-2.png','Sportster-S-3.png','Sportster-S-4.png','Sportster-S-5.png','Sportster-S-video','¿Qué tanto co experto? Sin importar que estés iniciando en el mundo de las dos ruedas o cuentes con años de experiencia, es sumamente importante conocer hasta el último de los elementos que componen a este vehículo. Aquí aprenderás todo sobre las partes de la moto ',2,3,4,1,1);

DELETE from vehiculos

-- procedmientos almacenados

DELIMITER //
CREATE OR replace PROCEDURE mostrar ()
 BEGIN
  SELECT v.vehiculo_nombre,v.`vehiculo_año`, v.vehiculo_cilindraje,v.vehiculo_potencia,v.vehiculo_velocidades,v.vehiculo_puertas,v.vehiculo_cuatroporcuatro,v.`vehiculo_garantiaaño`,v.vehiculo_garantiakm,v.vehiculo_tecnologia1,v.vehiculo_tecnologia2,v.vehiculo_tecnologia3,v.vehiculo_tecnologia4,v.vehiculo_foto1,v.vehiculo_foto2,v.vehiculo_foto3,v.vehiculo_foto4,v.vehiculo_foto5,v.vehiculo_video,v.vehiculo_descripcion,vc.vehiculos_categoria_nombre,vm.vehiculos_marca_nombre,vt.vehiculos_tipo_nombre,vmo.vehiculos_motor_nombre,vts.vehiculos_trasmision_nombre
  FROM vehiculos AS v
  INNER JOIN vehiculos_categoria AS vc
  ON v.vehiculos_categoria_id = vc.vehiculos_categoria_id
  INNER JOIN vehiculos_marca AS vm
  ON v.vehiculos_marca_id = vm.vehiculos_marca_id
  INNER JOIN vehiculos_tipo AS vt
  ON v.vehiculos_tipo_id = vt.vehiculos_tipo_id
  INNER JOIN vehiculos_motor AS vmo
  ON v.vehiculos_motor_id = vmo.vehiculos_motor_id
  INNER JOIN vehiculos_trasmision as vts
  ON v.vehiculos_trasmision_id = vts.vehiculos_trasmision_id;
 END;
//
DELIMITER ;

DELIMITER //
CREATE OR replace PROCEDURE contactos ()
 BEGIN
 INSERT INTO contactanos(correo_electronico,numero_telefono,modelo_autos,modelo_motos,interes_repuestos,interes_compra,interes_testdrive,interes_informacion,ingrese_descripcion)
 
 END;
//
DELIMITER ;



CALL mostrar();

-- GRANT INSERT ON UPBnB.clientes TO BASICO@localhost IDENTIFIED BY '12345';
