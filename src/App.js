import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Scheduler from './pages/Scheduler';

function App() {
  return (
    <div className="App">
      {(window.location.pathname !== "/") ? <Navbar/> : <></>}
      <Router>
        <Switch>
          {/* <Route path="/">
            <Home />
          </Route> */}
          <Route path="/">
              <Scheduler />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
