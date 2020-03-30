const {socket} = require('./socket.io')

const getInfo = (store) => {
  socket.on('info', ({ram, rooms, sockets, occupation, roomInfo}) => {
    store.commit('updateRooms', rooms)
    store.commit('updateRam', ram)
    store.commit('updateSockets', sockets)
    store.commit('updateOccupation', occupation)
    store.commit('updateRoomInformation', roomInfo)
  })
  socket.emit('dashboard')
}

const disconnectInfo = () => socket.off('info')

export {
  getInfo,
  disconnectInfo
}
