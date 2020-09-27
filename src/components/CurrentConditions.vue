<template>
  <div>
    <div class="flex-container">
      <transition name="fade">
        <div v-if="!isActive">
          <div class="box" id="round-corners">
            <p class="label is-size-3 pt-3">
              <font-awesome-icon icon="location-arrow" />
              {{ cityData[0].name }}, {{ cityData[0].state }}
            </p>

            <p class="is-size-4 has-text-weight-semibold capitalize">
              {{ getWeather[0].description }}
            </p>
            <p class="is-size-4 has-text-weight-semibold">
              <font-awesome-icon icon="thermometer-half" />
              {{ Math.round(currentWeather.main.temp) }}{{ formatUnits }}
            </p>
            <div id="icon">
              <i
                :style="{ color: randomColor() }"
                :class="`wi wi-owm-${getWeather[0].icon}`"
              ></i>
            </div>
            <p class="has-text-weight-semibold">
              <font-awesome-icon icon="wind" />
              Wind: {{ Math.round(currentWeather.wind.speed) }} Mph
            </p>
            <p class="has-text-weight-semibold">
              <font-awesome-icon icon="water" /> Humidity:
              {{ currentWeather.main.humidity }}%
            </p>
            <p class="has-text-weight-semibold">
              <font-awesome-icon icon="sun" />
              <font-awesome-icon icon="long-arrow-alt-up" />
              Sunrise:
              {{
                new Date(currentWeather.sys.sunrise * 1000).toLocaleTimeString(
                  [],
                  {
                    hour: '2-digit',
                    minute: '2-digit'
                  }
                )
              }}
            </p>
            <p class="pb-2 has-text-weight-semibold">
              <font-awesome-icon icon="sun" />
              <font-awesome-icon icon="long-arrow-alt-down" />
              Sunset:
              {{
                new Date(currentWeather.sys.sunset * 1000).toLocaleTimeString(
                  [],
                  {
                    hour: '2-digit',
                    minute: '2-digit'
                  }
                )
              }}
            </p>
            <button
              class="button is-rounded is-link is-small"
              @click="toggleForecast"
            >
              Show Forecast
            </button>
          </div>
        </div>
      </transition>
      <transition
        name="fade"
        enter-active-class="fadeDown"
        leave-active-class="fadeDown"
      >
      </transition>
      <forecast
        :isActive="isActive"
        :forecastWeather="forecastWeather"
        :unitSelected="unitSelected"
        :cityData="cityData"
      />
    </div>
  </div>
</template>

<script>
import Forecast from './Forecast.vue';

export default {
  name: 'CurrentConditions',
  components: {
    Forecast
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
      default: () => {}
    },
    currentWeather: {
      type: Object,
      default: () => {}
    },
    unitSelected: {
      type: String,
      default: () => ''
    },
    cityData: {
      type: Array,
      default: () => {
        [];
      }
    }
  },

  methods: {
    toggleForecast() {
      this.$store.dispatch('toggleForecast');
    },
    randomColor() {
      return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
    }
  },
  computed: {
    formatUnits() {
      if (this.unitSelected === 'imperial') {
        return '°F';
      } else {
        return '°C';
      }
    },
    getWeather() {
      return this.currentWeather.weather.map((item) => item);
    },
    getForecast() {
      return this.forecastWeather.list;
    }
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: center;
}
.box {
  width: 600px;
}
.capitalize {
  text-transform: capitalize;
}
#round-corners {
  border-radius: 50px;
}
#icon {
  font-size: 256px;
}
</style>
