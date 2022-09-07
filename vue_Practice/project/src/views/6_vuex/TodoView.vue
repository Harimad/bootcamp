<template>
  <div>
    <div>{{ todos }}</div>
    <div>할일 목록 전체수 : {{ todosCount }}</div>
    <div>완료 목록 수 : {{ doneTodosCount }}</div>
    <div>미완료 목록 수 : {{ notDoneTodosCount }}</div>
    <div>
      <label for="todo" class="form-label">할일</label>
      <input
        type="text"
        name=""
        id="todo"
        class="form-control"
        v-model="todo"
      />
      <button class="btn btn-primary" @click="addItem">추가(mutation)</button>
      <button class="btn btn-primary" @click="addItem2">추가(action)</button>
    </div>
    <div>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Todo ID</th>
            <th>할일</th>
            <th>완료여부</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr :key="todo.id" v-for="todo in todos">
            <td>{{ todo.id }}</td>
            <td>{{ todo.title }}</td>
            <td>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  :checked="!todo.done"
                  @change="doneYN(todo.id, $event)"
                />
              </div>
            </td>
            <td>
              <button
                class="btn btn-danger btn-sm"
                @click="removeItem(todo.id)"
              >
                삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      todo: ''
    }
  },
  computed: {
    // 다른 화면에서 todos에 값을 추가할 떄 변경내역이 반영되어야 해서 computed에 넣게됨.
    todos() {
      return this.$store.state.todo.todos // Store의 state에 접근
    },
    todosCount() {
      return this.$store.getters['todo/todosCount'] // Store의 getter에 접근
    },
    doneTodosCount() {
      return this.$store.getters['todo/doneTodosCount']
    },
    notDoneTodosCount() {
      return this.$store.getters['todo/notDoneTodosCount']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addItem() {
      this.$store.commit('todo/add', { id: 4, title: this.todo, done: false }) // Store의 mutations에 접근 👉 commit을 이용해서 mutations 함수 호출가능!
    },
    removeItem(id) {
      this.$store.commit('todo/remove', id)
    },
    doneYN(id, event) {
      this.$store.commit('todo/doneYN', { id: id, done: !event.target.checked })
    },
    addItem2() {
      this.$store.dispatch('todo/add', { id: 4, title: this.todo, done: false }) // Store의 actions에 접근 👉 dispatch를 이용해서 actions 함수 호출가능!
    }
  }
}
</script>
