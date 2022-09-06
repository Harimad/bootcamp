<template>
  <div></div>
</template>
<script>
// import Formatter from '@/mixins/formatter'
import Status from '@/mixins/status'
// import Axios from '@/mixins/axios'
export default {
  components: {},
  mixins: [Status],
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {
    console.log('MixinView created')
  },
  mounted() {
    console.log('MixView mounted')
    console.log(this.$convertDateFormat('20220601', 'YYYY-MM-DD')) // 2022-06-01
    console.log(this.$convertDateFormat('20220601', 'MM.DD.YYYY')) // 06.01.2022

    console.log(this.$convertNumberFormat(2547500, '#,###')) // 2,547,500
    console.log(this.$convertNumberFormat(2547500, '#,###.#0')) // 2,547,500.00
    console.log(this.$convertNumberFormat(2547500.4, '#,###.#0')) // 2,547,500.40
    console.log(this.$convertNumberFormat(2547500.4, '#,###.##')) // 2,547,500.4
    console.log(this.$convertNumberFormat(-2547500.4, '#,###.##')) // -2,547,500.4
    console.log(this.$convertNumberFormat(-2547500.4, '$#,###.##')) // -$2,547,500.4
    console.log(this.$convertNumberFormat(125.23, '#,###.#0%')) // 125.23%
    console.log(this.$convertNumberFormat(125.5, '#,###.#0%')) // 125.50%
    console.log(this.$convertNumberFormat(125, '#,###원')) // 125원

    this.getCustomers()
  },
  unmounted() {},
  methods: {
    async getCustomers() {
      const customers = await this.$get('http://localhost:3000/customers')
      console.log(customers)
    }
  }
}
</script>
