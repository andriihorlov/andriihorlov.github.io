import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../../../context/GlobalContext";
import { useContext } from "react";
import useTheme from "../../../../hooks/useTheme";
import styles from "./ProjectDropdown.module.scss";
import GitButton_light from "../../../../assets/gitButton-light.svg";
import GitButton_dark from "../../../../assets/gitButton-dark.svg";
import DropdownBox from "../../../../components/DropdownBox/DropdownBox";

interface PropsType {
  technologies: string[];
  name: string;
  desc: string;
  codeLink: string;
  demoLink: string;
  number: string;
}

const ProjectDropdown = ({
  technologies,
  name,
  desc,
  codeLink,
  demoLink,
  number,
}: PropsType) => {
  const { t } = useTranslation();

  const { theme } = useContext(GlobalContext);

  const { addTheme } = useTheme(theme, styles.light);

  return (
    <DropdownBox name={name} number={number}>
      <h4 className={addTheme(styles.descTitle)}>{t("pb_desc")}</h4>
      <p className={addTheme(styles.desc)}>{desc}</p>
      <h4 className={addTheme(styles.descTitle)}>{t("pb_teck")}</h4>
      <div className={styles.technologies}>
        {technologies.map((tech) => (
          <div key={tech} className={addTheme(styles.tech)}>
            {tech}
          </div>
        ))}
      </div>
      <div className={styles.links}>
        <a
          className={addTheme(styles.linkCode)}
          href={codeLink}
          target="_blank"
          rel="noreferrer"
        >
          <img src={theme ? GitButton_light : GitButton_dark} alt="git" />
          <p className={addTheme(styles.codeName)}>{t("pb_code")}</p>
        </a>
        <a
          className={addTheme(styles.linkDemo)}
          href={demoLink}
          target="_blank"
          rel="noreferrer"
        >
          {t("pb_demo")}
        </a>
      </div>
    </DropdownBox>
  );
};

export default ProjectDropdown;
