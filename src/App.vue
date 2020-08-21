<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <div class="container">
      <current-conditions
        @showForecast="toggleForecast"
        :forecastWeather="weatherForecast"
        :currentWeather="currentWeather"
        :unitSelected="selectedUnit"
        :isActive="show"
      />
    </div>
  </div>
</template>

<script>
import CurrentConditions from "@/components/CurrentConditions.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CurrentConditions,
  },
  data() {
    return {
      weatherData: [],

      show: false,
    };
  },
  computed: {
    ...mapGetters([
      "currentWeather",
      "weatherForecast",
      "weatherConditions",
      "selectedUnit",
    ]),
  },
  methods: {
    toggleForecast() {
      this.show === false ? (this.show = true) : (this.show = false);
    },

    closeForecast(event) {
      this.show = event;
    },
  },
};
</script>

<style lang="scss">
.container {
  padding: 5em 5em 5em 5em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
