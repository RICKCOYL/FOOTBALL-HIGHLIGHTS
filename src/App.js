import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/details/:title">
              <Details />
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
