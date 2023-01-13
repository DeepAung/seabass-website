<template>
  <div class="app-container">
    <Navbar class="navbar" />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  height: 80px;

  top: 0;
  z-index: 9999;
}

.app-container {
  padding-top: 80px;
}
</style>
