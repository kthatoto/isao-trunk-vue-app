<template>
  <div class="skills">
    <h2>SKILLS</h2>
    <ul class="skills__list">
      <li v-for="skill in skills" class="skills__item">{{ skill }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      skills: [
        'JavaScript', 'Vue.js'
      ]
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.skills {
  color: white;
  background-color: navy;
  padding: 50px 0;
}
.skills h2 {
  text-align: center;
}
.skills__list {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
.skills__item {
  display: inline-block;
  background-color: white;
  color: navy;
  padding: 5px 10px;
  margin: 5px;
  font-weight: bold;
  border-radius: 3px;
}
</style>
