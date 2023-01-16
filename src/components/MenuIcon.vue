<template>
  <div @click="emitToggle" class="menu-icon">
    <input type="checkbox" />
    <span class="first-span"></span>
    <span class="second-span"></span>
    <span class="third-span"></span>
  </div>
</template>

<script>
export default {
  emits: ["toggle"],
  methods: {
    emitToggle() {
      this.$emit("toggle");
    },
  },
};
</script>

<style>
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
  background-color: var(--font-color);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background-color 0.25s ease-out, opacity 0.55s ease;
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

@media only screen and (max-width: 780px) {
  .menu-icon {
    display: block;
  }
}
</style>
