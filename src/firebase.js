import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAeQcV_lRtQsSwSRsK26028s6akM33ATck",
  authDomain: "netflix-clone-7d95c.firebaseapp.com",
  projectId: "netflix-clone-7d95c",
  storageBucket: "netflix-clone-7d95c.appspot.com",
  messagingSenderId: "780433366695",
  appId: "1:780433366695:web:b3d086b486746037e58582",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db
