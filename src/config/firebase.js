import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7qLFCDYRKGiaWteRiV9DZQpwKR7lfyy0",
  authDomain: "chat-app-de7d8.firebaseapp.com",
  databaseURL: "https://chat-app-de7d8.firebaseio.com",
  projectId: "chat-app-de7d8",
  storageBucket: "chat-app-de7d8.appspot.com",
  messagingSenderId: "1067277014232",
  appId: "1:1067277014232:web:489e9134f0ad5fbca0b3ad"
}

firebase.initializeApp(firebaseConfig)

export default firebase