$(document).ready(function() {
 var map = null;
 function showMap(latitude, longitude) {
  var googleLatAndLong = new google.maps.LatLng(latitude, longitude);
  var mapOptions = {
   zoom: 15,
   center: googleLatAndLong,
   mapTypeId: google.maps.MapTypeId.ROADMAP
  };
 var mapDiv = document.getElementById("map");
 map = new google.maps.Map(mapDiv, mapOptions);
 // add the user marker
 var title = "We're here!";
 var content = "You can visit our office on weekdays 9 a.m. to 6 p.m.";
 addMarker(map, googleLatAndLong, title, content);
};
showMap(40.691455, -73.977103);  

function addMarker(map, latlong, title, content) {
	var markerOptions = {
		position: latlong,
		map: map,
		title: title,
		clickable: true
	};
	var marker = new google.maps.Marker(markerOptions);

	var infoWindowOptions = {
		content: content,
		position: latlong
	};

	var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

	google.maps.event.addListener(marker, 'click', function() {
		infoWindow.open(map);
	});
}
});