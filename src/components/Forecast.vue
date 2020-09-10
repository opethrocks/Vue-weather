<template>
	<div>
		<div class="forecast-flex" v-if="isActive">
			<section>
				<div class="columns">
					<div
						class="column"
						id="column"
						v-for="forecast in getForecast"
						:key="forecast.dt"
					>
						<div v-for="weather in forecast.weather" :key="weather.id">
							<p class="has-text-weight-medium">
								{{
									new Date(forecast.dt_txt).toLocaleDateString([], {
										month: "2-digit",
										day: "2-digit",
										year: "2-digit",
									})
								}}
							</p>
							<p class="has-text-weight-medium">
								{{
									new Date(forecast.dt_txt).toLocaleTimeString([], {
										hour: "2-digit",
										minute: "2-digit",
									})
								}}
							</p>
							<forecast-icons
								:description="weather.description"
								:conditions="weather.main"
								:size="64"
								:time="weather.icon"
							/>
							<p class="has-text-weight-medium" id="description">
								<font-awesome-icon icon="thermometer-half" />
								{{ Math.round(forecast.main.temp_max) }}{{ formatUnits }}
							</p>
							<p class="has-text-weight-medium" id="description">
								{{ weather.description }}
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import ForecastIcons from "./ForecastIcons.vue";
export default {
	name: "Forecast",
	components: {
		ForecastIcons,
	},
	data() {
		return {
			units: null,
		};
	},
	props: {
		isActive: {
			type: Boolean,
			default: () => {
				false;
			},
		},
		forecastWeather: {
			type: Array,
			default: () => {
				[];
			},
		},
		unitSelected: {
			type: Array,
			default: () => {
				[];
			},
		},
	},
	computed: {
		getForecast() {
			return this.forecastWeather.list;
		},
		formatUnits() {
			if (this.unitSelected === "imperial") {
				return "°F";
			} else {
				return "°C";
			}
		},
	},
};
</script>

<style>
.forecast-flex {
	display: flex;
	overflow-x: auto;
	padding-top: 3em;
}

#description {
	text-transform: capitalize;
}
</style>
