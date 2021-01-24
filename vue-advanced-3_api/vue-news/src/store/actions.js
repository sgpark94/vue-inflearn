import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index";

export default {
	FETCH_NEWS({ commit }) {
		fetchNewsList()
			.then((res) => {
				commit("SET_NEWS", res.data); // mutataion에 data를 넘길 수 있다.
			})
			.catch((err) => {
				console.log(err);
			});
	},
	FETCH_JOBS({ commit }) {
		fetchJobsList()
			.then(({ data }) => {
				commit("SET_JOBS", data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	FETCH_ASK({ commit }) {
		fetchAskList()
			.then(({ data }) => {
				commit("SET_ASK", data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	FETCH_NEWS({ commit }) {
		fetchNewsList()
			.then((res) => {
				commit("SET_NEWS", res.data); // mutataion에 data를 넘길 수 있다.
			})
			.catch((err) => {
				console.log(err);
			});
	},
	FETCH_JOBS({ commit }) {
		fetchJobsList()
			.then(({ data }) => {
				commit("SET_JOBS", data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	FETCH_ASK({ commit }) {
		fetchAskList()
			.then(({ data }) => {
				commit("SET_ASK", data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
