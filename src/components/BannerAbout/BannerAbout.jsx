import montagnes from "../../assets/images/montagnes.png";
import s from "./style.module.css";

export function BannerAbout(props) {
  return (
    <div class={s.container}>
      <img
        className={s.banner}
        src={montagnes}
        alt="Falaise abrupte sur la mer"
      />
    </div>
  );
}
