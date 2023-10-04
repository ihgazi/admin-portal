import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Analylics from './components/Analylics';
import Navbar from './components/Navbar';
import State from "./context/State";

function App() {
  return (
    <State>
      <Router>
      <div>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/analylics' element={<Analylics/>}/>
        </Routes>
      </div>
      </Router>
    </State>
  );
}

export default App;
