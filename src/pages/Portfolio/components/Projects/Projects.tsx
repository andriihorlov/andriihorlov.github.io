import { useTranslation } from "react-i18next";
import ProjectDropdown from "../ProjectDropdown/ProjectDropdown";
import { useProjectData } from "../../../../data/projectsData.data";
import AboutProjectBox from "../../../../components/AboutProjectBox/AboutProjectBox";

const Projects = () => {
  const { t } = useTranslation();

  const PROJECTS_DATA = useProjectData(t);

  return (
    <AboutProjectBox title={t("home_project")}>
      {PROJECTS_DATA.map((data) => (
        <ProjectDropdown
          key={data.number}
          technologies={data.technologies}
          name={data.name}
          desc={data.desc}
          codeLink={data.codeLink}
          demoLink={data.demoLink}
          number={data.number}
        />
      ))}
    </AboutProjectBox>
  );
};

export default Projects;
