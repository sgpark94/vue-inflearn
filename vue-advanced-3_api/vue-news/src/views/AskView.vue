<template>
  <div>
    <p v-for="item in fetchedAsk">{{ item.title }}</p>
  </div>
</template>

<script>
// import { fetchAskList } from "../api/index";
import { mapGetters, mapState } from "vuex";

export default {
	computed: {
		...mapGetters(["fetchedAsk"]),

		// ...mapState(["ask"]),

		// 다른 이름을 쓰고 싶다면 객체로 써줄 것.
		// ...mapState({
		// 	ask: (state) => state.ask,
		// }),

		// ask(){
		// 	return this.$store.state.ask;
		// }
	},
	data() {
		return {
			// ask: [],
		};
	},
	created() {
		this.$store.dispatch("FETCH_ASK");
	},
};
</script>

<style scoped>
</style>
