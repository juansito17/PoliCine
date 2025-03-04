function login() {
    window.location.href = "/html/login.html";
}

function cambiarPelicula(nombre, duraccion) {
    document.getElementById("titulo").innerHTML = nombre;
    document.getElementById("duraccion").innerHTML = duraccion;
    document.getElementById("imagen").src = "/images/" + nombre + ".jpg";
}