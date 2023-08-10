import logo from "../../images/logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Waste Not Want Not</p>
      </header>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
