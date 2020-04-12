var map;

function initMap() {
    let uluru = {
        lat: 21.038576,
        lng: 105.774502,
    };
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}