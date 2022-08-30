<template>
  <div>
    <h3>v-bind하기 & 축약형</h3>
    <input type="text" v-bind:value="userId" readonly />
    <input type="text" :value="userId" readonly />

    <br />
    <hr />

    <h3>img의 src 속성과 단방향 데이터 바인딩</h3>
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />

    <br />
    <hr />

    <h3>button의 disabled 속성과 단방향 데이터 바인딩</h3>
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'harimad',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
