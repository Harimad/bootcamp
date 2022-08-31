<template>
  <div>
    <input type="radio" id="ai" value="AI" v-model="favoriteField" />
    <label for="ai">인공지능</label>
    <input type="radio" id="iot" value="IOT" v-model="favoriteField" />
    <label for="iot">사물인터넷</label>
    <input
      type="radio"
      id="blockchain"
      value="BLOCKCHAIN"
      v-model="favoriteField"
    />
    <label for="blockchain">블록체인</label>
    <input type="radio" id="other" value="OTHER" v-model="favoriteField" />
    <label for="other">기타</label>
    <br /><br />
    <div v-show="favoriteField === 'OTHER'">
      <input type="text" value="v-show사용 -> DOM 올라감" />
    </div>
    <hr />
    <div v-if="favoriteField === 'OTHER'">
      <input type="text" value="v-if사용 -> DOM 안올라감" />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteField: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
