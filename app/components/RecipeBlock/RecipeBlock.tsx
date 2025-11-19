import { Menu } from "@/hallucination/type";
import Image from "next/image";

import recipe_1 from "@/public/assets/recipe/bigwecwec.png";
import recipe_2 from "@/public/assets/recipe/wecwecspicy.png";
import recipe_3 from "@/public/assets/recipe/wecwecpownder.png";

import styles from "./index.module.css";

export default function RecipeBlock({ menu }: { menu: Menu }) {
  const recipe = {
    1: recipe_1,
    2: recipe_2,
    3: recipe_3,
  };
  return (
    <div className={styles.image_wrapper}>
      <Image src={recipe[menu]} alt="버거 레시피" fill />
    </div>
  );
}
