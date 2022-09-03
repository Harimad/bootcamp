<template>
  <div>
    <p>부모에게서 받은 size: {{ size }}</p>
    <p>부모에게서 받은 str: {{ str }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  inject: ['size', 'str'],
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
