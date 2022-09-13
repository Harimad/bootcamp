<template>
  <div>
    <apexchart
      width="100%"
      height="400px"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: '매출',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        },
        {
          name: '매입',
          data: [25, 35, 40, 49, 44, 52, 76, 102]
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
