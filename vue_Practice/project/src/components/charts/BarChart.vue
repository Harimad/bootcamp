<template>
  <apexchart
    type="bar"
    :width="width"
    :height="height"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>
<script>
export default {
  components: {},
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    title: {
      type: String,
      defualt: ''
    },
    legendPosition: {
      type: String,
      default: 'bottom'
    },
    categories: {
      type: Array,
      default: function () {
        return []
      }
    },
    series: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      chartOptions: {
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true
          }
        },
        dataLabels: {
          position: 'top'
        },
        stroke: {
          width: 1, //  차트의 막대에 얇은 border
          colors: ['#000000'] // 검정색
        },
        xaxis: {
          categories: []
        },
        legend: {
          show: true,
          position: this.legendPosition // <- props에서 가져옴
        },

        title: {
          text: this.title
        }
      }
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.chartOptions.xaxis.categories = this.categories
  },
  unmounted() {},
  methods: {}
}
</script>
