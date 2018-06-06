<template>
  <div class="top">
    <Keyvisual/>
    <Skills/>
    <Works/>
  </div>
</template>

<script>
import Keyvisual from '@/components/Keyvisual'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
export default {
  components: { Keyvisual, Skills, Works },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
