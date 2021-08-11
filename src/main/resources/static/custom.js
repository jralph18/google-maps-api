let map;
//let coords = {lat: 30.2672, lng: -97.7431};
var contentString = '<h2>' + city + ', ' + state + '</h2>';

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: coords,
        zoom: 10,
        scrollwheel: false
    });

    const image = {
                    url: "./cat_heart_eyes.png/",
                    scaledSize: new google.maps.Size(40, 39), // scaled size
//                    origin: new google.maps.Point(0,0), // origin
//                    anchor: new google.maps.Point(0, 0) // anchor
    };

    let marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: image,
        animation: google.maps.Animation.BOUNCE
    });

    var contentString = '<h2>Austin, TX</h2> <p>Where your dreams come true.</p>';

    var infowindow = new google.maps.InfoWindow({
       content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
}