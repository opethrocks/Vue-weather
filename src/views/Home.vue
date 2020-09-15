<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-one-third">
        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-info is-rounded"
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
              class="button is-rounded is-info is-small"
              style="margin-top: 1em; margin-right: 1em"
              @click="searchImperial"
            >
              Imperial
            </button>
            <button
              class="button is-rounded is-success is-small"
              style="margin-top: 1em"
              @click="searchMetric"
            >
              Metric
            </button>
          </div>
        </div>
      </div>
    </div>
    <current-conditions
      :forecastWeather="weatherForecast"
      :currentWeather="currentWeather"
      :unitSelected="selectedUnit"
      :isActive="toggleForecast"
      :weatherIcon="weatherIcon"
      :forecastIcon="forecastIcon"
    />
  </div>
</template>

<script>
import CurrentConditions from '@/components/CurrentConditions.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    CurrentConditions
  },
  data() {
    return {
      input: 'lake charles',
      units: 'imperial'
    };
  },
  computed: {
    ...mapGetters([
      'currentWeather',
      'weatherForecast',
      'selectedUnit',
      'toggleForecast',
      'weatherIcon',
      'forecastIcon'
    ])
  },
  methods: {
    ...mapActions(['currentWeather', 'weatherForecast']),
    ...mapActions({
      weather: 'currentWeather',
      forecast: 'weatherForecast'
    }),
    searchImperial() {
      this.units = 'imperial';
      this.weather({
        city: this.input,
        unit: this.units
      });
      this.forecast({
        city: this.input,
        unit: this.units
      });
      this.input = '';
    },
    searchMetric() {
      this.units = 'metric';
      this.weather({
        city: this.input,
        unit: this.units
      });
      this.forecast({
        city: this.input,
        unit: this.units
      });
      this.input = '';
    },
    clearForm() {
      this.input = null;
    }
  },
  created() {
    this.units = 'imperial';
    this.weather({
      city: this.input,
      unit: this.units
    });
    this.forecast({
      city: this.input,
      unit: this.units
    });
    this.input = '';
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
</style>
