import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home'
import Login from './components/login/Login'
import Show from './components/show/Show'

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
      <div className="left-links">
      <Link className="links" to="/"> Electronics</Link>    
<Link className="links " to="/"> <i class="fa fa-fw fa-home"></i>Home</Link>
</div>
<div className="right-links">
<Link className="links" to="/login"> <i class="fa fa-fw fa-user"></i> Login</Link>

</div>
</nav>
<switch>
        <Route  exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/show" component={Show}></Route>
        </switch>
</Router>
    </div>
  );
}

export default App;
