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
  grid-template-columns: repeat(4, 1fr);
  padding: 2vw;
  gap: 2vw;
}

@media only screen and (max-width: 1100px) {
  .food-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 700px) {
  .food-container {
    grid-template-columns: repeat(2, 1fr);
    padding: 8vw 5vw;
    gap: 5vw;
  }
}

@media only screen and (max-width: 500px) {
  .food-container {
    grid-template-columns: repeat(1, 1fr);
    padding: 8vw 15vw;
    gap: 15vw;
  }
}
</style>
