export default {
  created() {
    console.log('formatter created')
  },
  mounted() {
    console.log('formatter mounted')
  },
  unmounted() {},
  methods: {
    $convertDateFormat(d, f) {
      // 첫번째 인자 : d - '20220601' or Data()
      // 두번쨰 인자 : f - 'YYYY-MM-DD' 'MM-DD-YYYY'
      let year = ''
      let month = ''
      let day = ''
      if (typeof d === 'string' && d.length === 8) {
        year = d.substr(0, 4)
        month = d.substr(4, 2)
        day = d.substr(6, 2)
      } else if (typeof d === 'object') {
        year = d.getFullYear()
        month = (d.getMonth() + 1).toString().padStart(2, 0)
        day = (d.getDate() + 1).toString().padStart(2, 0)
      }

      return f.replace('YYYY', year).replace('MM', month).replace('DD', day)
    }
  }
}
