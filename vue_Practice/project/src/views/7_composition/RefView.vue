<template>
  <div>
    <input type="text" v-model.number="state.num1" @keyup="plusNumber2" />
    <span>+</span>
    <input type="text" v-model.number="state.num2" @keyup="plusNumber2" />
    <span>=</span>
    <span>{{ state.result }}</span>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  components: {},
  data() {
    return {}
  },
  // Composition API
  setup() {
    const state = ref({
      // 실시간 변경사항에 대한 반응형
      num1: 0,
      num2: 0,
      result: 0
    })
    // const n = ref(5) // ref는 문자, 숫자도 반응형이다.

    function plusNumber2() {
      state.value.result = state.value.num1 + state.value.num2
    }

    return {
      state,
      plusNumber2
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
