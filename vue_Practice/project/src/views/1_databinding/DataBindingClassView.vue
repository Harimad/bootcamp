<template>
  <div :class="{ 'text-red': hasError, active: isActive }">클래스 바인딩</div>
  <div :class="class2">클래스 바인딩2</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isActive: false,
      hasError: false,
      class2: ['active', 'text-red']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.active {
  background-color: aqua;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
