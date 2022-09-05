<template>
  <div>
    <div>
      <label for="email" class="form-label">이메일주소</label>
      <input type="email" id="email" class="form-control" v-focus />
    </div>
    <div>
      <label for="pw" class="form-label">비밀번호</label>
      <input type="password" id="pw" class="form-control" />
    </div>
    <div>
      <button class="btn btn-primary">로그인</button>
    </div>
    <br />
    <h3>Custom Directive : value만 있을 때</h3>
    <div v-color="color" style="height: 50px"></div>
    <br />
    <h3>Custom Directive : value가 객체일 때</h3>
    <div v-demo="{ color: 'red', text: 'hello!' }"></div>
    <br />
    <div>
      <h3>소문자로 만들어주는 Custom Directive</h3>
      <input type="text" class="form-control" v-lowercase />
      <br />
      <h3>대문자로 만들어주는 Custom Directive</h3>
      <input type="text" class="form-control" v-uppercase />
      <br />
      <h3>숫자만 입력하게 만들어주는 Custom Directive</h3>
      <input type="text" class="form-control" v-number />
      <hr />
      <input type="number" class="form-control" />
      <br />
      <h3>한글 입력하게 만들어주는 Custom Directive</h3>
      <input type="text" class="form-control" v-korean />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  directives: {
    // focus: {
    //   mounted(el, binding) {
    //     console.log(el)
    //     el.focus()
    //   }
    // },
    // lowercase: {
    //   mounted(el) {
    //     el.addEventListener('input', (event) => {
    //       console.log(event.target.value)
    //       event.target.value = event.target.value.toLowerCase()
    //     })
    //   }
    // },
    // uppercase: {
    //   mounted(el) {
    //     el.addEventListener('input', (event) => {
    //       console.log(event.target.value)
    //       event.target.value = event.target.value.toUpperCase()
    //     })
    //   }
    // },
    // number: {
    //   mounted(el) {
    //     el.addEventListener('input', (event) => {
    //       event.target.value = event.target.value.replace(/\D/g, '')
    //     })
    //   }
    // },
    // korean: {
    //   mounted(el) {
    //     el.addEventListener('input', (event) => {
    //       event.target.value = event.target.value.replace(
    //         /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
    //         ''
    //       )
    //     })
    //   }
    // },
    color: {
      mounted(el, binding) {
        console.log(binding.value)
        el.style.backgroundColor = binding.value
      }
    },
    demo: {
      mounted(el, binding) {
        el.innerText = binding.value.text
        el.style.color = binding.value.color
      }
    }
  },
  data() {
    return {
      sampleData: '',
      color: 'pink'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
