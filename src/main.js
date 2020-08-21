import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./../node_modules/bulma/css/bulma.css";
import VueSkycons from "vue-skycons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faSearch,
	faThermometerHalf,
	faLocationArrow,
	faWind,
	faWater,
	faSun,
	faLongArrowAltUp,
	faLongArrowAltDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSearch);
library.add(faThermometerHalf);
library.add(faLocationArrow);
library.add(faWind);
library.add(faWater);
library.add(faSun);
library.add(faLongArrowAltUp);
library.add(faLongArrowAltDown);

Vue.config.productionTip = false;
Vue.use(VueSkycons);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
