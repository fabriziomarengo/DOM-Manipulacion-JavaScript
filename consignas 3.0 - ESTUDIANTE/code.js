/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

  /* --------------- PUNTO 1 --------------- */
function obtenerDatosDelUsuario() {
  
  let nombre;
  do {
    nombre = prompt("Ingrese su nombre:");
  } while (nombre == null || nombre === '' || nombre.length < 3);
  datosPersona.nombre = nombre;

  let edad;
  do {
    edad = parseInt(prompt("Ingrese su edad:"));
  } while (isNaN(edad) || edad <= 0);
  datosPersona.edad = edad;

  let ciudad;
  do {
    ciudad = prompt("Ingrese su ciudad:");
  } while (ciudad == null || ciudad === '');
  datosPersona.ciudad = ciudad;

  let interesPorJs;
  do {
    interesPorJs = prompt("¿Te interesa JavaScript? (Si/No)").toLowerCase();
  } while (interesPorJs !== 'si' && interesPorJs !== 'no');
  datosPersona.interesPorJs = interesPorJs;
}

  /* --------------- PUNTO 2 --------------- */
function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();
  document.getElementById('nombre').innerText = datosPersona.nombre;
  document.getElementById('edad').innerText = datosPersona.edad;
  document.getElementById('ciudad').innerText = datosPersona.ciudad;
  document.getElementById('javascript').innerText = datosPersona.interesPorJs;
}

/* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
function recorrerListadoYRenderizarTarjetas() {
  const materiasList = document.getElementById('fila');
  listado.forEach(materia => {
    const card = document.createElement('div');
    card.classList.add('caja'); 
    card.innerHTML = `
      <img src="${materia.imgUrl}" alt="${materia.lenguajes}" />
      <p class="lenguajes">${materia.lenguajes}</p>
      <p class="bimestre">${materia.bimestre}</p>
    `;
    materiasList.appendChild(card);
  });
}

/* --------------------- PUNTO 4 --------------------- */
function alternarColorTema() {

  const sitio = document.getElementById('sitio');
  sitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

const sobreMi = document.getElementById('sobre-mi');
document.addEventListener('keydown', function(event) {
  if (event.key === 'f' || event.key === 'F') {
    sobreMi.classList.remove('oculto');
  }
});
