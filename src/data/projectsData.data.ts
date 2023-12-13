import { TFunction } from "i18next";

export const TECHNOLOGIES_RATE = [
  "React",
  "React hooks",
  "TypeScript",
  "Next JS",
  "MobX",
  "Material UI",
  "AntDesignCharts",
  "Toaster",
  "REST API",
];

export const TECHNOLOGIES_TRANSLATOR = [
  "React",
  "React hooks",
  "TypeScript",
  "Context",
  "React hook form",
  "Material UI",
  "Jest",
  "Toaster",
  "REST API",
];

export const TECHNOLOGIES_TEST = [
  "React",
  "React hooks",
  "TypeScript",
  "Redux Toolkit",
  "Redux Thunk",
  "Material UI",
  "REST API",
  "React hook form",
  "i18Next",
  "Toaster",
  "LocalStorage",
];

export const TECHNOLOGIES_WEATHER = [
  "React",
  "React hooks",
  "TypeScript",
  "Redux Toolkit",
  "Redux Thunk",
  "REST API",
  "Toaster",
];

export const TECHNOLOGIES_TODO = [
  "React",
  "React hooks",
  "TypeScript",
  "Context",
  "LocalStorage",
];

export const TECHNOLOGIES_TREE = ["React", "React hooks", "TypeScript", "SCSS"];

export const useProjectData = (
  t: TFunction<"translation", undefined, "translation">
) => {
  const PROJECTS_DATA = [
    {
      technologies: TECHNOLOGIES_RATE,
      name: t("rate_name"),
      desc: t("rate"),
      codeLink: "https://github.com/SnezhkoAndrey/Exchange-Rate",
      demoLink: "https://exchangerate-908e7.web.app",
      number: "01.",
    },
    {
      technologies: TECHNOLOGIES_TREE,
      name: t("tree_name"),
      desc: t("tree"),
      codeLink: "https://github.com/SnezhkoAndrey/TreeGraphApp",
      demoLink: "https://treecategoriesapp.web.app",
      number: "02.",
    },
    {
      technologies: TECHNOLOGIES_TRANSLATOR,
      name: t("translator_name"),
      desc: t("translator"),
      codeLink: "https://github.com/SnezhkoAndrey/Translator",
      demoLink: "https://translator-c82ae.web.app",
      number: "03.",
    },
    {
      technologies: TECHNOLOGIES_WEATHER,
      name: t("weather_name"),
      desc: t("weather"),
      codeLink: "https://github.com/SnezhkoAndrey/Weather-App",
      demoLink: "https://weather-app-1a6ac.web.app",
      number: "04.",
    },
    {
      technologies: TECHNOLOGIES_TEST,
      name: t("test_name"),
      desc: t("test"),
      codeLink: "https://github.com/SnezhkoAndrey/Test-app",
      demoLink: "https://snezhkoandrey.github.io/Test-app/",
      number: "05.",
    },
    {
      technologies: TECHNOLOGIES_TODO,
      name: t("todo_name"),
      desc: t("todo"),
      codeLink: "https://github.com/SnezhkoAndrey/ToDo",
      demoLink: "https://todo-application-c9530.web.app",
      number: "06.",
    },
  ];

  return PROJECTS_DATA;
};
