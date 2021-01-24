<template>
  <div>
    <p v-for="item in fetchedAsk">
		<a :href="item.url">{{ item.title }}</a>
		<small> {{ item.time_ago }} {{ item.domain }}</small>
	</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
	computed: {
		...mapGetters(["fetchedAsk"]),
	},
	data() {
		return {};
	},
	created() {
		this.$store.dispatch("FETCH_ASK");
	},
};
</script>

<style scoped>
</style>
