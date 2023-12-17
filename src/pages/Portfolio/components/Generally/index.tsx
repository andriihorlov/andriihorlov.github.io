import { useTranslation } from "react-i18next";
import styles from "./Generally.module.scss";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useContext } from "react";
import useTheme from "../../../../hooks/useTheme";
import { motion } from "framer-motion";

const Generally = () => {
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
      transition={{ delay: 0.2 }}
      variants={divVariants}
      className={addTheme(styles.generally)}
    >
      <h3 className={addTheme(styles.generallyTitle)}>{t("home.generally")}</h3>
      <p className={addTheme(styles.generallyContent)}>{t("home.desc")}</p>
    </motion.div>
  );
};

export default Generally;
