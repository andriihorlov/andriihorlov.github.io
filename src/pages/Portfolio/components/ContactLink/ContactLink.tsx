import { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";
import styles from "./ContactLink.module.scss";
import useTheme from "../../../../hooks/useTheme";

interface PropsType {
  link: string;
  logo: string;
  alt: string;
}

const ContactLink = ({ link, logo, alt }: PropsType) => {
  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className={addTheme(styles.linkButton)}>
        <img className={styles.linkLogo} src={logo} alt={alt} />
      </button>
    </a>
  );
};

export default ContactLink;
