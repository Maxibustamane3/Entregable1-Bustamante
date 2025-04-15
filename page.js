const lista = document.getElementById("lista");
const formulario = document.getElementById("formularioInvitado");
const inputNombre = document.getElementById("nombre");
const selectGenero = document.getElementById("genero");

let listaInvitados = JSON.parse(localStorage.getItem("invitados")) || [];

function Listacumpleaños() {
    lista.innerHTML = "";
    listaInvitados.forEach((invitado, index) => {
        const li = document.createElement("li");
        li.textContent = `${invitado.nombre} (${invitado.genero})`;
        lista.appendChild(li);
    });
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = inputNombre.value.trim();
    const genero = selectGenero.value;

    if (!nombre || !genero) {
        alert("Por favor, completá todos los campos.");
        return;
    }

    const nuevoInvitado = { nombre, genero };
    listaInvitados.push(nuevoInvitado);

    localStorage.setItem("invitados", JSON.stringify(listaInvitados));
    Listacumpleaños();

    formulario.reset();
});

Listacumpleaños();


