import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Footer from "./components/UI/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import $ from "jquery";
window.$ = $;

function App() {
 

  return (
    <>
      <NavBar />
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
