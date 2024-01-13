
import NavBar from "./components/nav"
import Main from "./components/main";
import Highlights from "./components/highlights";
import Featured from "./components/Vorgestellt";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Main></Main>
      <Highlights></Highlights>
      <Featured></Featured>
    </div>
  );
}

export default App;
