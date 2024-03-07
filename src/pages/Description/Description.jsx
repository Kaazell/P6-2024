import s from "./style.module.css";
import { BannerDescription } from "../../components/BannerDescription/BannerDescription";
import { DescriptionData } from "../../components/DescriptionData/DescriptionData";
import json from "../../assets/json/logements.json";

export function Description(props) {
  const appart = json.filter((obj) => obj.id === "c67ab8a7");
  const photos = appart[0].pictures;
  console.log(photos);
  return (
    <div>
      <BannerDescription photos={photos} />
      <DescriptionData />
    </div>
  );
}
