<template>
  <div class="top">
    <Keyvisual/>
    <Skills/>
    <Works/>
    <Footer/>
  </div>
</template>

<script>
import Keyvisual from '@/components/Keyvisual'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import Footer from '@/components/Footer'
export default {
  components: { Keyvisual, Skills, Works, Footer },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
