<template>
  <WaveBackground />
  <div class="home-container">
    <div class="content">
      <div class="head">
        <h1>ยินดีต้อนรับเข้าสู่เว็บไซต์โครงงานบูรณาการ</h1>
        <h1>ปลากะพง</h1>
      </div>
      <h3>กลุ่มสาระวิชาคอมพิวเตอร์และการงานอาชีพ</h3>
    </div>

    <button @click="goToFoodListView()" class="main-btn">
      เข้าสู่หน้าหลัก
    </button>
  </div>
</template>

<script>
import WaveBackground from "../components/WaveBackground.vue";
export default {
  components: {
    WaveBackground,
  },
  methods: {
    goToFoodListView() {
      this.$router.push("/food-list");
    },
  },
};
</script>

<style scoped>
h3 {
  font-size: min(3.125vw, 1.25rem);
}

.home-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80vh;
}

.head {
  margin-top: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.head :first-child {
  font-size: min(5vw, 2rem);
}

.head :nth-child(2) {
  color: var(--hover-color);
  font-size: min(10vw, 4rem);
}

.main-btn {
  position: relative;
  font-size: 1.5rem;
  font-weight: 800;

  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 15px;

  cursor: pointer;
  bottom: 0;

  color: var(--hover-color);
  background-color: rgba(0, 0, 0, 0);
  border: 3px solid var(--hover-color);
  transition: all 0.2s ease-out;
}

.main-btn:hover {
  color: white;
  background-color: var(--hover-color);
  border: 3px solid rgba(0, 0, 0, 0);
}

@media only screen and (max-width: 1000px) {
  .head {
    flex-direction: column;
  }
}
</style>
