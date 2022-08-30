<template>
  <div>
    <input type="radio" name="" id="html" value="HTML" v-model="favoriteLang" />
    <label for="html">HTML</label>
    <input type="radio" name="" id="css" value="CSS" v-model="favoriteLang" />
    <label for="css">CSS</label>
    <input type="radio" name="" id="js" value="JS" v-model="favoriteLang" />
    <label for="js">JS</label>

    <p>선택한 지역: {{ favoriteLang }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      // 라디오는 1개만 선택하기 때문에 배열말고 문자열로 변수 선언함.
      // favoriteLang: ['JS']
      favoriteLang: 'JS'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
