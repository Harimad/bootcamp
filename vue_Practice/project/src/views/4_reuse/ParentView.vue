<template>
  <div>
    <child-component
      :str="strParent"
      :num="numParent"
      :isOk="isOkParent"
      :arr="arrParent"
      :obj="objParent"
      @change-num="getData"
      ref="child1"
    />
    <br /><br />
    <h3>자식 컴포넌트에 있는 값 변경</h3>
    <button @click="changeValue" ref="btn">변경</button>
  </div>
</template>
<script>
import ChildComponent from '@/components/fragments/ChildComponent.vue'
export default {
  components: { ChildComponent },
  data() {
    return {
      strParent: '하리매드',
      numParent: 99,
      isOkParent: true,
      arrParent: [111, 222, 333, 444, 555],
      objParent: { name: 'John' }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getData(data) {
      console.log('자식 컴포넌트에서 이벤트 호출')
      console.log(data)
    },
    changeValue() {
      this.$refs.child1.region = 'Seoul'
      this.$refs.child1.printMessage()
    }
  }
}
</script>
