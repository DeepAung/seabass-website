<template>
  <div class="food-container">
    <FoodItem v-for="food in filteredFoodList" :food="food" />
  </div>
</template>

<script>
import db from "../database.json";
import store from "../store.js";
import FoodItem from "../components/FoodItem.vue";

export default {
  components: {
    FoodItem,
  },
  data() {
    return {
      foodList: db.foods,
    };
  },
  computed: {
    filteredFoodList() {
      if (store.searchInput == "") {
        return this.foodList;
      }

      return this.foodList.filter((food) => {
        let foodName = food.name.toLowerCase();
        let input = store.searchInput.toLowerCase();
        let result = foodName.includes(input);

        return result;
      });
    },
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
