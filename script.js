// Inicializar el mapa
function initMap() {
    // Coordenadas centrales de Cuba
    var cuba = { lat: 21.5, lng: -79.371124 };
    
    // Crear el mapa
    var mapa = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 8,
        center: cuba
    });

    // Marcadores de los mercados
    var mercados = [
        { nombre: "El Mamey", lat: 21.539, lng: -79.256, horario: "8:00 am - 4:00 pm" },
        { nombre: "El Gigante", lat: 21.547, lng: -79.261, horario: "8:00 am - 4:00 pm" },
        { nombre: "La Toronja", lat: 22.419, lng: -79.655, horario: "9:00 am - 5:00 pm" },
        { nombre: "El Saltarín", lat: 21.529, lng: -79.238, horario: "7:00 am - 3:00 pm" },
    ];

    // Añadir los marcadores al mapa
    mercados.forEach((mercado) => {
        var marker = new google.maps.Marker({
            position: { lat: mercado.lat, lng: mercado.lng },
            map: mapa,
            title: mercado.nombre
        });

        // Añadir un popup con información
        var infoWindow = new google.maps.InfoWindow({
            content: `<div><strong>${mercado.nombre}</strong><br>Horario: ${mercado.horario}</div>`
        });

        marker.addListener('click', function() {
            infoWindow.open(mapa, marker);
        });
    });
}

// Función para centrar el mapa en un mercado
function centrarEnMercado(nombre) {
    var mercados = [
        { nombre: "El Mamey", lat: 21.539, lng: -79.256 },
        { nombre: "El Gigante", lat: 21.547, lng: -79.261 },
        { nombre: "La Toronja", lat: 22.419, lng: -79.655 },
        { nombre: "El Saltarín", lat: 21.529, lng: -79.238 },
    ];

    var mercado = mercados.find((m) => m.nombre === nombre);
    if (mercado) {
        var mapa = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 14,
            center: { lat: mercado.lat, lng: mercado.lng }
        });
    }
}

// Función para filtrar los mercados en la lista
function filtrarMercados() {
    var input = document.getElementById("buscarMercado").value.toLowerCase();
    var items = document.getElementsByClassName("lista-item");

    Array.from(items).forEach((item) => {
        var texto = item.textContent || item.innerText;
        item.style.display = texto.toLowerCase().includes(input) ? "" : "none";
    });
}
