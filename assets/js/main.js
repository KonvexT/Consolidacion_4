document.getElementById('principales').addEventListener('mouseenter', () => {
    const url = "https://swapi.dev/api/people/";
    const obtenerPersonajesPrincipales = async () => {
        for (let id = 1; id <= 5; id++) {
            try {
                $("#mostrar-datos-api").html("")
                fetch(`${url}${id}/`)
                    .then(response => response.json())
                    .then(personaje => {

                        $("#mostrar-datos-api").append(`
                    <h1>${personaje.name}</h1>
                    <p><strong>Estatura:</strong> ${personaje.height} cm</p>
                    <p><strong>Peso:</strong> ${personaje.mass} kg</p>
                    <div class="linea"></div>    
                    `);
                    })
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                document.getElementById('mostrar-datos-api').innerHTML = 'Error al obtener los datos de la API.';
            }
        }
    };
    obtenerPersonajesPrincipales();
});

document.getElementById('secundarios').addEventListener('mouseenter', () => {
    const url = "https://swapi.dev/api/people/";
    const obtenerPersonajesSecundarios = async () => {
        for (let id = 6; id <= 11; id++) {
            try {
                $("#mostrar-datos-api").html("")
                fetch(`${url}${id}/`)
                    .then(response => response.json())
                    .then(personaje => {

                        $("#mostrar-datos-api").append(`
                    <h1>${personaje.name}</h1>
                    <p><strong>Estatura:</strong> ${personaje.height} cm</p>
                    <p><strong>Peso:</strong> ${personaje.mass} kg</p>
                    <div class="linea"></div>    
                    `);
                    })
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                document.getElementById('mostrar-datos-api').innerHTML = 'Error al obtener los datos de la API.';
            }
        }
    };
    obtenerPersonajesSecundarios();
});

document.getElementById('varios').addEventListener('mouseenter', () => {
    const url = "https://swapi.dev/api/people/";
    const obtenerPersonajesVarios = async () => {
        for (let id = 12; id <= 18; id++) {
            if (id === 17) {
                continue;
            }
            try {
                $("#mostrar-datos-api").html("")
                fetch(`${url}${id}/`)
                    .then(response => response.json())
                    .then(personaje => {

                        $("#mostrar-datos-api").append(`
                    <h1>${personaje.name}</h1>
                    <p><strong>Estatura:</strong> ${personaje.height} cm</p>
                    <p><strong>Peso:</strong> ${personaje.mass} kg</p>
                    <div class="linea"></div>    
                    `);
                    })
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                document.getElementById('mostrar-datos-api').innerHTML = 'Error al obtener los datos de la API.';
            }
        }
    };
    obtenerPersonajesVarios();
});

