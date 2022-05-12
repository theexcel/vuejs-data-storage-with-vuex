import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 1,
  },
  getters: {
  },
  mutations: {
    increaseCounter(state) {
      state.counter = state.counter + 1
    },
    decreaseCounter(state) {
      state.counter = state.counter - 1
    },
  },
  actions: {
  },
  modules: {
  }
})
