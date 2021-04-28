mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: park.geometry.coordinates,
    zoom: 8
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(park.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup()
            .setHTML(
                `<b><a>${park.title}</a></b><p>${park.location}</p>`
            )
    )
    .addTo(map)