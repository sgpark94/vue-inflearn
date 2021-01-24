<template>
  <div class="header">
    <img src="../assets/logo.svg" alt="logo" class="logo">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<style scoped>
.header {
	display: flex;
	align-items: center;
	padding: 8px 8px 8px 25px;
	background-color: #42b883;
	color: white;
}
.header a:visited {
	color: white;
}
.header a:active {
	color: #35495e;
}
.fixed {
	position: fixed;
	width: 100%;
	z-index: 999;
}
.logo {
	width: 30px;
	margin-right: 18px;
}
a {
	margin: 0 5px;
}
</style>
