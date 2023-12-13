import { useContext } from "react";
import styles from "./ThemeButton.module.scss";
import { GlobalContext } from "../../context/GlobalContext";
import useTheme from "../../hooks/useTheme";
import Theme_light from "../../assets/theme-light.svg";
import Theme_dark from "../../assets/theme-dark.svg";

const ThemeButton = () => {
  const { changeTheme, theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <button className={addTheme(styles.themeButton)} onClick={changeTheme}>
      <img
        className={addTheme(styles.themeImg)}
        src={theme ? Theme_light : Theme_dark}
        alt="theme"
      />
    </button>
  );
};

export default ThemeButton;
