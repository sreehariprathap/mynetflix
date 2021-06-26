import React, { useRef } from "react"
import "./SignUp.css"
import { auth } from "../firebase"

export default function SignUp() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const signIn = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className="signin_screen">
      <form action="">
        <h1>Sign in</h1>
        <input ref={emailRef} type="email" placeholder="Enter email..." />

        <input ref={passwordRef} type="password" placeholder="Password..." />
        <br />
        <button className="singin_button" type="submit" onClick={signIn}>
          sign in
        </button>
        <h4>
          New to Netflix?{" "}
          <span className="signup_link" onClick={register}>
            Sign up now
          </span>
        </h4>
      </form>
    </div>
  )
}
