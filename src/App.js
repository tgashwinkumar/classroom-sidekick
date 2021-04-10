import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {(false) ? <Navbar/> : <></>}
      <Router>
        <Switch>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
