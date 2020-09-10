<template>
	<div>
		<div class="flex-box">
			<figure class="image is-96x96">
				<img src="./../assets/map-icon.png" />
			</figure>
		</div>
		<div id="map"></div>
	</div>
</template>

<script>
import "leaflet-openweathermap/leaflet-openweathermap.css";
import "leaflet/dist/leaflet.css";
import "leaflet-openweathermap";
import * as L from "leaflet";

export default {
	data() {
		return {
			url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			currentPosition: null,
			zoom: 8,
			map: L.Map,
			precipitationLayer: null,
			center: [30.214575081187988, -93.21830749511719],
		};
	},
	mounted() {
		var streets = L.tileLayer(
			"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		);
		var topographic = L.tileLayer(
			"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
		);
		var precipitation = L.OWM.precipitation({
			appId: "64aaf5b71da8c0001799c0054eea79ca",
		});
		var temperature = L.OWM.temperature({
			appId: "64aaf5b71da8c0001799c0054eea79ca",
		});
		var wind = L.OWM.wind({ appId: "64aaf5b71da8c0001799c0054eea79ca" });
		this.map = L.map("map", {
			center: [30.214575081187988, -93.21830749511719],
			zoom: 7,
			layers: [streets, topographic],
		});
		var baseMaps = {
			Streets: streets,
			Topographic: topographic,
		};
		var overlayMaps = {
			Precipitation: precipitation,
			Temperature: temperature,
			Wind: wind,
		};
		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
			this.map
		);
		L.control.layers(baseMaps, overlayMaps).addTo(this.map);
	},
	// mounted() {
	// 	const options = { timeout: 10000 };
	// 	function success(pos) {
	// 		const latLng = pos.coords;
	// 		this.currentPosition = latLng;
	// 	}
	// 	function error(err) {
	// 		alert(err.message);
	// 	}
	// 	navigator.geolocation.getCurrentPosition(success, error, options);
	// },
};
</script>

<style>
.map-container {
	height: 100%;
	width: 100%;
	padding: 25px 25px 25px 25px;
	align-items: center;
}
#map {
	height: 800px;
}
.flex-box {
	display: flex;
	justify-content: center;
	padding-bottom: 2em;
}
</style>
