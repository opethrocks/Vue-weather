<template>
  <div id="map"></div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import 'leaflet-openweathermap';
import 'leaflet.locatecontrol';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';
import * as L from 'leaflet';

export default {
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      currentPosition: [],
      zoom: 8,
      map: L.Map,
      precipitationLayer: null,
      center: [30.214575081187988, -93.21830749511719]
    };
  },
  mounted() {
    var detailed = L.tileLayer(
      'https://tile-{s}.openstreetmap.fr/hot/{z}/{x}/{y}.png'
    );
    var street = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    );
    var precipitation = L.OWM.precipitation({
      appId: '64aaf5b71da8c0001799c0054eea79ca',
      opacity: 0.7
    });
    var temperature = L.OWM.temperature({
      appId: '64aaf5b71da8c0001799c0054eea79ca',
      opacity: 0.5,
      temperatureUnit: 'F'
    });
    var wind = L.OWM.wind({
      appId: '64aaf5b71da8c0001799c0054eea79ca',
      opacity: 0.5
    });
    var snow = L.OWM.snow({
      appId: '64aaf5b71da8c0001799c0054eea79ca',
      opacity: 0.8
    });
    var clouds = L.OWM.clouds({
      appId: '64aaf5b71da8c0001799c0054eea79ca',
      opacity: 0.8
    });
    var pressure = L.OWM.pressure({
      appId: '64aaf5b71da8c0001799c0054eea79ca',
      opacity: 0.5
    });
    this.map = L.map('map', {
      center: [40.84706035607122, -96.15234375],
      zoom: 4,
      layers: [street, detailed]
    });
    var baseMaps = {
      Street: street,
      Detailed: detailed
    };
    var overlayMaps = {
      Precipitation: precipitation,
      Temperature: temperature,
      Wind: wind,
      Snow: snow,
      Clouds: clouds,
      Pressure: pressure
    };
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map
    );
    L.control.layers(baseMaps, overlayMaps).addTo(this.map);
    // const options = { timeout: 10000, enableHighAccuracy: true };
    // function success(position) {
    // 	const lat = position.coords.latitude;
    // 	const lng = position.coords.longitude;
    // 	this.currentPosition.push([lat, lng]);
    // }
    // function error(err) {
    // 	alert(err.message);
    // }
    // navigator.geolocation.getCurrentPosition(success, error, options);

    this.map.addControl(
      L.control.locate({
        locateOptions: {
          enableHighAccuracy: true
        },
        watch: true,
        icon: 'fa fa-map-marker'
      })
    );
  }
};
</script>

<style scoped>
#map {
  height: 900px;
}
.flex-box {
  display: flex;
  justify-content: center;
  padding-bottom: 2em;
}
</style>
