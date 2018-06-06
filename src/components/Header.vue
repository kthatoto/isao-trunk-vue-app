<template>
  <div class="header">
    <img src="@/assets/cat.jpg" class="header__image">
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #333;
  width: 100%;
  height: 60px;
  &__image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid white;
    float: right;
    margin-top: 5px;
    margin-right: 5px;
  }
}
</style>
