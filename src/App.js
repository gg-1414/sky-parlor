import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MusicPlayer from './components/MusicPlayer';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Product from './pages/Product';
import Admin from './pages/Admin';
import './App.scss';

export default function App() {
  return (
    <div className="App">
      <MusicPlayer />
      <Router>
        <Switch>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
