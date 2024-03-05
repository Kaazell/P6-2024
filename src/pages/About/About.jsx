import s from "./style.module.css";
import { BannerAbout } from "../../components/BannerAbout/BannerAbout";
import { DropdownButton } from "../../components/DropdownButton/DropdownButton";
export function About(props) {
  return (
    <div>
      <BannerAbout />
      <DropdownButton buttonText="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité tota
      </DropdownButton>
      <DropdownButton buttonText="Respect"></DropdownButton>
      <DropdownButton buttonText="Service"></DropdownButton>
      <DropdownButton buttonText="Sécurité"></DropdownButton>
    </div>
  );
}
