import Homepage from './components/Homepage'
import LoginPage from './components/Login/LoginPage'
import SignUp from './components/SignUp/SignUp'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { selectUser } from './redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { login, logout } from './redux/user/userSlice'
import { auth } from './firebase'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    let isLoggedIn = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout())
      }
    })
    return isLoggedIn
  }, [])

  return (
    <div className="App">
      <Router>
        {!user ? (<LoginPage />) : (
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch>
        )
        }
      </Router>
    </div>
  );
}

export default App;
