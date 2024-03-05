import falaise from "../../assets/images/falaise.png";
import s from "./style.module.css";

export function BannerAbout(props) {
  return (
    <div class={s.container}>
      <img
        className={s.banner}
        src={falaise}
        alt="Falaise abrupte sur la mer"
      />
    </div>
  );
}
