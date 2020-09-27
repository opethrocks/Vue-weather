<template>
  <div>
    <div class="columns is-centered">
      <div class="column is-one-third">
        <div
          class="dropdown"
          :class="{ 'is-active': dropdown }"
          id="state-select"
          @click="showDropdown"
        >
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu4"
            >
              <span>State: {{ selectedState }}</span>
              <span class="icon is-small">
                <font-awesome-icon icon="angle-down" />
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu4" role="menu">
            <div class="dropdown-content" id="dropdown">
              <a
                v-for="(state, index) in stateList"
                :key="index"
                href="#"
                class="dropdown-item"
                :class="{ 'is-active': state.isActive }"
                @click="selectItem(state)"
              >
                {{ state.name }}
              </a>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="control has-icons-left has-icons-right">
            <input
              class="input is-info is-rounded"
              type="text"
              placeholder="Search for city"
              v-model.lazy="input"
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
    <transition name="fade">
      <div v-if="currentWeather">
        <current-conditions
          :forecastWeather="weatherForecast"
          :currentWeather="currentWeather"
          :unitSelected="selectedUnit"
          :isActive="toggleForecast"
          :cityData="getCityData"
        />
      </div>
    </transition>
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
      input: null,
      city: 'Lake Charles',
      units: 'imperial',
      cityCode: null,
      stateList: [],
      countryList: [],
      selectedState: 'LA',
      dropdown: false
    };
  },
  computed: {
    getCityData() {
      return this.cityData.filter(
        (obj) => obj.state === this.selectedState && obj.name === this.city
      );
    },
    getCityCode() {
      return this.getCityData.map((obj) => obj.id);
    },
    getCityCoords() {
      return this.getCityData.map((obj) => obj.coord);
    },
    ...mapGetters([
      'currentWeather',
      'weatherForecast',
      'selectedUnit',
      'toggleForecast',
      'cityData'
    ])
  },
  methods: {
    ...mapActions(['currentWeather', 'weatherForecast']),
    ...mapActions({
      weather: 'currentWeather',
      forecast: 'weatherForecast'
    }),

    searchImperial() {
      let str = this.input
        .toLowerCase()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');
      this.city = str;
      this.cityCode = this.getCityCode[0];
      this.units = 'imperial';
      this.weather({
        city: this.cityCode,
        unit: this.units
      });
      this.forecast({
        city: this.cityCode,
        unit: this.units
      });
    },
    searchMetric() {
      let str = this.input
        .toLowerCase()
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substr(1))
        .join(' ');
      this.city = str;
      this.cityCode = this.getCityCode[0];
      this.units = 'metric';
      this.weather({
        city: this.cityCode,
        unit: this.units
      });
      this.forecast({
        city: this.cityCode,
        unit: this.units
      });
    },
    clearForm() {
      this.input = null;
    },
    selectItem(event) {
      this.stateList.map((state) => (state.isActive = false));
      event.isActive = true;
      this.selectedState = event.name;
    },
    showDropdown() {
      this.dropdown === false
        ? (this.dropdown = true)
        : (this.dropdown = false);
    }
  },

  created() {
    this.cityData.filter((obj) => {
      if (obj.state != '') {
        this.stateList.push(obj.state);
      }
    });
    this.stateList.sort().shift();
    this.stateList = this.stateList.filter(
      (cur, ind, arr) => arr.indexOf(cur) === ind
    );
    this.stateList = this.stateList.map((state) =>
      Object.assign({ name: state, isActive: false })
    );
  },
  mounted() {
    this.cityCode = this.getCityCode[0];
    this.weather({
      city: this.cityCode,
      unit: this.units
    });
    this.forecast({
      city: this.cityCode,
      unit: this.units
    });
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}
#dropdown {
  height: 300px;
  width: 100px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
#state-select {
  margin: 0em 1em 1em 0em;
}
</style>
