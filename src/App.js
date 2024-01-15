import NavBar from "./components/nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Seiten/Home";
import Books from "./components/Seiten/Books";
import { books } from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/books" element={<Books books={books} />} />
        </Routes>
      </div>
      <Footer></Footer> 
    </Router>
  );
} 

export default App;
