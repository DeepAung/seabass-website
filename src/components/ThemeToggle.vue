<!-- https://uiverse.io/alexruix/splendid-liger-23 -->
<template>
  <label class="switch">
    <input @click.stop="toggleTheme" type="checkbox" />
    <span class="slider"></span>
  </label>
</template>

<script>
export default {
  data() {
    return {
      darkMode: true,
    };
  },
  mounted() {
    let body = document.querySelector("body");
    body.dataset.theme = "dark";
  },
  methods: {
    toggleTheme() {
      let body = document.querySelector("body");

      if (this.darkMode) {
        this.darkMode = false;
        body.dataset.theme = "white";
      } else {
        this.darkMode = true;
        body.dataset.theme = "dark";
      }
    },
  },
};
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  --background: #522ba7;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background);
  transition: 0.5s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 50%;
  left: 10%;
  bottom: 15%;
  box-shadow: inset 8px -4px 0px 0px #fff000;
  background: var(--background);
  transition: 0.5s;
}

input:checked + .slider {
  background-color: #28096b;
}

input:checked + .slider:before {
  transform: translateX(100%);
  box-shadow: inset 15px -4px 0px 15px #fff000;
}
</style>
