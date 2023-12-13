import { TFunction } from "i18next";

export const CONTENT_TECHNOLOGIES = [
  "JavaSctipt ES6+",
  "React/React hooks",
  "React Native/Expo",
  "TypeScript",
  "Next JS",
  "MobX",
  "Redux/Redux-toolkit/Redux-thunk",
  "Jest/React testing library",
  "HTML5",
  "CSS3/SASS/SCSS",
  "AntDesign/Material UI/Bootstrap",
  "REST API",
  "npm/yarn",
  "JSON",
  "OOP/functional programming",
  "Classes components(lifecycle methods)",
  "i18Next",
];

export const useAboutData = (
  t: TFunction<"translation", undefined, "translation">
) => {
  const ABOUT_DATA = [
    { content: CONTENT_TECHNOLOGIES, number: "01.", name: t("home_skills") },
    {
      content: [t("home_univ"), t("home_course")],
      number: "02.",
      name: t("home_edu"),
    },
    {
      content: [t("home_uk"), t("home_en"), t("home_ru")],
      number: "03.",
      name: t("home_lang"),
    },
  ];

  return ABOUT_DATA;
};
