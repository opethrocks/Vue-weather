<template>
	<div>
		<skycon
			paused="true"
			condition="clear-day"
			size="256"
			color="#FF3400"
			v-if="conditions === 'Clear'"
			v-show="timeOfDay === 'day'"
		/>
		<skycon
			paused="true"
			condition="clear-night"
			size="256"
			color="#00BBF3"
			v-if="conditions === 'Clear'"
			v-show="timeOfDay === 'night'"
		/>
		<skycon
			paused="true"
			condition="partly-cloudy-day"
			size="256"
			color="#EFEB00"
			v-if="description === 'few clouds'"
			v-show="timeOfDay === 'day'"
		/>
		<skycon
			paused="true"
			condition="partly-cloudy-night"
			size="256"
			color="#A800F9"
			v-if="description === 'few clouds'"
			v-show="timeOfDay === 'night'"
		/>
		<skycon
			paused="true"
			condition="partly-cloudy-day"
			size="256"
			color="#EFEB00"
			v-if="description === 'scattered clouds'"
			v-show="timeOfDay === 'day'"
		/>
		<skycon
			paused="true"
			condition="partly-cloudy-night"
			size="256"
			color="#A800F9"
			v-if="description === 'scattered clouds'"
			v-show="timeOfDay === 'night'"
		/>
		<skycon
			paused="true"
			condition="partly-cloudy-day"
			size="256"
			color="#EFEB00"
			v-if="description === 'broken clouds'"
			v-show="timeOfDay === 'day'"
		/>
		<skycon
			paused="true"
			condition="partly-cloudy-night"
			size="256"
			color="#A800F9"
			v-if="description === 'broken clouds'"
			v-show="timeOfDay === 'night'"
		/>
		<skycon
			paused="true"
			condition="cloudy"
			size="256"
			color="#626164"
			v-if="description === 'overcast clouds'"
		/>
		<skycon
			paused="true"
			condition="rain"
			color="#00F7AB"
			size="256"
			v-if="conditions === 'Rain'"
		/>
		<skycon
			paused="true"
			condition="rain"
			color="#00F7AB"
			size="256"
			v-if="conditions === 'Mist'"
		/>
		<skycon
			paused="true"
			condition="rain"
			color="#00F7AB"
			size="256"
			v-if="conditions === 'Thunderstorm'"
		/>
		<skycon condition="sleet" v-if="conditions === 'Sleet'" />
		<skycon
			paused="true"
			condition="snow"
			color="#E4E0EA"
			size="256"
			v-if="conditions === 'Snow'"
		/>
		<skycon
			paused="true"
			condition="fog"
			color="#626164"
			size="256"
			v-if="conditions === 'Fog'"
		/>
	</div>
</template>

<script>
export default {
	name: "WeatherIcons",
	data() {
		return {
			timeOfDay: null,
		};
	},

	props: {
		conditions: {
			type: String,
			default: () => {
				"";
			},
		},
		description: {
			type: String,
			default: () => {
				"";
			},
		},
		time: {
			type: String,
			default: () => {
				"";
			},
		},
		size: {
			type: [String, Number],
			default: () => {
				64;
			},
		},
		weather: {
			type: Array,
			default: () => {
				[];
			},
		},
	},
	created() {
		this.dayOrNight();
	},
	methods: {
		dayOrNight() {
			if (this.time.charAt(2) === "n") {
				this.timeOfDay = "night";
			} else {
				this.timeOfDay = "day";
			}
		},
	},
};
</script>
