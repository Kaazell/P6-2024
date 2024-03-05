import s from "./style.module.css";
import { BannerDescription } from "../../components/BannerDescription/BannerDescription";
import { DescriptionData } from "../../components/DescriptionData/DescriptionData";

export function Description() {
  return (
    <div>
      <BannerDescription />
      <DescriptionData />
    </div>
  );
}
