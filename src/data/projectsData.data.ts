import { TFunction } from "i18next";

export const useProjectData = (
  t: TFunction<"translation", undefined, "translation">
) => {
  const PROJECTS_DATA = [
    {
      name: "VR Gallery",
      technologies: [
        "Unity", "3D", "VR"
      ],
      // TODO: add description if needed
      desc: t("project.description_test"),
      codeLink: "https://github.com/FidgHorlov/VrGallery",
      // demoLink: "",
    },
    {
      name: "VR Robots",
      technologies: [
        "Tsukat", "Unity", "3D", "VR"
      ],
      // TODO: add description if needed
      desc: t("project.description_test"),
      // codeLink: "",
      demoLink: "https://tsukat.com/portfolio/koerber-vr-robots",
    },
    {
      name: "Learning Platform",
      technologies: [
        "Tsukat", "Unity", "3D", "WebGL"
      ],
      // TODO: add description if needed
      desc: t("project.description_test"),
      // codeLink: "",
      demoLink: "https://tsukat.com/portfolio/koerber-digital-academy",
    },
    {
      name: "Clerk Shadow",
      technologies: [
        "Game", "Unity", "2D", "Windows","WebGL"
      ],
      // TODO: add description if needed
      desc: t("project.description_test"),
      // codeLink: "",
      // demoLink: "",
    },
    {
      name: "Don’t miss your travel",
      technologies: [
        "Game", "Unity", "2D", "Windows","WebGL"
      ],
      // TODO: add description if needed
      desc: t("project.description_test"),
      // codeLink: "",
      // demoLink: "",
    }
  ];

  return PROJECTS_DATA;
};
