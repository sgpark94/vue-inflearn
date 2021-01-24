<template>
  <div>
    <!-- <p v-for="user in this.$store.state.news">{{ news.title }}</p> -->
    <p v-for="item in fetchedNews">
		<a :href="item.url">
			{{ item.title }}
		</a>
		<small>{{ item.time_ago }} {{ item.user }}</small>
	</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	data() {
		return {};
	},
	computed: {
		...mapGetters(["fetchedNews"]),

		// ...mapState(["news"]),

		// 다른 이름을 쓰고 싶다면 객체로 써줄 것.
		// ...mapState({
		// 	news: (state) => state.news,
		// }),

		// news(){
		// 	return this.$store.state.news;
		// }
	},
	created() {
		this.$store.dispatch("FETCH_NEWS");
	},
};
</script>

<style scoped>
</style>
