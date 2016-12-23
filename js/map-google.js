function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(34.889235,-111.8856558)
  }
  var map = new google.maps.Map(document.getElementById('map-sedona'),
                                mapOptions);
  var myLatLng = new google.maps.LatLng(34.889235,-111.8856558);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
