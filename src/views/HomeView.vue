<template>
  <div class="food-container">
    <FoodItem v-for="food in foodList" :food="food" />
  </div>
</template>

<script>
import db from "../database.json";
import FoodItem from "../components/FoodItem.vue";


export default {
  components: {
    FoodItem,
  },
  data() {
    return {
      foodList: [],
    };
  },
  mounted() {
    this.foodList = db.foods;
  },
};
</script>

<style scoped>
.food-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 2rem;
  gap: 2rem;
}


@media only screen and (max-width: 360px) {
  .food-container {
    grid-template-columns: repeat(1, auto);
    padding: 1.5rem;
    gap: 1.5rem;
  }
}
</style>
