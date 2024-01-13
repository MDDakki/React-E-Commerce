
import NavBar from "./components/nav"
import Main from "./components/main";
import Highlights from "./components/highlights";
import Featured from "./components/Vorgestellt";
import Rabatt from "./components/Rabatt";
import Entdeken from "./components/Entdeken";


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Main></Main>
      <Highlights></Highlights>
      <Featured></Featured>
      <Rabatt></Rabatt>
      <Entdeken></Entdeken>
    </div>
  );
}

export default App;
