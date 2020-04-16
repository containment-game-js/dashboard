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
    roomInformation: [],
  },
  mutations: {
    updateCpu: (state, cpu) => {
      state.cpu = state.cpu.concat(cpu)
    },
    updateRooms: (state, rooms) => {
      state.rooms = state.rooms.concat(rooms)
    },
    updateRam: (state, ram) => {
      state.ram = state.ram.concat(ram)
    },
    updateSockets: (state, sockets) => {
      state.sockets = state.sockets.concat(sockets)
    },
    updateOccupation: (state, occupation) => {
      state.occupation = occupation
    },
    updateRoomInformation: (state, roomInformation) => {
      state.roomInformation = roomInformation
    },
  },
  actions: {},
  modules: {},
  getters: {
    ram: state => state.ram.slice(-60, -1).concat(state.ram[-1]).map(({timestamp, value}) => ([timestamp, value])),
    cpu: state => state.cpu.slice(-60, -1).concat(state.cpu[-1]).map(({timestamp, value}) => ([timestamp, value])),
    rooms: state => state.rooms,
    sockets: state => state.sockets,
    occupation: state => state.occupation,
    roomInformation: state => state.roomInformation,
  },
})

getInfo(store)

export default store
