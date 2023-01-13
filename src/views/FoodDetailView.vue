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
  color: var(--hover-color);
  padding-left: 1rem;
  text-align: center;
  font-size: 3rem;
}

.food-image {
  display: block;
  max-height: 400px;
  height: 40vw;
  border-radius: 30px;
  box-shadow: 0 0 3px var(--font-color);
}

.section h2 {
  color: var(--hover-color);
}

.section li {
  margin-bottom: 0.25rem;
}

@media only screen and (max-width: 600px) {
  .food-name {
    font-size: 8vw;
  }
}
</style>
