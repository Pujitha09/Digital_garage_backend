var admin = require("firebase-admin");

var serviceAccount = require("./service-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { db }