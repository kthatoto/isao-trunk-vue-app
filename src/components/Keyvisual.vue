<template>
  <div class="keyvisual">
    <img src="@/assets/cat.jpg" class="keyvisual__image">
    <h1>{{ user.name }}</h1>
    <h2>{{ user.copy }}</h2>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: {
        name: 'ねこ',
        copy: '我輩は猫である'
      }
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.keyvisual {
  height: auto;
  min-height: 400px;
  background-color: green;
  position: relative;
  &__image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid white;
    position: absolute;
    margin: auto;
    top: 50px;
    left: 0;
    right: 0;
  }
  h1, h2 {
    color: white;
    text-align: center;
  }
  h1 {
    padding-top: 250px;
    font-size: 1.5rem;
  }
  h2 {
    margin-top: 10px;
    font-size: 2rem;
  }
}
</style>
