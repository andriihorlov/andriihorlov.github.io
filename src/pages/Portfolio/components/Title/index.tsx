import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useContext } from "react";
import useTheme from "../../../../hooks/useTheme";
import styles from "./Title.module.scss";
import Avatar from "../../../../assets/avatar.png";
import Download from "../../../../assets/download.svg";
import Resume from "./CV-AndriiHorlov.pdf";
import { motion } from "framer-motion";

const Title = () => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  const divVariants = {
    hidden: {
      y: 500,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      transition={{ delay: 0.1 }}
      variants={divVariants}
      className={addTheme(styles.title)}
    >
      <div className={styles.desc}>
        <div className={addTheme(styles.avatarWrapper)}>
          <img className={styles.avatar} src={Avatar} alt="avatar" />
        </div>
        <div className={styles.name}>
          <h2 className={addTheme(styles.nameItem)}>{t("home.name")}</h2>
          <p className={addTheme(styles.profession)}>{t("home.profession")}</p>
        </div>
      </div>
      <a
        href={Resume}
        target="_blank"
        rel="noreferrer"
        download="resume.pdf"
      >
        <button className={styles.button}>
          <div className={styles.downloadButton}>
            <p>{t("home.download")}</p>
            <img src={Download} alt="download" />
          </div>
        </button>
      </a>
    </motion.div>
  );
};

export default Title;
