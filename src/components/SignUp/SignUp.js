import './SignUp.css'
import { useRef } from 'react'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/user/userSlice'

const SignUp = () => {
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
    email.current.value,
    password.current.value,
  ).then((authUser) => {

  }).catch(error => {
    alert(error.message)
  })
  }

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      email.current.value,
      password.current.value,
    ).then((authUser) => {
      dispatch(login({
        uid: authUser.uid,
        email: authUser.email,
      }));
    }).catch(error => {
      alert(error.message)
    })
  }

  return(
    <div className="signin__form">
      <form>
        <h1>Sign In</h1>
        <input ref={email} type="email" name="email" placeholder="Email" />
        <input ref={password} type="password" name="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>Sign in</button>
        <div className="register">
          <span>New to Netflix?</span>
          <span onClick={register}>Register here.</span>
        </div>
      </form>
    </div>
  )
}

export default SignUp
