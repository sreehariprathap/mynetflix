import React, { useState } from "react"
import "./LoginScreen.css"
import SignUp from "./SignUp"

function LoginSceen() {
  const [signIn, setSignIn] = useState(false)

  return (
    <div className="loginscreen">
      <div className="loginscreenbgc">
        <img
          className="loginlogo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG26.png"
          alt="loginlogo"
        />
        <button className="signin" onClick={() => setSignIn(true)}>
          sign in
        </button>

        <div className="loginscreen_gradient"></div>

        <div className="loginscreen_body">
          {signIn ? (
            <SignUp />
          ) : (
            <>
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere, Cancel at anytime.</h2>
              <h3>
                Ready to watch? Create an account or Restart your membership.
              </h3>

              <div className="loginscreen_input">
                <form action="">
                  <input type="email" placeholder="email address" />
                  <button
                    className="getstarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginSceen
