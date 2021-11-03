import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import Build from './components/Build';
import Home from './components/Home';
import Guide from './components/Guide';
import Help from './components/Help';
import Navvy from './Navbar';
import {Route,Link} from 'react-router-dom';
function App() {
  return (
    <>
    <Navvy/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Build" component={Build}/>
    <Route exact path="/Guide" component={Guide}/>
    <Route exact path="/Help" component={Help}/>

    </>
  );
}

export default App;
