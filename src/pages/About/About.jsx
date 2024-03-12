import s from "./style.module.css";
import { BannerAbout } from "../../components/BannerAbout/BannerAbout";
import { AboutItem } from "../../components/AboutItem/AboutItem";
export function About(props) {
  return (
    <div>
      <BannerAbout />
      <AboutItem />
      <AboutItem />
      <AboutItem />
      <AboutItem />
    </div>
  );
}
