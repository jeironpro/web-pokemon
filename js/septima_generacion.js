/* 
    Esta api se consume de manera local por lo que los datos no se muestran si se usa en otra maquina.
    Las imagenes tampoco se mostraran.
*/
const urlApi = "http://127.0.0.1:8000/pokemones";

async function cargarDatos() {
    const respuesta = await fetch(urlApi);
    const datos = await respuesta.json();
    
    // Seleccionar el contenedor de las cartas por su clase
    const contenedorCartas = document.querySelector(".contenedor-cartas");

    // Hacer un for para iterar el numero de cartas a mostrar
    for (let i = 721; i < 809; i++) {
        // Obtener el id de la carta a partir del valor inicial de i+1
        let id = String(i+1).padStart(4, '0');
        // Obtener el nombre de los pokémons en la lista nombresPokemon en el indice de i
        let nombrePokemon = datos[i].nombre;
        // Formatear el nombre del pokemon en caso de que contenga un espacio
        let nombreFormateado = nombrePokemon.replace(/_/g, " ");

        // Si el nombre termina en -f 
        if (nombreFormateado.endsWith('-f')) {
            // Cambiar el nombre a nombre + ♀
            nombreFormateado = nombreFormateado.slice(0, -2) + "♀";
        }
        // Si el nombre termina en -m 
        if (nombreFormateado.endsWith("-m")) {
            // Cambiar el nombre a nombre + ♂
            nombreFormateado = nombreFormateado.slice(0, -2) + "♂";
        }
        // Si el nombre termina en hd
        if (nombreFormateado.endsWith('hd')) {  
            // Cambiar el nombre a nombre + 'd 
            nombreFormateado = nombreFormateado.slice(0, -1) + "'" + 'd';
        }

        // Obtener el(los) tipo(s) del pokémon en el indice de i
        let tipoPokemon = datos[i].tipos;
        // Obtener las estadisticas del pokémon en el indice de i
        let estadisticaPokemon = datos[i].estadisticas;
        // Obtener la descripción del pokémon en el indice de i
        let descripcionPokemon = datos[i].descripcion;
    
        // Crear el div de la carta
        let carta = document.createElement('div');
        // Agregarle la clase carta al div
        carta.classList.add("carta");
        // Agregarle el id 'id' al div
        carta.id = id;
        // Agregarle el background image a la carta segun el nombre del pokémon
        carta.style.backgroundImage = `url('../img/septima_generacion/${nombrePokemon}.png')`;

        // Declarar el tipo para el HTML vacio
        let tiposHtml = '';
        // Iterar el(los) tipo(s) del pokémon
        tipoPokemon.forEach(tipo => {
            // Agregar el(los) tipo(s) del pokémon a la varible tipoHtml
            tiposHtml += `<span class="tipo">${tipo.nombre}</span>`;
        });

        // Agregarle el contenido a la carta
        carta.innerHTML = `
            <div class="cabecera"">
                <span class="identificador">N.º&nbsp;${id}</span>
                <h3 class="nombre">${nombreFormateado}</h3>
                ${tiposHtml}
            </div>
            <div class="cuerpo">
                <p class="descripcion">${descripcionPokemon}</p>
            </div>
            <div class="estadisticas">
                <div class="estadistica ps">
                    <span>PS</span>
                    <span>${'★'.repeat(estadisticaPokemon.punto_salud)}</span>
                    <span>${estadisticaPokemon.punto_salud}</span>
                </div>
                <div class="estadistica ataque">
                    <span>Ataque</span>
                    <span>${'★'.repeat(estadisticaPokemon.ataque)}</span>
                    <span>${estadisticaPokemon.ataque}</span>
                </div>
                <div class="estadistica defensa">
                    <span>Defensa</span>
                    <span>${'★'.repeat(estadisticaPokemon.defensa)}</span>
                    <span>${estadisticaPokemon.defensa}</span>
                </div>
                <div class="estadistica at-esp">
                    <span>At. Esp</span>
                    <span>${'★'.repeat(estadisticaPokemon.ataque_especial)}</span>
                    <span>${estadisticaPokemon.ataque_especial}</span>
                </div>
                <div class="estadistica def-esp">
                    <span>Def. Esp</span>
                    <span>${'★'.repeat(estadisticaPokemon.defensa_especial)}</span>
                    <span>${estadisticaPokemon.defensa_especial}</span>
                </div>
                <div class="estadistica velocidad">
                    <span>Velocidad</span>
                    <span>${'★'.repeat(estadisticaPokemon.velocidad)}</span>
                    <span>${estadisticaPokemon.velocidad}</span>
                </div>
            </div>
        `;
        // Agregar las cartas al contenedor
        contenedorCartas.appendChild(carta)
    }
}
cargarDatos();