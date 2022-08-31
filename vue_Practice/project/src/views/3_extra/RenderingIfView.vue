<template>
  <div>
    <h3>더 나은 방법론: 'G'가 많을거라 예상할 땐 'G'먼저 조건걸기</h3>
    <div v-if="userRole === 'G'">
      <button>조회</button>
    </div>
    <div v-else-if="userRole === 'M'">
      <button>조회</button><button>생성</button>
    </div>
    <div v-else>
      <button>조회</button><button>생성</button><button>삭제</button>
    </div>

    <h3>좋지 않은 방법론: 사용자가 적은 'A'를 먼저 조건에 걸때</h3>
    <div v-if="userRole === 'A'">
      <button>조회</button><button>생성</button><button>삭제</button>
    </div>
    <div v-else-if="userRole === 'M'">
      <button>조회</button><button>생성</button>
    </div>
    <div v-else>
      <button>조회</button>
    </div>

    <h3>v-if에 일일이 조건 걸어줘도됨.</h3>
    <button v-if="userRole === 'A' || userRole === 'M' || userRole === 'G'">
      조회
    </button>
    <button v-if="userRole === 'A' || userRole === 'M'">생성</button>
    <button v-if="userRole === 'G'">삭제</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userRole: 'A' // A(Admin), M(Manager), G(General)
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
