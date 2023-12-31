import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from './Components/Footer';
import hotels from './pages/hotels';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/hotels" exact Component={hotels}/>
          <Route path="/about" exact Component={About}/>
          <Route path="/contact" exact Component={Contact}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
