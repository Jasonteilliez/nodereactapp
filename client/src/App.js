import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Messages from "./components/Messages";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Accueil />}></Route>
          <Route path="/messages" exact element={<Messages />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
