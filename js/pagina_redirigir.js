// Accedemos al DOM del documento (VENTANA) y agregar la funcion que permite agregar los datos
window.addEventListener("DOMContentLoaded", function() {
    // en una constante guardar la url de la pagina desde donde se redirigio a la pagina actual
    const paginaRedirigir = document.referrer;

    // Si se guarda una pagina para redirigir
    if (paginaRedirigir) {
        // Agregar la función setInterval que redirecciona a la pagina guardada en la constante paginaRedirigir, en un intervalo de 5 segundos
        setInterval(() => {
            window.location.href = paginaRedirigir;
        }, 5000);
    // De lo contrario
    } else {
        // Agregar la función setInterval que redirecciona por defecto a ./HTML/primera_generacion.html, en un intervalo de 5 segundos
        setInterval(() => {
            window.location.href = "./html/primera_generacion.html";
        }, 5000);
    }
});