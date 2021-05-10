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
            <Route exact path="/" component={Home} />
            <Route path="/details/:title" component={Details} />
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
