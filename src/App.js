import Homepage from './components/Homepage'
import LoginPage from './components/Login/LoginPage'
import SignIn from './components/SignIn/SignIn'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
