import s from "./style.module.scss";
import logo from "../../assets/images/logo.png"

export function Header() {
  return (
    <div className={s.container}>  
      <img className={s.logo} src={logo} alt="Logo de Kasa" />
      <ul className={s.navlink}>
        <li>Accueil</li>
        <li>A Propos</li>
      </ul>
    </div>
  );
}
