<template>
  <div class="navbar-container">
    <div class="left-side">
      <RouterLink to="/" class="logo">รายการอาหาร</RouterLink>
      <div @click="toggle = !toggle" class="menu-icon">
        <input type="checkbox" />
        <span class="first-span"></span>
        <span class="second-span"></span>
        <span class="third-span"></span>
      </div>
    </div>

    <div class="right-side">
      <Transition>
        <ul v-if="toggle || screenWidth > 780" class="items">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><a :href="mathPath" target="_blank">กลุ่มสาระคณิตศาสตร์</a></li>
          <SearchBar class="search-bar" />
        </ul>
      </Transition>

      <ThemeToggle class="theme-toggle" />
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import SearchBar from "../components/SearchBar.vue";
import ThemeToggle from "./ThemeToggle.vue";
import { store } from "../store.js";

export default {
  components: {
    SearchBar,
    ThemeToggle,
  },
  data() {
    return {
      toggle: false,
      screenWidth: 0,
      mathPath: store.mathPath,
    };
  },
  mounted() {
    this.screenWidth = window.innerWidth;

    window.addEventListener(
      "resize",
      () => {
        this.screenWidth = window.innerWidth;
      },
      { passive: true }
    );
  },
};
</script>

<style scoped>
.navbar-container {
  position: relative;
  background-color: var(--first-color);
  padding: 0 5vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.562);
}

/* left-side > logo --------------------------------------- */

.left-side .logo {
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.25s ease-out;
}

.left-side .logo:hover {
  color: var(--hover-color);
}

/* right-side -------------------------------------------- */
.right-side {
  display: flex;
  align-items: center;
}

.right-side .theme-toggle {
  margin-left: min(3vw, 3rem);
}

/* right-side > items ------------------------------------- */

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

.items > * {
  margin: 0 1rem;
}

.items li * {
  text-decoration: none;
  font-size: 1rem;

  display: inline-block;
  position: relative;
  transition: color 0.25s ease-out;
}

.items li *:hover {
  color: var(--hover-color);
}

.items li *::after {
  content: "";
  position: absolute;
  width: 100%;
  transform: translateZ(0) scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;

  transform-origin: bottom center;
  transition: transform 0.25s ease-out, background-color 0.25s ease-out;
}

.items li *:hover::after {
  transform: translateZ(0) scaleX(1);
  background-color: var(--hover-color);
  transform-origin: bottom center;
}

/* right-side > menu-icon ------------------------------------- */

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

/* media -------------------------------------------- */

@media only screen and (max-width: 970px) and (min-width: 780px) {
  .left-side .logo {
    font-size: 3vw;
  }

  .items > * {
    margin: 0 1vw;
  }

  .items li * {
    font-size: 1.5vw;
  }
}

@media only screen and (max-width: 780px) {
  .left-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .menu-icon {
    display: block;
  }
  .items {
    display: block;
    position: absolute;
    top: 100%;
    left: 0%;

    width: 100%;
    height: fit-content;
    padding-bottom: 0.5rem;
    background-color: var(--first-color);
  }

  .items > * {
    margin: 1rem;
  }

  .items .search-bar {
    max-width: none;
    width: auto;
  }

  /* items transition */

  .items {
    transform-origin: top;
    transition: all 0.3s ease-out;
  }

  .v-enter-from,
  .v-leave-to {
    transform: scale(1, 0);
  }

  .v-enter-to,
  .v-leave-from {
    transform: scale(1, 1);
  }

  /* items links transition */

  .items > * {
    transition: all 0.3s ease-out;
  }

  .v-enter-active > * {
    transition: all 0.3s ease-out;
    transition-delay: 0.3s;
  }

  .v-leave-active > * {
    transition: all 0.1s ease-out;
  }

  .v-enter-from > *,
  .v-leave-to > * {
    opacity: 0;
  }
}

@media only screen and (max-width: 380px) {
  .left-side .logo {
    font-size: calc(10vw - 0.5rem);
  }
}
</style>
