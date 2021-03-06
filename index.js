const exp = require('constants');
const express = require('express');
const morgan = require('morgan');
var cors = require('cors');
const { join } = require('path');
const path = require('path');

const port = 3000;
app = express();

app.use(cors());
//donde cargar los archivaldos
app.use(express.static('public'));


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//definición de vistas
app.set('views', path.join(__dirname, '/vistas'));

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




//variables globales
app.use((req, res, next) => {
    next();
})

//rutas 
app.use('/', require('./rutas/inicio')); // index de la pagina
app.use('/', require('./rutas/cursostipo')); //listado de cursos

app.use('/', require('./rutas/curso_cuerda')); //inforación de cursos
app.use('/', require('./rutas/curso_viento')); //inforación de cursos
app.use('/', require('./rutas/curso_percusion')); //inforación de cursos

app.use('/', require('./rutas/agregar_cursos')); //Agregado de cursos
app.use('/', require('./rutas/inscripcion')); // enrolar en curso
app.use('/', require('./rutas/proveedores')); //agregar proveedor
app.use('/', require('./rutas/eresUsuario')); //registro
app.use('/', require('./rutas/login')); //login
app.use('/', require('./rutas/graficado')); //Graficado de cursos por proveedor

app.listen(port, () => {
    console.log('Servidor iniciado', port);
})