<template>
  <div>
    <input
      type="checkbox"
      name=""
      id="html"
      value="HTML"
      v-model="favoriteLang"
    />
    <label for="html">HTML</label>
    <input
      type="checkbox"
      name=""
      id="css"
      value="CSS"
      v-model="favoriteLang"
    />
    <label for="css">CSS</label>
    <input
      type="checkbox"
      name=""
      id="js"
      value="JavaScript"
      v-model="favoriteLang"
    />
    <label for="js">JS</label>

    <p>선택한 지역: {{ favoriteLang }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ['JavaScript']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
