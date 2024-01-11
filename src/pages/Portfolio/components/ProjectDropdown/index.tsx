import { useContext } from "react";
import { useTranslation } from "react-i18next";

import { GlobalContext } from "../../../../context/GlobalContext";
import useTheme from "../../../../hooks/useTheme";
import GitButton_light from "../../../../assets/gitButton-light.svg";
import GitButton_dark from "../../../../assets/gitButton-dark.svg";
import DropdownBox from "../../../../components/DropdownBox/DropdownBox";

import ProjectCarousel from "./ProjectCarousel";
import styles from "./styles.module.scss";

interface PropsType {
  projectInfo: {
    technologies: string[];
    name: string;
    desc: string;
    codeLink?: string;
    demoLink?: string;
    moreInfo?: string;
    gallery?: string[]
  },
  number: string
}

const ProjectDropdown = ({ projectInfo, number }: PropsType) => {
  const {
    technologies,
    name,
    desc,
    codeLink,
    demoLink,
    moreInfo,
    gallery,
  } = projectInfo
  const { t } = useTranslation();
  const { theme } = useContext(GlobalContext);
  const { addTheme } = useTheme(theme, styles.light);

  return (
    <DropdownBox name={name} number={number}>
      {desc && (
        <>
          <h4 className={addTheme(styles.descTitle)}>{t("project.description")}</h4>
          <p className={addTheme(styles.desc)}>{desc}</p>
        </>
      )}

      <h4 className={addTheme(styles.descTitle)}>{t("project.technology")}</h4>
      <div className={styles.technologies}>
        {technologies.map((tech) => (
          <div key={tech} className={addTheme(styles.tech)}>
            {tech}
          </div>
        ))}
      </div>

      <div className={styles.links}>
        {codeLink && <a
          className={addTheme(styles.linkCode)}
          href={codeLink}
          target="_blank"
          rel="noreferrer"
        >
          <img src={theme ? GitButton_light : GitButton_dark} alt="git" />
          <p className={addTheme(styles.codeName)}>{t("project.code")}</p>
        </a>}

        {demoLink && <a
          className={addTheme(styles.linkDemo)}
          href={demoLink}
          target="_blank"
          rel="noreferrer"
        >
          {t("project.demo")}
        </a>}

        {moreInfo && <a
          className={addTheme(styles.linkDemo)}
          href={moreInfo}
          target="_blank"
          rel="noreferrer"
        >
          {t("project.more_info")}
        </a>}
      </div>

      {gallery?.length && (
        <div className={addTheme(styles.carouselWrapper)}>
          <ProjectCarousel gallery={gallery} name={name} />
        </div>
      )}
    </DropdownBox>
  );
};

export default ProjectDropdown;
