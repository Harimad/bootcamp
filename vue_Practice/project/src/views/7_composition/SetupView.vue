<template>
  <div>
    <h2>일반 Calculator</h2>
    <div>
      <input type="text" v-model.number="num1" @keyup="plusNumber" />
      <span>+</span>
      <input type="text" v-model.number="num2" @keyup="plusNumber" />
      <span>=</span>
      <span>{{ result }}</span>
    </div>
    <hr />
    <h2>CompositionAPI Calculator2</h2>
    <div>
      <input type="text" v-model.number="state.num1" @keyup="plusNumber2" />
      <span>+</span>
      <input type="text" v-model.number="state.num2" @keyup="plusNumber2" />
      <span>=</span>
      <span>{{ state.result }}</span>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  components: {},
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  },
  // computed: {
  //   result() {
  //     return this.num1 + this.num2
  //   }
  // },
  // Composition API
  setup() {
    const state = reactive({
      // 실시간 변경사항에 대한 반응형
      num1: 0,
      num2: 0,
      result: 0
    })
    // const n = reactive(5); // reactive는 객체나 배열만 반응한다. 문자, 숫자는 반응형이 아니다.
    function plusNumber2() {
      state.result = state.num1 + state.num2
    }

    return {
      state,
      plusNumber2
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    plusNumber() {
      this.result = this.num1 + this.num2
    }
  }
}
</script>
