<template>
  <div>
    <h3>💡Input v-model로 양방향 데이터 바인딩 하기</h3>
    <input type="text" v-model="userId" />
    <p>userId : {{ userId }}</p>
    <button @click="myFunction">클릭(userId값 확인)</button>
    <button @click="changeData">변경(userId값 변경)</button>
    <br />
    <hr />
    <br />
    <h3>💡input v-model로 문자 더하기</h3>
    <input type="text" v-model="num1" /> +
    <input type="text" v-model="num2" /> =
    <span>{{ num1 + num2 }}</span>
    <br />
    <hr />
    <br />
    <h3>💡input v-model.number로 숫자 더하기</h3>
    <input type="text" v-model.number="num3" /> +
    <input type="text" v-model.number="num4" /> =
    <span>{{ num3 + num4 }}</span>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'harimad',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = '하리매드'
    }
  }
}
</script>
