function initMap() {
    let location = {
        latitude: 40.378422,
        longitude: 49.842201
    };
    let map=new google.maps.Map(document.getElementById('map'),{
        zoom:4,
        center: location
    });

}