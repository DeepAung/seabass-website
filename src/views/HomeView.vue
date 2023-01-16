<template>
  <WaveBackground />
  <div class="home-container">
    <h1 class="head">
      ยินดีต้อนรับเข้าสู่เว็บไซต์โครงงานบูรณาการ ปลากะพง <br />
      มัธยมศึกษาปีที่ 5/8 ปีการศึกษา 2565
    </h1>

    <div class="logo">
      <img v-if="!imageError" src="/logo-01.svg" @error="imageError = true" />
      <h1 v-else>ปลากะพง</h1>
    </div>

    <button @click="goToFoodListView()" class="main-btn">
      เข้าสู่หน้ารายการอาหาร
    </button>
  </div>
</template>

<script>
import WaveBackground from "../components/WaveBackground.vue";
export default {
  components: {
    WaveBackground,
  },
  data() {
    return {
      imageError: false,
    };
  },
  methods: {
    goToFoodListView() {
      this.$router.push("/food-list");
    },
  },
};
</script>

<style scoped>
* {
  color: white;
}

.home-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 80px);
  padding: 2rem 0;
}

.head {
  text-align: center;
}

.head {
  font-size: min(4vw, 2rem);
  margin-right: 0.5rem;
}

.logo h1 {
  color: var(--hover-color);
  font-size: min(10vw, 4rem);
}

.logo img {
  width: min(75vw, 500px);
  margin-bottom: 3rem;
}

.main-btn {
  position: relative;
  font-size: clamp(0.5rem, 4vw, 1.5rem);
  font-weight: 800;

  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 15px;

  cursor: pointer;

  color: var(--hover-color);
  background-color: rgba(0, 0, 0, 0);
  border: 3px solid var(--hover-color);
  transition: all 0.25s ease-out;
}

.main-btn:hover {
  color: white;
  background-color: var(--hover-color);
  border: 3px solid rgba(0, 0, 0, 0);
}
</style>
