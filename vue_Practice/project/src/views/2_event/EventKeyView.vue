<template>
  <div>
    <!-- <input type="search" @keyup="checkEnter($event)" v-model="searchText" /> -->
    <input type="search" @keyup.enter="doSearch" v-model="searchText" />
  </div>
  <button @click="doSearch">조회</button>
  <button type="submit" @click.prevent="doSearch">전송X&조회</button>
</template>
<script>
// .enter
// .tab
// .delete
// .esc
// .space
// .up
// .down
// .left
// .right
// .stop - event.stopPropagation()
// .prevent = event.preventDefault()
export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter(event) {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
