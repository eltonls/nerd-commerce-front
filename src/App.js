import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Login from "./views/Login";
import Home from "./views/Home";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
