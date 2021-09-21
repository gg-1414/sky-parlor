import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { FirestoreProvider } from './context/FirestoreContext';
import { ShopifyProvider } from './context/ShopifyContext';

// import MusicPlayer from './components/MusicPlayer';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Product from './pages/Product';
import Admin from './pages/Admin';
import './App.scss';

export default function App() {
  console.log("%cHMU <3 \nhttps://gina-lee.com", "background:#ebbdba;color:#611827;padding:1rem;font-size:20px");

  return (
    <FirestoreProvider>
      <ShopifyProvider>
        <div className="App">
          {/* <MusicPlayer /> */}
          <Router>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/admin" component={Admin} />
              <Route path="/product" component={Product} />
              <Route path="/" component={Landing} />
            </Switch>
          </Router>
        </div>
      </ShopifyProvider>
    </FirestoreProvider>
  );
}
