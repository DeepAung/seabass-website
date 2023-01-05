<template>
  <div class="navbar-container">
    <div class="logo">
      <RouterLink to="/">รายการอาหาร</RouterLink>
    </div>
    <ul class="items">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/">About</RouterLink></li>
      <li><a :href="mathPath" target="_blank">กลุ่มสาระคณิตศาสตร์</a></li>
    </ul>
    <div class="menu-icon">
      <input type="checkbox" />
      <span class="first-span"></span>
      <span class="second-span"></span>
      <span class="third-span"></span>
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
  padding: 0 5vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.562);
}

/* logo -------------------------------------------- */

.logo * {
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
}

.logo *:hover {
  color: var(--nav-hover-color);
}

/* items -------------------------------------------- */

.items {
  font-weight: 500;

  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
}

.items li {
  list-style: none;
}

.items li * {
  margin: 0 1rem;
  text-decoration: none;
  font-size: 1rem;

  display: inline-block;
  position: relative;
  transition: color 0.25s ease-out;
}

.items li *:hover {
  color: var(--nav-hover-color);
}

.items li *::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;

  transform-origin: bottom center;
  transition: transform 0.25s ease-out, background-color 0.25s ease-out;
}

.items li *:hover::after {
  transform: scaleX(1);
  background-color: var(--nav-hover-color);
  transform-origin: bottom center;
}

/* menu-icon -------------------------------------------- */

.menu-icon {
  position: relative;
  display: none;
}

.menu-icon input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  cursor: pointer;
  opacity: 0;
  z-index: 999;
}

.menu-icon span {
  display: block;
  height: 0.2rem;
  width: 1.4rem;
  margin: 0.3rem 0;
  border-radius: 100px;
  background-color: white;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

.menu-icon .first-span {
  transform-origin: 0% 0%;
}
.menu-icon .third-span {
  transform-origin: 0% 100%;
}

.menu-icon input:checked ~ .first-span {
  transform: translate(4px, 0.55px) rotate(45deg);
}

.menu-icon input:checked ~ .second-span {
  opacity: 0;
}

.menu-icon input:checked ~ .third-span {
  transform: translate(4px, -0.55px) rotate(-45deg);
}

@media only screen and (max-width: 700px) {
  .items {
    display: none;
  }

  .menu-icon {
    display: block;
  }
}
</style>
