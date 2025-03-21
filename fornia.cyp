
CREATE (:Usuario {id_us: "Gustavo", nombre: "Gustavo Alberto", email: "gustavoalberto@uvm.edu.ve"});
CREATE (:Usuario {id_us: "Jose", nombre: "Jose Perdomo", email: "jperdomo@uvm.edu.ve"});
CREATE (:Usuario {id_us: "Sezar", nombre: "Sezar Cánovas", email: "sezar248@uvm.edu.ve"});
CREATE (:Usuario {id_us: "ViniJr", nombre: "Vinicius Jr", email: "vinicius_halamadrid@uvm.edu.ve"});
CREATE (:Usuario {id_us: "Glorimar", nombre: "Glorimar Maldonado", email: "glori.maldonado@uvm.edu.ve"});


CREATE (:Categoria {id_cate: "Labor", nombre: "Labor.", descripcion: "El usuario tiene un trabajo."});
CREATE (:Categoria {id_cate: "Deporte", nombre: "Deportes.", descripcion: "El usuario practica ejercicio."});
CREATE (:Categoria {id_cate: "Estudio", nombre: "Estudio.", descripcion: "El usuario tiene estudios." });


CREATE (:Habito {id_habit: "Ejercicio", nombre: "Ejercicio.", descripcion: "El usuario hace ejercicio de forma constante"});
CREATE (:Habito {id_habit: "Lectura", nombre: "Lectura.", descripcion: "El usuario le apasiona leer o lee por sus estudios"});
CREATE (:Habito {id_habit: "Trabajo", nombre: "Trabajo.", descripcion: "El usuario tiene un trabajo de asistente"});
CREATE (:Habito {id_habit: "Colaboracion", nombre: "Colaboracion.", descripcion: "El usuario comparte con sus compañeros"});


CREATE (:Actividad {id_actividad: "ReunionDeTrabajo", nombre: "Reunion con el supervisor", id_cate: "Labor"});
CREATE (:Actividad {id_actividad: "IrAlGym", nombre: "Hacer ejercicio", id_cate: "Deporte"});
CREATE (:Actividad {id_actividad: "Leer", nombre: "Leer el libro de Clean Code", id_cate: "Estudio"});
CREATE (:Actividad {id_actividad: "Estudiar", nombre: "Estudiar para los examenes", id_cate: "Estudio"});
CREATE (:Actividad {id_actividad: "HacerLosInformes", nombre: "Preparar informes semanales", id_cate: "Labor"});
CREATE (:Actividad {id_actividad: "EntrenarFut", nombre: "Ir a entrenamiento de futbol", id_cate: "Deporte"});
CREATE (:Actividad {id_actividad: "ReunionDeEstudio", nombre: "Reunion con el grupo de estudio", id_cate: "Estudio"});
CREATE (:Actividad {id_actividad: "TallerUVM", nombre: "Asistir a talleres de la universidad", id_cate: "Estudio"});

CREATE (:Proyecto {id_proyecto: "DesarrolloBaseDatos", descripcion: "Base de Datos"});
CREATE (:Proyecto {id_proyecto: "Simulacion", descripcion: "Simulacion de Protoboard"});
CREATE (:Proyecto {id_proyecto: "GeoGebra", descripcion: "GeoGebra."});

///Relaciones


MATCH (u1:Usuario {id_us: "Gustavo"}), (c1:Categoria {id_cate: "Estudio"}) 
WITH u1, c1 
CREATE (u1)-[:POSEE]->(c1);

MATCH (u2:Usuario {id_us: "Jose"}), (c2:Categoria {id_cate: "Estudio"}) 
WITH u2, c2 
CREATE (u2)-[:POSEE]->(c2);

MATCH (u3:Usuario {id_us: "Sezar"}), (c3:Categoria {id_cate: "Estudio"}) 
WITH u3, c3 
CREATE (u3)-[:POSEE]->(c3);

MATCH (u4:Usuario {id_us: "ViniJr"}), (c4:Categoria {id_cate: "Estudio"}) 
WITH u4, c4 
CREATE (u4)-[:POSEE]->(c4);

MATCH (u5:Usuario {id_us: "Glorimar"}), (c5:Categoria {id_cate: "Estudio"}) 
WITH u5, c5 
CREATE (u5)-[:POSEE]->(c5);

MATCH (u6:Usuario {id_us: "ViniJr"}), (c6:Categoria {id_cate: "Deporte"}) 
WITH u6, c6 
CREATE (u6)-[:PRACTICA]->(c6);

MATCH (u7:Usuario {id_us: "Glorimar"}), (c7:Categoria {id_cate: "Labor"}) 
WITH u7, c7 
CREATE (u7)-[:POSEE]->(c7);

MATCH (c8:Categoria {id_cate: "Labor"}), (a1:Actividad {id_actividad: "ReunionDeTrabajo"}) 
WITH c8, a1 
CREATE (c8)-[:CONTIENE]->(a1);

MATCH (c9:Categoria {id_cate: "Labor"}), (a2:Actividad {id_actividad: "HacerLosInformes"}) 
WITH c9, a2 
CREATE (c9)-[:CONTIENE]->(a2);

MATCH (c10:Categoria {id_cate: "Deporte"}), (a3:Actividad {id_actividad: "IrAlGym"}) 
WITH c10, a3 
CREATE (c10)-[:CONTIENE]->(a3);

MATCH (c11:Categoria {id_cate: "Deporte"}), (a4:Actividad {id_actividad: "EntrenarFut"}) 
WITH c11, a4 
CREATE (c11)-[:CONTIENE]->(a4);

MATCH (c12:Categoria {id_cate: "Estudio"}), (a5:Actividad {id_actividad: "Leer"}) 
WITH c12, a5 
CREATE (c12)-[:CONTIENE]->(a5);

MATCH (c13:Categoria {id_cate: "Estudio"}), (a6:Actividad {id_actividad: "Estudiar"}) 
WITH c13, a6 
CREATE (c13)-[:CONTIENE]->(a6);

MATCH (c14:Categoria {id_cate: "Estudio"}), (a7:Actividad {id_actividad: "ReunionDeEstudio"}) 
WITH c14, a7 
CREATE (c14)-[:CONTIENE]->(a7);

MATCH (c15:Categoria {id_cate: "Estudio"}), (a8:Actividad {id_actividad: "TallerUVM"}) 
WITH c15, a8 
CREATE (c15)-[:CONTIENE]->(a8);

MATCH (h1:Habito {id_habit: "Ejercicio"}), (a9:Actividad {id_actividad: "IrAlGym"}) 
WITH h1, a9 
CREATE (h1)-[:FORMA_PARTE_DE]->(a9);

MATCH (h2:Habito {id_habit: "Ejercicio"}), (a10:Actividad {id_actividad: "EntrenarFut"}) 
WITH h2, a10 
CREATE (h2)-[:FORMA_PARTE_DE]->(a10);

MATCH (h3:Habito {id_habit: "Lectura"}), (a11:Actividad {id_actividad: "Leer"}) 
WITH h3, a11 
CREATE (h3)-[:FORMA_PARTE_DE]->(a11);

MATCH (h4:Habito {id_habit: "Lectura"}), (a12:Actividad {id_actividad: "HacerLosInformes"}) 
WITH h4, a12 
CREATE (h4)-[:FORMA_PARTE_DE]->(a12);

MATCH (h5:Habito {id_habit: "Lectura"}), (a13:Actividad {id_actividad: "Estudiar"}) 
WITH h5, a13 
CREATE (h5)-[:FORMA_PARTE_DE]->(a13);

MATCH (h6:Habito {id_habit: "Trabajo"}), (a14:Actividad {id_actividad: "ReunionDeTrabajo"}) 
WITH h6, a14 
CREATE (h6)-[:FORMA_PARTE_DE]->(a14);

MATCH (h7:Habito {id_habit: "Trabajo"}), (a15:Actividad {id_actividad: "HacerLosInformes"}) 
WITH h7, a15 
CREATE (h7)-[:FORMA_PARTE_DE]->(a15);

MATCH (h8:Habito {id_habit: "Colaboracion"}), (a16:Actividad {id_actividad: "ReunionDeEstudio"}) 
WITH h8, a16 
CREATE (h8)-[:FORMA_PARTE_DE]->(a16);

MATCH (h9:Habito {id_habit: "Colaboracion"}), (a17:Actividad {id_actividad: "TallerUVM"}) 
WITH h9, a17 
CREATE (h9)-[:FORMA_PARTE_DE]->(a17);

MATCH (p1:Proyecto {id_proyecto: "DesarrolloBaseDatos"}), (a18:Actividad {id_actividad: "Leer"}) 
WITH p1, a18 
CREATE (p1)-[:ES_PARTE_DE]->(a18);

MATCH (p2:Proyecto {id_proyecto: "DesarrolloBaseDatos"}), (a19:Actividad {id_actividad: "Estudiar"}) 
WITH p2, a19 
CREATE (p2)-[:ES_PARTE_DE]->(a19);

MATCH (p3:Proyecto {id_proyecto: "DesarrolloBaseDatos"}), (a20:Actividad {id_actividad: "ReunionDeEstudio"}) 
WITH p3, a20 
CREATE (p3)-[:ES_PARTE_DE]->(a20);

MATCH (p4:Proyecto {id_proyecto: "Simulacion"}), (a21:Actividad {id_actividad: "Leer"}) 
WITH p4, a21 
CREATE (p4)-[:ES_PARTE_DE]->(a21);

MATCH (p5:Proyecto {id_proyecto: "Simulacion"}), (a22:Actividad {id_actividad: "Estudiar"}) 
WITH p5, a22 
CREATE (p5)-[:ES_PARTE_DE]->(a22);

MATCH (p6:Proyecto {id_proyecto: "Simulacion"}), (a23:Actividad {id_actividad: "ReunionDeEstudio"}) 
WITH p6, a23 
CREATE (p6)-[:ES_PARTE_DE]->(a23);

MATCH (p7:Proyecto {id_proyecto: "GeoGebra"}), (a24:Actividad {id_actividad: "Leer"}) 
WITH p7, a24 
CREATE (p7)-[:ES_PARTE_DE]->(a24);

MATCH (p8:Proyecto {id_proyecto: "GeoGebra"}), (a25:Actividad {id_actividad: "Estudiar"}) 
WITH p8, a25 
CREATE (p8)-[:ES_PARTE_DE]->(a25);

MATCH (p9:Proyecto {id_proyecto: "GeoGebra"}), (a26:Actividad {id_actividad: "ReunionDeEstudio"}) 
WITH p9, a26 
CREATE (p9)-[:ES_PARTE_DE]->(a26);




///Consultas




CREATE (:Usuario {id_us: "Usuario", nombre: "Nombre de Usuario", email: "ejemplo@uvm.edu.ve"});


MATCH (u:Usuario {id_us: "Usuario"}), (c:Categoria {id_cate: "Categoria"})
CREATE (u)-[:POSEE]->(c);


MATCH (u:Usuario {id_us: "Usuario"})-[:POSEE]->(c:Categoria)
RETURN c;


MATCH (c:Categoria {id_cate: "Categoria"})-[:CONTIENE]->(a:Actividad)
RETURN a;

CREATE (:Habito {id_habit: "Habito", nombre: "NombreHabito", descripcion: "descripcion"});



