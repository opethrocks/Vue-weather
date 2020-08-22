import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		currentWeather: null,
		weatherForecast: null,
		selectedUnits: "",
		isForecastActive: false,
	},
	mutations: {
		ADD_WEATHER(state, payload) {
			let data = payload;
			state.currentWeather = data;
		},
		ADD_FORECAST(state, payload) {
			let data = payload;
			state.weatherForecast = data;
		},
		SET_UNIT(state, payload) {
			let unit = payload;
			state.selectedUnits = unit;
		},
		DELETE_CITY(state) {
			state.currentWeather = null;
			state.weatherForecast = null;
		},
		TOGGLE_FORECAST(state) {
			state.isForecastActive === false
				? (state.isForecastActive = true)
				: (state.isForecastActive = false);
		},
	},
	actions: {
		currentWeather({ commit }, payload) {
			let city = encodeURIComponent(payload.city);
			let unit = payload.unit;
			const apiKey = process.env.VUE_APP_API_KEY;
			axios({
				method: "GET",
				url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
				params: {
					units: unit,
				},
			})
				.then((response) => {
					commit("ADD_WEATHER", response.data);
					commit("SET_UNIT", unit);
				})
				.catch((error) => {
					alert(error);
				});
		},

		weatherForecast({ commit }, payload) {
			let city = encodeURIComponent(payload.city);
			let unit = payload.unit;
			const apiKey = process.env.VUE_APP_API_KEY;
			axios({
				method: "GET",
				url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`,
				params: {
					units: unit,
				},
			})
				.then((response) => {
					commit("ADD_FORECAST", response.data);
					commit("SET_UNIT", unit);
				})
				.catch((error) => {
					alert(error);
				});
		},
		deleteCity({ commit }) {
			commit("DELETE_CITY");
		},
		toggleForecast({ commit }) {
			commit("TOGGLE_FORECAST");
		},
	},

	getters: {
		currentWeather: (state) => state.currentWeather,
		weatherForecast: (state) => state.weatherForecast,
		selectedUnit: (state) => state.selectedUnits,
		toggleForecast: (state) => state.isForecastActive,
	},
});
