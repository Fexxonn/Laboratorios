# Creación de Tablas y Consultas en SQL y MongoDB

## Paso 1: Creación de Tablas en SQL

### Crear la tabla `Estudiantes`

```sql
CREATE TABLE Estudiantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    edad INT,
    ciudad VARCHAR(50)
);


INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES
('Juan', 20, 'Bogotá'),
('Ana', 22, 'Medellín'),
('Luis', 19, 'Cali');

SELECT * FROM Estudiantes;

SELECT * FROM Estudiantes WHERE ciudad = 'Bogotá';

SELECT * FROM Estudiantes WHERE edad > 20;

```

## Actividad 3: Uso de Bases de Datos No Relacionales (NoSQL)

```

// En la consola de MongoDB o MongoDB Shell:
db.Estudiantes.insertMany([
    { "nombre": "Juan", "edad": 20, "ciudad": "Bogotá" },
    { "nombre": "Ana", "edad": 22, "ciudad": "Medellín" },
    { "nombre": "Luis", "edad": 19, "ciudad": "Cali" }
]);

db.Estudiantes.find();

db.Estudiantes.find({ "ciudad": "Bogotá" });

db.Estudiantes.find({ "edad": { $gt: 20 } });

```
