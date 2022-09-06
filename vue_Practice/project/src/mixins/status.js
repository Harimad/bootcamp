export default {
  create() {},
  mounted() {
    console.log(this.$route.path)
  },
  unmounted() {
    console.log(this.$route.path)
  },
  methods: {}
}
