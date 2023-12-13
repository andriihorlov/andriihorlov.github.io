import { useTranslation } from "react-i18next";
import AboutDropdown from "../AboutDropdown/AboutDropdown";
import { useAboutData } from "../../../../data/aboutData.data";
import AboutProjectBox from "../../../../components/AboutProjectBox/AboutProjectBox";

const About = () => {
  const { t } = useTranslation();

  const ABOUT_DATA = useAboutData(t);

  return (
    <AboutProjectBox title={t("about")}>
      {ABOUT_DATA.map((data) => (
        <AboutDropdown
          key={data.number}
          content={data.content}
          number={data.number}
          name={data.name}
        />
      ))}
    </AboutProjectBox>
  );
};

export default About;
