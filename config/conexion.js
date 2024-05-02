const mysql = require('mysql');

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2003',
    database: 'datos'
});
  
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }  
    console.log('La conexión a la base de datos funciona correctamente');
});

module.exports = connection;
