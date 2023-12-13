import { useContext } from "react";
import "./App.scss";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import { GlobalContext } from "./context/GlobalContext";
import AnimatedCursor from "./components/Cursor";

function App() {
  const { theme } = useContext(GlobalContext);

  const isMobile = window.innerWidth >= 768;

  return (
    <div className="App" style={{ background: theme ? "#fff" : "#0c151d" }}>
      {isMobile && <AnimatedCursor />}
      <div className="appWrapper">
        <Header />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
