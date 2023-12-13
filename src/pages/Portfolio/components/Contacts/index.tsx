import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useContext, useState } from "react";
import useTheme from "../../../../hooks/useTheme";
import styles from "./Contacts.module.scss";
import Email_light from "../../../../assets/email-light.svg";
import Email_dark from "../../../../assets/email-dark.svg";
import Phone_light from "../../../../assets/phone-light.svg";
import Phone_dark from "../../../../assets/phone-dark.svg";
import Linkedin_dark from "../../../../assets/linkedin-dark.svg";
import Linkedin_light from "../../../../assets/linkedin-light.svg";
import Telegram_dark from "../../../../assets/telegram-dark.svg";
import Telegram_light from "../../../../assets/telegram-light.svg";
import Git_dark from "../../../../assets/git-dark.svg";
import Git_light from "../../../../assets/git-light.svg";
import ContactLink from "../ContactLink/ContactLink";
import { motion } from "framer-motion";

const Contacts = () => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  const [isCopy, setIsCopy] = useState(false);

  if (isCopy) {
    setTimeout(() => setIsCopy(false), 10000);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText("andreysnezhok@gmail.com");
    setIsCopy(true);
  };

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
      className={addTheme(styles.contacts)}
    >
      <h3 className={addTheme(styles.title)}>{t("home_contact")}</h3>
      <div className={addTheme(styles.email)}>
        <div className={styles.emailItem}>
          <img
            className={styles.logo}
            src={theme ? Email_light : Email_dark}
            alt="email"
          />
          <p className={addTheme(styles.emailContent)}>
            andreysnezhok@gmail.com
          </p>
        </div>
        <button className={addTheme(styles.copyButton)} onClick={handleCopy}>
          {isCopy ? t("home_copied") : t("home_copy")}
        </button>
      </div>
      <div className={styles.phone}>
        <img
          className={styles.logo}
          src={theme ? Phone_light : Phone_dark}
          alt="phone"
        />
        <p className={addTheme(styles.phoneContent)}>+38 (097) 603 39 10</p>
      </div>
      <div className={styles.link}>
        <ContactLink
          link="https://www.linkedin.com/in/andrii-snizhko-887785258/"
          logo={theme ? Linkedin_light : Linkedin_dark}
          alt="linkedin"
        />
        <ContactLink
          link="https://t.me/AndriiSnizhko"
          logo={theme ? Telegram_light : Telegram_dark}
          alt="telegram"
        />
        <ContactLink
          link="https://github.com/SnezhkoAndrey"
          logo={theme ? Git_light : Git_dark}
          alt="git"
        />
      </div>
    </motion.div>
  );
};

export default Contacts;
