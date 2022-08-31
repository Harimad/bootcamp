<template>
  <div>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
  </div>
  <h1>{{ fullName }}</h1>
  <p>{{ title }} {{ firstName }}, {{ lastName }}</p>
  <p>{{ title }} {{ firstName }}, {{ lastName }}</p>
  <p>{{ title }} {{ firstName }}, {{ lastName }}</p>
  <p>{{ fullName }}</p>
  <div>
    <label for="age">What is your age?</label>
    <input type="text" id="age" v-model="age" />
  </div>
  <p>{{ age >= 20 ? 'Adult' : 'Not Adult' }}</p>
  <p>{{ isAdult }}</p>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Mr.',
      age: 0
    }
  },
  computed: {
    fullName() {
      return this.title + ' ' + this.firstName + ', ' + this.lastName
    },
    isAdult() {
      return this.age >= 20 ? 'Adult' : 'Not Adult'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
