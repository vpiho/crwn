import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA4zX4W3JTLX5pV1p8KM1U-EsgPV5ns8wU",
    authDomain: "crwn-db-75c4e.firebaseapp.com",
    databaseURL: "https://crwn-db-75c4e.firebaseio.com",
    projectId: "crwn-db-75c4e",
    storageBucket: "",
    messagingSenderId: "22979570997",
    appId: "1:22979570997:web:e5a4dccc8114af71"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const singInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase