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
.item-container,
.item-container::after,
.item-container :is(img, .info) {
  transition: all 0.3s ease-out;
}

.item-container {
  height: 250px;
  width: 100%;
  max-width: 360px;
  margin: auto;
  position: relative;

  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.3);
}

.item-container::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 16px;
  border: 0.2rem solid rgba(0, 0, 0, 0);
}

.item-container:is(:hover, :focus) {
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
}

.item-container:is(:hover, :focus)::after {
  border: 0.2rem solid var(--hover-color);
}

.item-container .img-wrapper {
  width: 100%;
  height: 75%;
  overflow: hidden;
}

.item-container .img-wrapper img {
  display: block;
  height: 100.1%;
  width: 100.1%;
  object-fit: cover;
}

.item-container:hover .img-wrapper img {
  transform: scale(1.05);
  filter: contrast(1.1);
}

.item-container:hover .info {
  color: var(--hover-color);
}

.item-container .info {
  font-weight: 500;
  font-size: 120%;

  width: 100%;
  height: 25%;
  background-color: var(--second-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

@media only screen and (max-width: 360px) {
  .item-container {
    height: 50vw;
  }

  .item-container .info {
    font-size: 4.5vw;
  }
}
</style>
