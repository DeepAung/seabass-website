<template>
  <section class="made-by">
    <h1 class="head">จัดทำโดย</h1>
    <p>
      นักเรียนชั้นมัธยมศึกษาปีที่ 5/8 <br />
      กลุ่มสาระการงานอาชีพและเทคโนโลยี
    </p>
  </section>
  <section class="sname">
    <h1 class="head">สมาชิกกลุ่ม</h1>

    <li>
      <div>นายพลกฤต แจ้งตามธรรม</div>
      <div>ม.5/8 เลขที่ 18</div>
    </li>
    <li>
      <div>นายอชิระ อังสุมาล</div>
      <div>ม.5/8 เลขที่ 21</div>
    </li>
    <li>
      <div>นายณัฐภัทร วีระนพสิทธิ์</div>
      <div>ม.5/8 เลขที่ 23</div>
    </li>
    <li>
      <div>นายอังศุชวาล สมิตชาติ</div>
      <div>ม.5/8 เลขที่ 27</div>
    </li>
    <li>
      <div>นายสุวิจักขณ์ กาญจนวรเสฏฐ์</div>
      <div>ม.5/8 เลขที่ 49</div>
    </li>
  </section>

  <section class="credits">
    <h1 class="head">แหล่งข้อมูล</h1>

    <div v-for="credit in credits">
      <a :href="credit" target="_blank">
        {{ credit }}
      </a>
    </div>
  </section>
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
}

section {
  padding: 1rem 0;
}

.head {
  font-size: min(5.25vw, 3rem);
  color: rgb(37, 56, 96);
}

.made-by p,
.sname li div,
.credits a {
  font-size: min(3.5vw, 2rem);
  /* font-size: 0.3rem; */
  color: var(--font2-color);
}

/* sname ----------------------------------------------------- */

.sname li {
  display: grid;
  grid-template-columns: 1fr min(55vw, 30rem) auto 1fr;
  gap: 1vw;
}

.sname li :first-child {
  grid-column-start: 2;
}

.sname li div {
  text-align: left;
}

/* credits ----------------------------------------------------- */

.credits a {
  transition: color 0.25s ease;
}

.credits a:hover {
  color: rgb(136, 164, 124);
}
</style>
