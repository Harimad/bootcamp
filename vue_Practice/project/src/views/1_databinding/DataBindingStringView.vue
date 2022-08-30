<template>
  <div>
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: 'John Doe',
      message: 'welcome to KOREA',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped>
.text-red {
  color: red;
}
</style>
