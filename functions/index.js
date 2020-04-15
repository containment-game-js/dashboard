const admin = require('firebase-admin');
const functions = require('firebase-functions');
const db = admin.firestore();

const TOPIC_TEST = 'logs-test'

exports.logSubTest = functions.pubsub.topic(TOPIC_TEST).onPublish(async (message) => {
  try {
    name = message.json.name;
    const {
      type,
      payload,
      version,
      timestamp,
    } = message.json
    if (type && payload && version && timestamp) {
      db.collection(type).add({
        versionLog: version,
        timestamp,
        ...payload
      })
    } else {
      console.error('invalid format', message.json)
    }
  } catch (e) {
    console.error('PubSub message was not JSON', e, message);
  }

});
