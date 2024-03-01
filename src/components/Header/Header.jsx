import s from "./style.module.css";
import { Logo } from "../Logo/Logo";
import { NavLink } from "../NavLink/NavLink";

export function Header() {
  return (
    <div className={s.header}>
      Header
      <Logo />
      <NavLink />
    </div>
  );
}
