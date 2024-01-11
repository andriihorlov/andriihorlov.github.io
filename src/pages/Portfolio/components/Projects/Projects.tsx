import { useTranslation } from "react-i18next";
import ProjectDropdown from "../ProjectDropdown";
import { useProjectData } from "../../../../data/projectsData.data";
import AboutProjectBox from "../../../../components/AboutProjectBox/AboutProjectBox";

const Projects = () => {
  const { t } = useTranslation();
  const PROJECTS_DATA = useProjectData(t);

  return (
    <AboutProjectBox title={t("home.project")}>
      {PROJECTS_DATA.map((data, index) => (
        <ProjectDropdown
          key={index}
          projectInfo={data}
          number={`${String(index + 1).padStart(2, '0')}.`}
        />
      ))}
    </AboutProjectBox>
  );
};

export default Projects;
