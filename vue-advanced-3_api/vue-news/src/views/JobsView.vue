<template>
  <div>
    <p v-for="job in this.$store.state.jobs">{{ job.title }}</p>
  </div>
</template>

<script>
// import { fetchJobsList } from "../api/index";

export default {
	data() {
		return {
			// jobs: [],
		};
	},
	created() {
		this.$store.dispatch("FETCH_JOBS");
	},
};
</script>

<style scoped>
</style>
