import s from "./style.module.css";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import { DropdownButton } from "../DropdownButton/DropdownButton";

export function DescriptionData(props) {
  return (
    <div className={s.main_container}>
      <div className={s.upper_section}>
        <div>
          <h1>Cozy loft on the Canal Saint-Martin</h1>
          <h2>Paris, Île de France</h2>
          <div className={s.tags}>
            <div>Cozy</div>
            <div>Canal</div>
            <div>Paris 10</div>
          </div>
        </div>
        <div className={s.author_stars_container}>
          <div className={s.author}>
            <div className={s.author_name}>Alexandre Dumas</div>
            <div className={s.profile_pic}></div>
          </div>
          <FiveStarRating />
        </div>
      </div>
      <div className={s.lower_section}>
        <DropdownButton buttonText={"Description"} />
        <DropdownButton buttonText={"Equipement"} />
      </div>
    </div>
  );
}
