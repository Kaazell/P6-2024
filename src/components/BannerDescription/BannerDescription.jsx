import { useState } from "react";
import s from "./style.module.css";

export function BannerDescription({ photos }) {
  // L'état initial est 0, pour la première image du tableau.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={s.container}>
      <button onClick={prevImage}>Précédent</button>
      <img className={s.banner} src={photos[currentImageIndex]} alt="props" />
      <button onClick={nextImage}>Suivant</button>
    </div>
  );
}
