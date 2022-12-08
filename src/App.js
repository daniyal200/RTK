import './App.css';
import Register from './auth/Register';
import Login from './auth/Login';
import Dashboard from './auth/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
