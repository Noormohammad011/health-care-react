import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCZSf2TdhqbishSV1vuDaEC6lWNmX-2gFg",
  authDomain: "authenticationapp-e29be.firebaseapp.com",
  projectId: "authenticationapp-e29be",
  storageBucket: "authenticationapp-e29be.appspot.com",
  messagingSenderId: "554647263671",
  appId: "1:554647263671:web:b0e4433372d3d0c01cf032",
  measurementId: "G-5P6DYNDZMR"
})

export const auth = app.auth()
export default app
