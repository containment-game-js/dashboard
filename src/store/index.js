import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    updateRooms: (state, rooms) => {
      state.rooms = rooms
    }
  },
  actions: {},
  modules: {}
})
