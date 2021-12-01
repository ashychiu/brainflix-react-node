import logo from "../../assets/logo/BrainFlix-logo.svg";
import "./HeaderLogo.scss";

function HeaderLogo() {
  return <img className="header__logo" src={logo} alt="BrainFlix logo" />;
}

export default HeaderLogo;
