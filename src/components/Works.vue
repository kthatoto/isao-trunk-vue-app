<template>
  <div class="works">
    <h2>WORKS</h2>
    <div class="works__selected">
      <div class="works__head">
        <img :src="require(`@/assets/${works[selectedWorkIndex].image}`)" class="works__headImage">
      </div>
      <h3>{{ works[selectedWorkIndex].title }}</h3>
      <p class="works__description">{{ works[selectedWorkIndex].description }}</p>
    </div>
    <div class="works__list">
      <div v-for="(work, i) in works" :key="work.id" class="works__item" :class="{'-selected': i === selectedWorkIndex}">
        <img :src="require(`@/assets/${work.image}`)" class="works__image" @click="selectWork(i)">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedWorkIndex: 0,
      works: [
        {
          id: 0,
          title: '猫じゃらし',
          description: 'エノコログサ（狗尾草、学名：Setaria viridis）は、イネ科エノコログサ属の植物で、一年生草本である。ブラシのように長い穂の形が独特な雑草である。 夏から秋にかけてつける花穂が、犬の尾に似ていることから、犬っころ草（いぬっころくさ）が転じてエノコログサという呼称になったとされ、漢字でも「狗（犬）の尾の草」と表記する。ネコジャラシ（猫じゃらし）の俗称は、花穂を猫の視界で振ると、猫がじゃれつくことから。逆に猫をじゃらす、草状のものを「お遊び草」と呼ぶようになった。穀物のアワ（粟）の原種とされ、交雑もよくおこる。',
          image: 'nekojarashi.png'
        },
        {
          id: 1,
          title: 'またたび',
          description: 'マタタビ（木天蓼、Actinidia polygama ）は、マタタビ科マタタビ属の落葉蔓性木本である。別名夏梅ともいう。蔓は、若いうちは茶褐色で成長と共に黒っぽい紫がかった茶色になる。葉は蔓状の枝に互生し長い葉柄があり2から7cm、形は楕円形で細かい鋸歯を持つ。6月から7月に径2cmほどの白い花を咲かせる。雄株には雄蕊だけを持つ雄花を、両性株には雄蕊と雌蕊を持った両性花をつける。花弁のない雌蕊だけの雌花をつける雌株もある。花をつけるつるの先端部の葉は、花期に白化し、送粉昆虫を誘引するサインとなっていると考えられる。近縁のミヤママタタビでは、桃色に着色する。実は、2から2.5 cm の細長い楕円形で晩秋にオレンジ色に熟す。虫こぶの実（虫癭果）はマタタビミバエの産卵により形成[1]され正常な実が熟す前に落ちる。',
          image: 'matatabi.jpg'
        },
        {
          id: 2,
          title: 'キャットタワー',
          description: ' 猫のグッズ。大きさや高さは色々ある。麻縄が巻いてあると爪磨ぎもできる。飛び乗ったり飛び降りたりと、上下運動が出来て、運動不足解消にも役立つ。',
          image: 'cattower.jpg'
        },
        {
          id: 3,
          title: '猫じゃらし',
          description: '',
          image: 'nekojarashi.png'
        },
        {
          id: 4,
          title: '猫じゃらし',
          description: '',
          image: 'nekojarashi.png'
        }
      ]
    }
  },
  created () {
  },
  methods: {
    selectWork (i) {
      this.selectedWorkIndex = i
    }
  }
}
</script>
<style scoped>
.works {
  background-color: skyblue;
  padding: 50px 0;
  text-align: center;
  color: #444;
}
.works h2 {
  margin-bottom: 30px;
}
.works__head {
  width: 500px;
  height: 300px;
  margin: 0 auto;
  position: relative;
}
.works__headImage {
  border-radius: 5px;
  max-width: 500px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.works__description {
  width: 500px;
  margin: 0 auto;
  text-align: left;
  height: 200px;
  overflow-y: scroll;
  border: 1px solid gray;
  padding: 5px;
}
.works__list {
  width: 900px;
  overflow: auto;
  margin: 0 auto;
}
.works__item {
  width: 300px;
  height: 200px;
  padding: 25px;
  float: left;
}
.works__image {
  width: 250px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
}
.works__item.-selected .works__image {
  border: 2px solid gray;
  filter: opacity(75%);
}
</style>
