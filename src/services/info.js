const {db} = require('./firebase')

const getInfo = store => {
  subscribeToType({type: 'updateRam', store})
  subscribeToType({type: 'updateCpu', store})
  subscribeToType({type: 'updateRooms', store})
  subscribeToType({type: 'updateSockets', store})
}

const subscribeToType = async ({type, store}) => {
  db().collection(type).get().then(snapshot => storeSnapshot({type, store, snapshot}))
  db().collection(type).onSnapshot((snapshot) => storeSnapshot({type, store, snapshot: snapshot.docChanges()}))
}

const storeSnapshot = async ({type, store, snapshot}) => {
  const docs = snapshot.docs
  if (docs) {
    const data = docs.map(doc => doc.data())
    store.commit(type, data)
    console.log('data', type, data)
  } else {
    console.log('no data', type)
  }
}

export {
  getInfo
}
