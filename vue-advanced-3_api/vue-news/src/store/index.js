import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		news: [],
		ask: [],
		jobs: [],
	},
	getters: {
		fetchedAsk(state) {
			return state.ask;
		},
	},
	mutations,
	// api를 vuex에서 호출한다면 actions에 써줘야 한다.
	actions,
});
