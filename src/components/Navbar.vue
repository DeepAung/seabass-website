<template>
  <div class="navbar-container">
    <div class="left-side">
      <RouterLink to="/" class="logo">ปลากะพง</RouterLink>
      <MenuIcon @toggle="toggle = !toggle" />
    </div>

    <div class="right-side">
      <Transition>
        <ul v-if="toggle || screenWidth > 780" class="items">
          <li><RouterLink to="/">หน้าหลัก</RouterLink></li>
          <li><RouterLink to="/about">เกี่ยวกับ</RouterLink></li>
          <DropdownMenu />

          <SearchBar class="search-bar" />
        </ul>
      </Transition>

      <ThemeToggle class="theme-toggle" />
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import store from "../store.js";

import MenuIcon from "./MenuIcon.vue";
import SearchBar from "./SearchBar.vue";
import ThemeToggle from "./ThemeToggle.vue";
import DropdownMenu from "./DropdownMenu.vue";

export default {
  components: {
    MenuIcon,
    SearchBar,
    ThemeToggle,
    DropdownMenu,
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

<style>
.navbar-container {
  position: relative;
  background-color: var(--first-color);
  padding: 0 5vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 3px 10px 1px rgba(0, 0, 0, 0.3);
  transition: background-color 0.25s ease-out;
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

  height: 100%;
}

.right-side .theme-toggle {
  margin-left: min(3vw, 3rem);
}

/* right-side > items ------------------------------------- */

.right-side .items {
  font-weight: 500;

  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
}

.right-side .items li {
  list-style: none;

  display: flex;
  align-items: center;
}

.right-side .items > * {
  margin: 0 1rem;
  height: 100%;
}

.right-side .items li * {
  text-decoration: none;
  font-size: 1rem;

  display: inline-block;
  position: relative;
  transition: color 0.25s ease-out;
}

.right-side .items li *:hover {
  color: var(--hover-color);
}

.right-side .items li *::after {
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

.right-side .items li *:hover::after {
  transform: translateZ(0) scaleX(1);
  background-color: var(--hover-color);
  transform-origin: bottom center;
}

/* media -------------------------------------------- */

@media only screen and (max-width: 900px) and (min-width: 780px) {
  .left-side .logo {
    font-size: 3.6vw;
  }

  .right-side .items > * {
    margin: 0 1vw;
  }

  .right-side .items li * {
    font-size: 2vw;
  }
}

@media only screen and (max-width: 780px) {
  .left-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .right-side .items {
    display: block;
    position: absolute;
    top: 100%;
    left: 0%;

    width: 100%;
    height: fit-content;
    padding-bottom: 0.5rem;
    background-color: var(--first-color);
  }

  .right-side .items > * {
    margin: 1rem;
  }

  .right-side .items .search-bar {
    max-width: none;
    width: auto;
  }

  /* items transition */

  .right-side .items {
    transform-origin: top;
    transition: transform 0.25s ease-out, background-color 0.25s ease-out;
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

  .right-side .items > * {
    transition: all 0.25s ease-out;
  }

  .v-enter-active > * {
    transition: all 0.25s ease-out;
    transition-delay: 0.25s;
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
