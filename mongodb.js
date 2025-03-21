//usuarios

[
   {
    "usuario": "Gustavo",
    "nombre": "Gustavo Alberto",
    "email": "gustavoalberto@uvm.edu.ve",
    "telefono": "0412-1728092",
    "direccion": "Plata III",
    "categoria": "Estudio",
    "proyecto": ["Matematica", "Electricidad", "Base de datos"]
  },
  {
    "usuario": "Jose",
    "nombre": "Jose Perdomo",
    "email": "jperdomo@uvm.edu.ve",
    "telefono": "0414-7536916",
    "direccion": "Escuque",
    "categoria": "Estudio",
    "proyecto": ["Matematica", "Electricidad", "Base de datos"]
  },
  {
    "usuario": "Sezar",
    "nombre": "Sezar Cánovas",
    "email": "sezar248@uvm.edu.ve",
    "telefono": "0414-9752689",
    "direccion": "La Puerta",
    "categoria": "Estudio",
    "proyecto": ["Matematica", "Electricidad", "Base de datos"]
  },
  {
    "usuario": "ViniJr",
    "nombre": "Vinicius Jr",
    "email": "vinicius_halamadrid@uvm.edu.ve",
    "telefono": "+34913984300",
    "direccion": "Madrid",
    "categoria": ["Estudio", "Deporte"]
  },
  {
    "usuario": "Glorimar",
    "nombre": "Glorimar Maldonado",
    "email": "glori.maldonado@uvm.edu.ve",
    "telefono": "0424-7387023",
    "direccion": "Carvajal",
    "categoria": ["Estudio", "Trabajo"],
    "proyecto": "Base de datos"
  }
]

//categorias

[
  {
   "categoria": "Trabajo",
   "nombre": "Asistente de oficina"
 },
 {
   "categoria": "Deporte",
   "nombre": "Futbolista"
 },
 {
   "categoria": "Estudio",
   "nombre": "Estudiante de la UVM"
 }
]

//habito

[
  {
   "habito": "Ejercicio",
   "categoria": "Deporte"
 },
 {
   "habito": "Lectura",
   "categoria": "Estudio"
 },
 {
   "habito": "Trabajar",
   "categoria": "Trabajo"
 },
 {
   "habito": "Colaboracion",
   "categoria": "Estudio"
 },
 {
   "habito": "Hacer tareas",
   "categoria": ["Trabajo", "Estudio"]
 }
]

//actividades

[
  {
   "actividad": "Reunion",
   "nombre": "Reunion de Trabajo",
   "categoria": "Trabajo"
 },
 {
  "actividad": "Gym",
  "nombre": "Ir al Gym",
  "categoria": "Deporte"
},
{
  "actividad": "Leer",
  "nombre": "Leer un libro sobre el Clean Code",
  "categoria": "Estudio"
},
{
  "actividad": "Estudiar",
  "nombre": "Estudiar para los examenes",
  "categoria": "Estudio"
},
{
  "actividad": "Informes",
  "nombre": "Hacer los informes semanales",
  "categoria": "Trabajo"
},
{
  "actividad": "Entrenamiento",
  "nombre": "Ir a entrenamiento de futbol",
  "categoria": "Deporte"
},
{
  "actividad": "Reunirse",
  "nombre": "Reunion con el grupo de estudio",
  "categoria": "Estudio"
},
{
  "actividad": "Taller",
  "nombre": "Ir al taller de la UVM",
  "categoria": "Estudio"
}
]

//proyectos

[
  {
   "proyecto": "Matematica",
   "nombre": "Ejercicios en GeoGebra"
 },
 {
   "proyecto": "Electricidad",
   "nombre": "Simulacion de ProtoBoard"
 },
 {
   "proyecto": "Base de datos",
   "nombre": "Desarrollar una base de datos"
 }
]




////consultas

{ "proyecto": "Matematica" }

{ "proyecto": { "$exists": true, "$ne": [] } }

{ "usuario": "Gustavo" }

{ "usuario": "Jose" }

{ "habito": "Lectura" }