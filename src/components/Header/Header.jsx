import s from "./style.module.scss";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <div className={s.container}>
      <img
        onClick={() => navigate("/")}
        className={s.logo}
        src={logo}
        alt="Logo de Kasa"
      />
      <ul className={s.navlink}>
        <li onClick={() => navigate("/")}>Accueil</li>
        <li onClick={() => navigate("/about")}>A Propos</li>
      </ul>
    </div>
  );
}
