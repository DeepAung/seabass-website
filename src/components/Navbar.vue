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
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      mathPath:
        "https://app.powerbi.com/view?r=eyJrIjoiMDNiMjFiOTktODJhZC00OTQwLTg2MDItMDllYTEwMDc4NDA1IiwidCI6IjQ5YTIwZmY1LTUxZGItNDYzMC05NmNhLTJjOWJiMTJlOTJiNCIsImMiOjEwfQ%3D%3D&pageName=ReportSection5c6c13d0c689b14be980",
    };
  },
};
</script>

<style scoped>
.navbar-container {
  background-color: var(--first-color);
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.562);
}

.head {
  flex-grow: 0.5;
  text-align: center;
}

.head > * {
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
}

.head > *:hover {
  color: var(--nav-hover-color);
  font-size: 2.1rem;
}

.items {
  font-weight: 500;

  height: 100%;
  flex-grow: 2;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  margin-right: 5vw;
}

.items > * {
  margin: 0 1rem;
  text-decoration: none;
  font-size: 1rem;
}

.items > *:hover {
  color: var(--nav-hover-color);
  font-size: 1.1rem;
}

@media only screen and (max-width: 700px) {
  .head > * {
    font-size: 3vw;
    font-weight: 600;
    text-decoration: none;
  }

  .head > *:hover {
    font-size: 3.1vw;
  }

  .items > * {
    font-size: 2.3vw;
  }

  .items > *:hover {
  font-size: 2.4vw;
}
}
</style>
