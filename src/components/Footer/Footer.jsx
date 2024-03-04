import s from "./style.module.css";
import logo from "../../assets/images/logo-footer.png";

export function Footer() {
  return (
    <div className={s.footer}>
      <img src={logo} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}
