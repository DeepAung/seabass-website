<template>
  <div @click="goToDetail(food.id)" class="item-container">
    <div class="img-wrapper">
      <img :src="food.images[0]" :alt="food.name" />
    </div>
    <div class="info">
      {{ food.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["food"],
  methods: {
    goToDetail(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>

<style scoped>
.item-container {
  height: 250px;
  width: 100%;
  max-width: 360px;
  margin: auto;

  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
}

.item-container:hover,
.item-container:focus {
  border-radius: 16px;
  outline: 0.2rem solid var(--hover-color);
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
}

.item-container .img-wrapper {
  width: 100%;
  height: 75%;
  overflow: hidden;
}

.item-container * {
  transition: all 0.3s;
}

.item-container .img-wrapper img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.item-container:hover .img-wrapper img {
  transform: scale(1.08);
  filter: contrast(1.1);
}

.item-container:hover .info {
  color: var(--hover-color);
}

.item-container .info {
  font-weight: 500;
  font-size: 110%;
  /* font-size: clamp(0.9rem, 1.5vw, 1.3rem); */

  width: 100%;
  height: 25%;
  background-color: var(--second-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
