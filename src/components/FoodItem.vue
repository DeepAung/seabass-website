<template>
  <div @click="goToDetail(food.id)" class="item-container">
    <div class="img-wrapper">
      <img :src="food.images[0]" alt="" />
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

<style>
* {
  transition: all 0.3s;
}

.item-container {
  height: 35vh;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
}

.item-container .img-wrapper {
  width: 100%;
  height: 75%;
  overflow: hidden;
}

.item-container .img-wrapper img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.item-container:hover .img-wrapper img {
  transform: scale(1.1);
  filter: contrast(1.1);
}

.item-container .info {
  font-weight: 500;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);

  width: 100%;
  height: 25%;
  background-color: var(--second-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
