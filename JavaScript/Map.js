// JavaScript Document

var mapOptions
var mapDiv = document.getElementById("map");
var cheltenham = new google.maps.LatLng(51.897476 , -2.077575);

google.maps.event.addDomListener(window, "load", start);
	
function start(){
	
	var map = new mapp(cheltenham);
	
	}

function mapp(location){
	
	mapOptions = {
		center: location,
		minZoom: 12,
		zoom: 12
	}
	
	var googleMap = new google.maps.Map(mapDiv,mapOptions);

	}
