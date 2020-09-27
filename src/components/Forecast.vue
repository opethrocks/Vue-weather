<template>
  <div>
    <transition name="fade">
      <div v-if="isActive">
        <div class="box">
          <p class="label is-size-3 pt-3">
            <font-awesome-icon icon="location-arrow" />
            {{ cityData[0].name }}, {{ cityData[0].state }}
          </p>
          <h1 class="label is-size-4">12 hour forecast</h1>
          <div class="flex-container">
            <div v-for="forecast in getForecast" :key="forecast.dt">
              <div
                class="flex-item"
                v-for="weather in forecast.weather"
                :key="weather.id"
              >
                <p class="has-text-weight-semibold">
                  {{
                    new Date(forecast.dt_txt).toLocaleDateString([], {
                      month: '2-digit',
                      day: '2-digit',
                      year: '2-digit'
                    })
                  }}
                </p>
                <p class="has-text-weight-semibold">
                  {{
                    new Date(forecast.dt_txt).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                  }}
                </p>
                <div id="icon">
                  <i
                    :style="{ color: randomColor() }"
                    :class="`wi wi-owm-${weather.icon}`"
                  ></i>
                </div>

                <p class="has-text-weight-semibold" id="description">
                  <font-awesome-icon icon="thermometer-half" />
                  {{ Math.round(forecast.main.temp_max) }}{{ formatUnits }}
                </p>
                <p class="has-text-weight-semibold" id="description">
                  {{ weather.description }}
                </p>
              </div>
            </div>
          </div>
          <button
            class="button is-rounded is-link is-small"
            @click="toggleConditions"
          >
            Show Conditions
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Forecast',
  data() {
    return {
      units: null
    };
  },
  props: {
    isActive: {
      type: Boolean,
      default: () => {
        false;
      }
    },
    forecastWeather: {
      type: Object,
      default: () => {
        null;
      }
    },
    unitSelected: {
      type: String,
      default: () => {
        '';
      }
    },
    cityData: {
      type: Array,
      default: () => {
        [];
      }
    }
  },
  methods: {
    toggleConditions() {
      this.$store.dispatch('toggleForecast');
    },
    randomColor() {
      return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    }
  },
  computed: {
    getForecast() {
      return this.forecastWeather.list.filter((item, index) => index < 10);
    },
    getIcon() {
      return this.forecastIcon.filter((item, index) => index < 10);
    },
    formatUnits() {
      if (this.unitSelected === 'imperial') {
        return '°F';
      } else {
        return '°C';
      }
    }
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  grid-row-gap: 2em;
}
.flex-item {
  margin: 0.75em;
}
.box {
  border-radius: 50px;
  width: 800px;
}
.button {
  margin: 1em;
}
#description {
  text-transform: capitalize;
}
#icon {
  font-size: 75px;
}
#icon-color {
  color: red;
}
</style>
