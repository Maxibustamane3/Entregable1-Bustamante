const listaInvitados = [];

function agregarInvitado() {
    let nombreInvitado = prompt("Ingresar nombre del invitado o escribe 'salir' para terminar la lista");

    if (nombreInvitado === "salir") {
        return false;
    }

    if (nombreInvitado === "") {
        alert("No ingresaste un nombre válido.");
        return true;
    }

    let generoInvitado = prompt("Ingresar el género del invitado (Hombre o Mujer)").toLowerCase();

    if (generoInvitado !== "hombre" && generoInvitado !== "mujer") {
        alert("Por favor, ingresa 'Hombre' o 'Mujer'.");
        return true;
    }

    listaInvitados.push(` ${nombreInvitado} y es ${generoInvitado}`);
    alert("Invitado agregado con éxito.");
    return true;
}


while (agregarInvitado());

alert("LOS INVITADOS SON:" + listaInvitados.join("\n"));






