import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL} >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/#about-me" component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
