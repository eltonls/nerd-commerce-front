import './App.css'
import Cart from "./components/cart/Cart"
import Header from "./components/header/Header"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>  
      <div className="App">
        <Header />
      </div>
    </Router>
  )
}

export default App
