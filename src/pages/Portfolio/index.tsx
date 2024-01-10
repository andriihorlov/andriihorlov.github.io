import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import styles from "./Portfolio.module.scss";
import Title from "./components/Title";
import Generally from "./components/Generally";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import useTheme from "../../hooks/useTheme";

const Portfolio = () => {
  const { theme } = useContext(GlobalContext);
  const { addTheme } = useTheme(theme, styles.light);

  return (
    <div className={addTheme(styles.main)}>
      <Title />

      <div className={styles.info}>
        <Generally />
        <Contacts />
      </div>

      <div className={styles.content}>
        <About />
        <Projects />
      </div>
    </div>
  );
};

export default Portfolio;
