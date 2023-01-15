<template>
  <div class="container">
    <h1 class="food-name">{{ food.name }}</h1>
    <img
      v-for="image in food.images"
      :src="image"
      :alt="food.name"
      class="food-image"
    />

    <div v-for="(section, head) in food.sections" class="section">
      <h2>{{ head }}</h2>
      <li v-for="item in section">{{ item }}</li>
    </div>
  </div>
</template>

<script>
import db from "../database.json";
export default {
  data() {
    return {
      food: {},
    };
  },
  created() {
    this.food = db.foods.find((food) => food.id == this.$route.params.id);
  },
};
</script>

<style scoped>
.container {
  padding: 0 5vw;
  padding-bottom: 1rem;
}

.container > * {
  margin: 1rem auto 0 auto;
}

.food-name {
  color: var(--font2-color);
  text-align: center;
  font-size: clamp(1.2rem, 8vw, 3rem);
}

.food-image {
  display: block;
  max-height: 400px;
  height: 40vw;
  border-radius: 30px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
}

.section h2 {
  color: var(--font2-color);
  font-size: clamp(1.2rem, 6vw, 2rem);
}

.section li {
  margin-bottom: 0.25rem;
  color: black;
}
</style>
