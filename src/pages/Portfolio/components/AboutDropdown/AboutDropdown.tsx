import { GlobalContext } from "../../../../context/GlobalContext";
import { useContext } from "react";
import useTheme from "../../../../hooks/useTheme";
import styles from "./AboutDropdown.module.scss";
import DropdownBox from "../../../../components/DropdownBox/DropdownBox";

interface PropsType {
  number: string;
  name: string;
  content: string[];
}

const AboutDropdown = ({ number, name, content }: PropsType) => {
  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <DropdownBox name={name} number={number}>
      <div className={styles.aboutItem}>
        {content.map((tech) => (
          <div key={tech} className={addTheme(styles.contentItem)}>
            {tech}
          </div>
        ))}
      </div>
    </DropdownBox>
  );
};

export default AboutDropdown;
