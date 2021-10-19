import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import swal from 'sweetalert'
import initializeAuthentication from '../Firebase/firebase.init'

//initialize firebase  authentication
initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const auth = getAuth()
  const location = useLocation()
  const history = useHistory()
  const redirect_url = location.state?.from || '/'
  //on State Change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    })
  }, [auth])

  //sign up functionality
  const signUpUser = (email, password, name, image) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user)
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: image,
        }).then(() => {
          swal('Good job!', 'Account has been created!', 'success')
          history.push(redirect_url)
        })
      })
      .catch((err) => swal('Something went wrong!', `${err.message}`, 'error'))
  }

  //sign in functionality
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user)
        swal('Sign in Successful!', 'Welcome back !', 'info')
        history.push(redirect_url)
      })
      .catch((err) => swal('Something went wrong!', `${err.message}`, 'error'))
  }

  //google sign in
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user)
        swal('Good job!', 'Account has been created!', 'success')
        history.push(redirect_url)
      })
      .catch((err) => console.log(err.message))
  }

  // sign out
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({})
        swal('Logout Successful!', 'You are logged out!', 'success')
        history.push(redirect_url)
      })
      .catch((err) => {
        swal('Something went wrong!', `${err.message}`, 'error')
      })
  }

  return {
    user,
    signUpUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
  }
}

export default useFirebase

//import initializeAuthentication from '../Firebase/firebase.init';
