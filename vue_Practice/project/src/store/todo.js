export const todo = {
  // true 하면 이 안의 값을 호출할 때 namespace도 함께 넣어줘야 호출가능. ex. this.$store.state.todo.todos,  this.$store.commit('todo/remove', id)
  namespaced: true,
  state() {
    return {
      todos: [
        { id: 1, title: 'todo 1', done: true },
        { id: 2, title: 'todo 2', done: false },
        { id: 3, title: 'todo 3', done: false }
      ]
    }
  },
  getters: {
    todosCount(state) {
      return state.todos.length
    },
    doneTodosCount(state) {
      return state.todos.filter((todo) => todo.done).length
    },
    notDoneTodosCount(state) {
      return state.todos.filter((todo) => !todo.done).length
    }
  },
  mutations: {
    add(state, item) {
      state.todos.push(item)
    },
    remove(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    doneYN(state, doneStatus) {
      state.todos.filter((todo) => todo.id === doneStatus.id)[0].done =
        doneStatus.done
    }
  },
  actions: {
    add({ commit }, item) {
      commit('add', item)
    }
  }
}
