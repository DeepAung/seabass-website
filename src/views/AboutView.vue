<template>
  <h1 class="head">จัดทำโดย</h1>
  <div class="sname">
      <li><div class="name">นายพลกฤต แจ้งตามธรรม</div>
          <div>ม.5/8 เลขที่ 18</div></li>
      <li><div class="name">นายอชิระ อังสุมาล</div>
        <div>ม.5/8 เลขที่ 21</div></li>
      <li><div class="name">นายณัฐภัทร วีระนพสิทธิ์</div>
        <div>ม.5/8 เลขที่ 23</div></li>
      <li><div class="name">นายอังศุชวาล สมิตชาติ</div>
        <div>ม.5/8 เลขที่ 27</div></li>
      <li><div class="name">นายสุวิจักขณ์ กาญจนวรเสฏฐ์</div>
        <div>ม.5/8 เลขที่ 49</div></li>
  </div>

  <div class="credits">
    <h1 class="head">
        เครดิต
    </h1>
    <a class="link" v-for="credit in credits" :href="credit" target="_blank">
        <li>{{ credit }}</li>
    </a>
  </div>
</template>

<script>
import db from "../database.json";
export default {
  data() {
    return {
      credits: {},
    };
  },
  created() {
    this.credits = db.credits;
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
li {
  list-style: none;
  font-size: 3vw;
  color: rgb(30, 117, 103);
}
.sname li{
    margin-left: 20vw;
    display: grid;
    grid-template-columns: 40vw 1fr;
    gap: 1vw;
}
.sname li div{
    text-align: left;
    color: rgb(30, 117, 103);
}
.head {
  font-size: 5vw;
  margin-top: 2vw;
  color: var(--first-color);
}

.credits {
    margin-top: 6vw;
}
.credits a {
    color: rgb(30, 117, 103);
}

.credits a:hover, .credits li:hover {
    color: rgb(136, 164, 124);
}
</style>
