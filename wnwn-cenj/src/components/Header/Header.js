import "./Header.css";
import logo from "../../images/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Waste Not Want Not logo"
      ></img>
      <div className="header__container">
        <h1 className="header__container-title">Waste Not Want Not</h1>
        <p className="header__container-description">
          Find local eWaste disposal sites near you
        </p>
      </div>
    </div>
  );
}
