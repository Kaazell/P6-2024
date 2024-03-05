import s from "./style.module.css";
import { BannerAbout } from "../../components/BannerAbout/BannerAbout";
import { DropdownButton } from "../../components/DropdownButton/DropdownButton";
export function About(props) {
  return (
    <div>
      <BannerAbout />
      <DropdownButton buttonText="Fiabilité" />
      <DropdownButton buttonText="Respect" />
      <DropdownButton buttonText="Service" />
      <DropdownButton buttonText="Sécurité" />
    </div>
  );
}
