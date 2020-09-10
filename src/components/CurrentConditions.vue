<template>
	<div>
		<div class="box" v-if="currentWeather">
			<div class="columns">
				<div class="column">
					<p class="label is-size-3 ">
						<font-awesome-icon icon="location-arrow" />
						{{ currentWeather.name }}, {{ currentWeather.sys.country }}
					</p>

					<p class="is-size-4 has-text-weight-semibold capitalize">
						{{ getWeather[0].description }}
					</p>
					<p class="is-size-4 pb-2 has-text-weight-semibold">
						<font-awesome-icon icon="thermometer-half" />
						{{ Math.round(currentWeather.main.temp) }}{{ formatUnits }}
					</p>

					<weather-icons
						:conditions="getWeather[0].main"
						:description="getWeather[0].description"
						:time="getWeather[0].icon"
						:size="256"
						:weather="getWeather"
					/>

					<p class="has-text-weight-medium pt-2">
						<font-awesome-icon icon="wind" />
						Wind: {{ Math.round(currentWeather.wind.speed) }} Mph
					</p>
					<p class="has-text-weight-medium">
						<font-awesome-icon icon="water" /> Humidity:
						{{ currentWeather.main.humidity }}%
					</p>
					<p class="has-text-weight-medium">
						<font-awesome-icon icon="sun" />
						<font-awesome-icon icon="long-arrow-alt-up" />
						Sunrise:
						{{
							new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString(
								[],
								{
									hour: "2-digit",
									minute: "2-digit",
								}
							)
						}}
					</p>
					<p class="pb-2 has-text-weight-medium">
						<font-awesome-icon icon="sun" />
						<font-awesome-icon icon="long-arrow-alt-down" />
						Sunset:
						{{
							new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString(
								[],
								{
									hour: "2-digit",
									minute: "2-digit",
								}
							)
						}}
					</p>
					<button class="button is-link" @click="toggleForecast">
						Show Forecast
					</button>
				</div>
			</div>
			<forecast
				:isActive="isActive"
				:forecastWeather="forecastWeather"
				:unitSelected="unitSelected"
			/>
		</div>
	</div>
</template>

<script>
import WeatherIcons from "./WeatherIcons.vue";
import Forecast from "./Forecast.vue";

export default {
	name: "CurrentConditions",
	components: {
		WeatherIcons,
		Forecast,
	},
	props: {
		isActive: {
			type: Boolean,
			default: () => {
				false;
			},
		},
		forecastWeather: {
			type: Object,
			default: () => {},
		},
		currentWeather: {
			type: Object,
			default: () => {},
		},
		unitSelected: {
			type: String,
			default: () => "",
		},
	},
	data() {
		return {
			visible: true,
		};
	},

	methods: {
		toggleForecast() {
			this.$store.dispatch("toggleForecast");
		},
	},
	computed: {
		formatUnits() {
			if (this.unitSelected === "imperial") {
				return "°F";
			} else {
				return "°C";
			}
		},
		getWeather() {
			return this.currentWeather.weather.map((item) => item);
		},
		getForecast() {
			return this.forecastWeather.list;
		},
	},
};
</script>

<style>
.capitalize {
	text-transform: capitalize;
}
</style>
