const {db} = require('./firebase')

const getInfo = store => {
  subscribeToType({type: 'updateRam', store})
  subscribeToType({type: 'updateCpu', store})
  subscribeToType({type: 'updateRooms', store})
  subscribeToType({type: 'updateSockets', store})
  subscribeToType({type: 'updateOccupation', store})
  subscribeToType({type: 'updateRoomInformation', store})
}

const subscribeToType = async ({type, store}) => {
  const snapshot = await db.collection(type).get()
  storeSnapshot({type, store, snapshot})
  db.collection(type).onSnapshot((snapshot) => {
    storeSnapshot({type, store, snapshot: snapshot.docChanges()})
  })
}

const storeSnapshot = async ({type, store, snapshot}) => {
  const data = snapshot.docs.map(doc => doc.data())
  store.commit(type, data)
}

export {
  getInfo,
}
