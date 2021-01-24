import axios from "axios";
// 기본적으로 node_modules에 설치된 라이브러리를 가져오는 것이므로 'axios'로만 적어주는 것.

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
	baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. API 함수들을 정리
function fetchAskList() {
	return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchJobsList() {
	return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchNewsList() {
	return axios.get(`${config.baseUrl}news/1.json`);
}

export { fetchAskList, fetchJobsList, fetchNewsList };
