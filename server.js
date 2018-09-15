var express = require('express')
var http = require('http')
var app = express()
let models = require('./models');
let Sequelize = require('sequelize');
const nodemailer = require('nodemailer');
const op = Sequelize.Op;


app.get('/', (req, res) => {
  res.status(200).send("Welcome to API REST")
})

//retorna la tabla de roles
app.get('/Roles',(req,res) => {

  models.Rol.findAll().then(users => {
    console.log("entra en la direccion Roles")
    console.log(JSON.stringify(users));
    res.status(200).send(users);
  });

});

//retorna la tabla de las Programaciones docentes
app.get('/ProgramacionesDocente',(req,res) => {

  models.ProgramacionDocente.findAll().then(ProgramacionDocente => {
    console.log("entra en la direccion ProgramacionDocente")
    console.log(JSON.stringify(ProgramacionDocente));
    res.status(200).send(ProgramacionDocente);
  });

});

//retorna la tabla de Profesores
app.get('/Profesores',(req,res) => {

  models.Profesor.findAll().then(Profesores => {
    console.log("entra en la direccion Profesores")
    console.log(JSON.stringify(Profesores));
    res.status(200).send(Profesores);
  });

});

//retorna la tabla de Personas
app.get('/Personas',(req,res) => {

  models.Persona.findAll().then(Personas => {
    console.log("entra en la direccion Personas")
    console.log(JSON.stringify(Personas));
    res.status(200).send(Personas);
  });

});

//retorna la tabla de PlanDeEstudios
app.get('/PlanEstudios',(req,res) => {

  models.PlanEstudio.findAll().then(PlanDeEstudios => {
    console.log("entra en la direccion Personas")
    console.log(JSON.stringify(PlanDeEstudios));
    res.status(200).send(PlanDeEstudios);
  });

});

//retorna la tabla de Itinerarios
app.get('/Itinerarios',(req,res) => {

  models.Itinerario.findAll().then(Itinerarios => {
    console.log("entra en la direccion Itinerarios")
    console.log(JSON.stringify(Itinerarios));
    res.status(200).send(Itinerarios);
  });

});

//retorna la tabla de Horarios
app.get('/Horarios',(req,res) => {

  models.Horario.findAll().then(Horarios => {
    console.log("entra en la direccion Horarios")
    console.log(JSON.stringify(Horarios));
    res.status(200).send(Horarios);
  });

});

//retorna la tabla de Historial
app.get('/Historial',(req,res) => {

  models.Historial.findAll().then(Historial => {
    console.log("entra en la direccion Historial")
    console.log(JSON.stringify(Historial));
    res.status(200).send(Historial);
  });

});
 
//retorna la tabla de Grupos
app.get('/Grupos',(req,res) => {

  models.Grupo.findAll().then(Grupos => {
    console.log("entra en la direccion Historial")
    console.log(JSON.stringify(Grupos));
    res.status(200).send(Grupos);
  });

});

//retorna la tabla de Examens
app.get('/Examenes',(req,res) => {
  
  models.Examen.findAll().then(Examenes => {
    console.log("entra en la direccion Examenes")
    console.log(JSON.stringify(Examenes));
    res.status(200).send(Examenes);
  });

});

//retorna la tabla de DireccionDepartamentos
//fallos
app.get('/DireccionDepartamentos',(req,res) => {

  models.DireccionDepartamento.findAll().then(DireccionDepartamentos => {
    console.log("entra en la direccion DireccionDepartamentos")
    console.log(JSON.stringify(DireccionDepartamentos));
    res.status(200).send(DireccionDepartamentos);
  });

});

//retorna la tabla de Departamentos
app.get('/Departamentos',(req,res) => {

  models.Departamento.findAll().then(Departamentos => {
    console.log("entra en la direccion Departamentos")
    console.log(JSON.stringify(Departamentos));
    res.status(200).send(Departamentos);
  });

});

//retorna la tabla de Asignaturas
app.get('/Asignaturas',(req,res) => {

  models.Asignatura.findAll().then(Asignaturas => {
    console.log("entra en la direccion Asignaturas")
    console.log(JSON.stringify(Asignaturas));
    res.status(200).send(Asignaturas);
  });

});

//retorna la tabla de Asignaciones de profesores
app.get('/AsignacionProfesores',(req,res) => {
  //Da problemas
  models.AsignacionProfesor.findAll().then(AsignacionProfesores => {
    console.log("entra en la direccion AsignacionProfesores")
    console.log(JSON.stringify(AsignacionProfesores));
    res.status(200).send(AsignacionProfesores);
  });
});


http.createServer(app).listen(8001, () => {
  console.log('Server started at http://localhost:8001');
});