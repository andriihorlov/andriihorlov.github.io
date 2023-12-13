import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import LanguagesSelector from "../LanguagesSelector";
import ThemeButton from "../ThemeButton";
import styles from "./Header.module.scss";
import useTheme from "../../hooks/useTheme";

const Header = () => {
  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <div className={addTheme(styles.header)}>
      <div className={styles.item}>
        <ThemeButton />
      </div>
      <div className={styles.item}>
        <LanguagesSelector />
      </div>
    </div>
  );
};

export default Header;
