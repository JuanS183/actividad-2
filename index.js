const usuario = {
  nombre: "Juan Pérez",
  email: "juan.perez@example.com",
  telefono: "123-456-7890",
  direccion: "Calle 123, Ciudad",
  categoria: "Desarrollador",
  proyecto: "Proyecto A"
};

const cargos = [
  { categoria: "Desarrollo", nombre: "Líder de equipo" },
  { categoria: "Diseño", nombre: "Diseñador UI/UX" }
];

const habitos = [
  { categoria: "Desarrollo", habito: "Revisión de código" },
  { categoria: "Diseño", habito: "Creación de wireframes" }
];

const actividades = [
  { actividad: "Reunión", nombre: "Reunión de planificación", categoria: "Proyecto A" },
  { actividad: "Desarrollo", nombre: "Implementación de funcionalidad", categoria: "Proyecto A" }
];

// Función para mostrar los datos del usuario
function mostrarDatosUsuario() {
  document.getElementById("nombre").textContent = usuario.nombre;
  document.getElementById("email").textContent = usuario.email;
  document.getElementById("telefono").textContent = usuario.telefono;
  document.getElementById("direccion").textContent = usuario.direccion;
  document.getElementById("categoria").textContent = usuario.categoria;
  document.getElementById("proyecto").textContent = usuario.proyecto;
}

// Función para mostrar los cargos
function mostrarCargos() {
  const listaCargos = document.getElementById("listaCargos");
  cargos.forEach(cargo => {
      const li = document.createElement("li");
      li.textContent = `Categoría: ${cargo.categoria}, Nombre: ${cargo.nombre}`;
      listaCargos.appendChild(li);
  });
}

// Función para mostrar los hábitos
function mostrarHabitos() {
  const listaHabitos = document.getElementById("listaHabitos");
  habitos.forEach(habito => {
      const li = document.createElement("li");
      li.textContent = `Categoría: ${habito.categoria}, Hábito: ${habito.habito}`;
      listaHabitos.appendChild(li);
  });
}

// Función para mostrar las actividades
function mostrarActividades() {
  const listaActividades = document.getElementById("listaActividades");
  actividades.forEach(actividad => {
      const li = document.createElement("li");
      li.textContent = `Actividad: ${actividad.actividad}, Nombre: ${actividad.nombre}, Categoría: ${actividad.categoria}`;
      listaActividades.appendChild(li);
  });
}

// Llamar a las funciones para mostrar los datos
mostrarDatosUsuario();
mostrarCargos();
mostrarHabitos();
mostrarActividades();