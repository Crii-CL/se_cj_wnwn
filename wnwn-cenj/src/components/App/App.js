import "./App.css";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Home from "../Home/Home";
import { useState } from "react";

export default function App() {
  const [isLocated, setIsLocated] = useState(false);
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");

  const handleScroll = (elementId) => {
    setIsLocated(true);
    setTimeout(() => {
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
        const { top } = targetElement.getBoundingClientRect();
        window.scrollTo({
          top: window.scrollY + top,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="App">
      <Home
        setIsLocated={setIsLocated}
        handleScroll={handleScroll}
        setAddress={setAddress}
        setPin={setPin}
      />
      {isLocated && (
        <>
          <Main address={address} pin={pin} setPin={setPin} />
          <Footer />
        </>
      )}
    </div>
  );
}
