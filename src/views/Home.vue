<template>
	<div>
		<div class="flex-container">
			<figure class="image is-128x128">
				<img src="@/assets/weather-icon.png" />
			</figure>
		</div>
		<div class="columns is-centered">
			<div class="column is-one-third">
				<div class="field">
					<div class="control has-icons-left has-icons-right">
						<input
							class="input is-info"
							type="text"
							placeholder="Search for a city"
							v-model="input"
						/>
						<span class="icon is-left">
							<font-awesome-icon icon="search" />
						</span>
						<span class="icon is-right">
							<a class="delete is-small" @click="clearForm"></a>
						</span>

						<button
							class="button is-info"
							style="margin-top: 1em; margin-right: 1em"
							@click="searchImperial"
						>
							Imperial
						</button>
						<button
							class="button is-success"
							style="margin-top: 1em"
							@click="searchMetric"
						>
							Metric
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="card">
			<current-conditions
				:forecastWeather="weatherForecast"
				:currentWeather="currentWeather"
				:unitSelected="selectedUnit"
				:isActive="toggleForecast"
			/>
		</div>
	</div>
</template>

<script>
import CurrentConditions from "@/components/CurrentConditions.vue";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "Home",
	components: {
		CurrentConditions,
	},
	data() {
		return {
			input: "lake charles",
			units: "imperial",
		};
	},
	computed: {
		...mapGetters([
			"currentWeather",
			"weatherForecast",
			"selectedUnit",
			"toggleForecast",
		]),
	},
	methods: {
		...mapActions(["currentWeather", "weatherForecast"]),
		...mapActions({
			weather: "currentWeather",
			forecast: "weatherForecast",
		}),
		searchImperial() {
			this.units = "imperial";
			this.weather({
				city: this.input,
				unit: this.units,
			});
			this.forecast({
				city: this.input,
				unit: this.units,
			});
			this.input = "";
		},
		searchMetric() {
			this.units = "metric";
			this.weather({
				city: this.input,
				unit: this.units,
			});
			this.forecast({
				city: this.input,
				unit: this.units,
			});
			this.input = "";
		},
		clearForm() {
			this.input = null;
		},
	},
	created() {
		this.units = "imperial";
		this.weather({
			city: this.input,
			unit: this.units,
		});
		this.forecast({
			city: this.input,
			unit: this.units,
		});
		this.input = "";
	},
};
</script>

<style>
.flex-container {
	display: flex;
	justify-content: center;
	flex-flow: row wrap;
}
.card {
	margin: 25px 200px 30px 200px;
}
</style>
