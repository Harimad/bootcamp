import { createStore } from 'vuex'

export default createStore({
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
  },
  modules: {}
})
