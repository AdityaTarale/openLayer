const cities = document.querySelector('.cities');
const heading = document.querySelector('.container__heading');

var view = new ol.View({
    center: [0, 0],
    zoom: 2,
});

function toggleCity(e) {
    if (e.target.tagName === 'BUTTON') {
        heading.innerHTML = `<h1>${e.target.textContent} map</h1>`;

        console.log(+e.target.dataset.x, +e.target.dataset.y);


    } else {
        heading.innerHTML = `<h1>Welcome to Maps</h1>`;
    }
}

let map = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        }),
    ],
    target: 'e-map',
    view: view,
});

function changeHead(e) {
    if (e.target.tagName === 'BUTTON') {
    } else {
    }
}

cities.addEventListener('click', toggleCity);
