// Accedemos al DOM del documento y agregar la funcion que permite agregar los datos
document.addEventListener("DOMContentLoaded", function() {
    // En una constante seleccionamos el header del documentos
    const header = document.querySelector("header");

    // Creamos una etiqueta nav en el documento
    let nav = document.createElement("nav");

    // Agregarle el contenido al nav
    nav.innerHTML = `
        <div class="contenedor-logo">
            <a href="../index.html" id="enlace-logo">
                <img src="../img/pokemon-logo.png" alt="Logo Pokemon">
                <h1>Pokémon</h1>
            </a>
        </div>
        <ul>
            <li><a href="../html/primera_generacion.html">1a Gen</a></li>
            <li><a href="../html/segunda_generacion.html">2a Gen</a></li>
            <li><a href="../html/tercera_generacion.html">3a Gen</a></li>
            <li><a href="../html/cuarta_generacion.html">4a Gen</a></li>
            <li><a href="../html/quinta_generacion.html">5a Gen</a></li>
            <li><a href="../html/sexta_generacion.html">6a Gen</a></li>
            <li><a href="../html/septima_generacion.html">7a Gen</a></li>
            <li><a href="../html/octava_generacion.html">8a Gen</a></li>
            <li><a href="../html/novena_generacion.html">9a Gen</a></li>
        </ul>
    `;
    // Agregar el nav al header
    header.appendChild(nav);

    // En una constante obtenemos la ruta de pagina actual
    const paginaActual = window.location.pathname.split("/").pop();
    // En una constante seleccionamos los enlace dentro de la etiqueta nav
    const enlaces = nav.querySelectorAll("a");
    
    // Iteramos cada unos de los enlaces
    enlaces.forEach(enlace => {
        const dirEnlace = enlace.getAttribute("href").split("/").pop();
        // Si el href del enlace es la ruta de la pagina actual
        if (dirEnlace === paginaActual) {
            // Agregamos el estilo textDecoration = "underline" al enlace
            enlace.style.textDecoration = "underline";
        }
    });
});