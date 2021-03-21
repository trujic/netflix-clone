
import './Login.css'

const LoginPage = () => {
  return(
    <div className="login__page">
      <div className="login__nav">
        <img className="logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
        <button className="sign__in">Sign in</button>
      </div>
      <div className="login__info">
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <h4>Ready to watch? Enter your email to create or restart membership</h4>
        <div>
          <input type="text" placeholder="Email address" />
          <button>GET STARTED</button>
        </div>
      </div>
        <div className="login__gradient"/>
    </div>
  )
}

export default LoginPage
