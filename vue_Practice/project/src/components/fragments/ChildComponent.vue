<template>
  <div>
    <h3>부모로 부터 값 받기(props)</h3>
    <p>{{ str }}</p>
    <p>{{ num }}</p>
    <p>{{ isOk }}</p>
    <p>{{ arr }}</p>
    <p>{{ obj }}</p>

    <p>{{ region }}</p>

    <hr />
    <br /><br />

    <h3>자식 -> 부모로 값 넘기기( this.$emit(함수, 넘길값) )</h3>
    <select @change="callParent" v-model="selectedNum">
      <option :value="num" :key="num" v-for="num in arr">{{ num }}</option>
    </select>

    <hr />
    <br /><br />

    <button @click="callParent">부모에게 데이터 전달</button>
  </div>
</template>
<script>
export default {
  props: {
    str: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      default: 0
    },
    isOk: {
      type: Boolean,
      default: false
    },
    arr: {
      type: Array,
      default: function () {
        return []
      }
    },
    obj: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  components: {},
  data() {
    return {
      selectedNum: 1,
      region: 'Jeju'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    callParent() {
      this.$emit('change-num', this.selectedNum)
    },
    printMessage() {
      console.log('메시지 출력')
    }
  }
}
</script>
