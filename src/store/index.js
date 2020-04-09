import Vue from 'vue'
import Vuex from 'vuex'
import {
  getInfo
} from '../services/info'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cpu: [],
    ram: [],
    rooms: [],
    sockets: [],
    occupation: {},
    roomInformation: []
  },
  mutations: {
    updateRooms: (state, rooms) => {
      state.rooms = rooms
    },
    updateCpu: (state, cpu) => {
      state.cpu = cpu
    },
    updateRam: (state, ram) => {
      state.ram = ram
    },
    updateSockets: (state, sockets) => {
      state.sockets = sockets
    },
    updateOccupation: (state, occupation) => {
      state.occupation = occupation
    },
    updateRoomInformation: (state, roomInformation) => {
      state.roomInformation = roomInformation
    }
  },
  actions: {},
  modules: {},
  getters: {
    ram: state => state.ram,
    cpu: state => state.cpu,
    rooms: state => state.rooms,
    sockets: state => state.sockets,
    occupation: state => state.occupation,
    roomInformation: state => state.roomInformation
  }
})

getInfo(store)

export default store
