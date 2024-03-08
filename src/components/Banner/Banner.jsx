import falaise from "../../assets/images/falaise.png";
import s from "./style.module.css";

export function Banner(props) {
  return (
    <div className={s.container}>
      <img
        className={s.banner}
        src={falaise}
        alt="Falaise abrupte sur la mer"
      />
      <div className={s.bannerText}>Chez vous, partout et ailleurs</div>
    </div>
  );
}
