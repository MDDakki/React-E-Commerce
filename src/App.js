import NavBar from "./components/nav";
import Footer from "./components/Footer";
import Home from "./components/Seiten/Home";
import Books from "./components/Seiten/Books";
import BuchInfo from "./components/Seiten/BuchInfo";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { books } from "./data";
import Wagen from "./components/Seiten/Wagen";
import { useEffect, useState } from "react";

function App() {
  const [wagen, setWagen] = useState([])

  function zumWagen(buch) {
    setWagen([...wagen, buch])
  } 

  useEffect(() => {
    console.log(wagen)
  }, [wagen]) 
  
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/:id" element={<BuchInfo books={books} zumWagen={zumWagen} wagen={wagen}/>}></Route>
          <Route path="/wagen" element={<Wagen books={books} wagen={wagen}/>}></Route>
        </Routes>
      </div>  
      <Footer></Footer> 
    </Router>
  );
} 

export default App;
