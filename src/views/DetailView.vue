<template>
  <div class="Header">
    <img v-for="image in food.images" :src="image" alt="" />
    <h1>{{ food.name }}</h1>
    <div class="Section" v-for="section,head in food.sections">
      <h2>{{ head }}</h2>
      <p v-for="item in section">{{ item }}</p>
    </div>
  </div>
</template>

<script>
import db from "../database.json";
export default{
  data(){
    food:{}
  },
  created(){
    this.food = db.foods.find(food => food.id == this.$route.params.id) 
  }
}
</script>

<style scoped>
* {
  color: #000;
}
</style>