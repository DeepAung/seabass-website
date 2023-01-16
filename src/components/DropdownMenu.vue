<template>
  <div class="dropdown">
    <li class="button"><div>กลุ่มสาระวิชาต่างๆ</div></li>
    <div class="content">
      <li><a :href="mathPath" target="_blank">กลุ่มสาระคณิตศาสตร์</a></li>
      <li>
        <RouterLink to="/food-list"
          >กลุ่มสาระการงานอาชีพและเทคโนโลยี</RouterLink
        >
      </li>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import store from "../store.js";

export default {
  data() {
    return {
      mathPath: store.mathPath,
    };
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
  height: 100%;
}

.content {
  display: block;
  position: absolute;
  top: 100%;
  left: auto;
  margin-left: -1.5rem;
  padding: 0 1.5rem;

  background-color: var(--first-color);

  transition: transform 0.25s ease-out, opacity 0.1s ease-out;
  transform-origin: top;

  transform: scale(0);
  opacity: 0;
}

.content li {
  margin: 1rem 0;
}

.button:is(:hover, :focus) ~ .content,
.content:is(:hover, :focus) {
  display: block;
  transform: scale(1);
  opacity: 1;

  transition: transform 0.25s ease-out, opacity 0.1s ease-out 0.15s;
}

@media only screen and (max-width: 780px) {
  .button {
    width: max-content;
  }

  .content {
    position: inherit;
    display: none;
  }

  .button:is(:hover, :focus) ~ .content,
  .content:is(:hover, :focus) {
    display: block;
  }
}
</style>
