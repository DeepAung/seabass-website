<template>
  <div class="navbar-container">
    <div class="head">
      <RouterLink to="/">รายการอาหาร</RouterLink>
    </div>
    <div class="items">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/">About</RouterLink>
      <a :href="mathPath" target="_blank">กลุ่มสาระคณิตศาสตร์</a>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      mathPath: "https://app.powerbi.com/view?r=eyJrIjoiMDNiMjFiOTktODJhZC00OTQwLTg2MDItMDllYTEwMDc4NDA1IiwidCI6IjQ5YTIwZmY1LTUxZGItNDYzMC05NmNhLTJjOWJiMTJlOTJiNCIsImMiOjEwfQ%3D%3D&pageName=ReportSection5c6c13d0c689b14be980",
    }
  }
};
</script>

<style scoped>
.navbar-container {
  height: 10vh;
  background-color: var(--first-color);
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.head {
  flex-grow: 1;
}

.head > * {
  font-size: xx-large;
  font-weight: 600;
  text-decoration: none;
}

.items {
  height: 100%;
  flex-grow: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  margin-right: 10%;
}

.items > * {
  margin: 0 1rem;
  text-decoration: none;
  font-size: 400;
}
</style>
