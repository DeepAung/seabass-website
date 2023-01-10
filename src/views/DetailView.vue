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
* {
  color: #000;
}

.container {
  padding: 0 5vw;
  padding-bottom: 1rem;
}

.container > * {
  margin: 1rem auto 0 auto;
}

.food-name {
  text-align: center;
}

.food-image {
  display: block;
  width: 100%;
  max-width: 700px;
  border-radius: 30px;
}

.section li {
  margin-bottom: 0.25rem;
}
</style>
