<template>
Hello, Home View
</template>

<script>
import db from "../database.json";

export default {
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

<style></style>
