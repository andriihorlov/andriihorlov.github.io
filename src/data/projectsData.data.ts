import { TFunction } from "i18next";

export const useProjectData = (
  t: TFunction<"translation", undefined, "translation">
) => {
  const PROJECTS_DATA = [
    {
      name: "VR Gallery",
      technologies: [
        "Unity", "C#", "VR", "MetaSDK", "Work with file-system" 
      ],
      // TODO: add description if needed
      desc: t("project.description_vr_gallery"),
      codeLink: "https://github.com/FidgHorlov/VrGallery",
	  // more_info: "",
      demoLink: "https://github.com/FidgHorlov/VrGallery/releases/tag/release",
    },
    {
      name: "VR Robots",
      technologies: [
        "Unity", "C#", "VR", "Hand-tracking", "OVR (Oculus Integration)"
      ],
      // TODO: add description if needed
      desc: t("project.description_robots_vr"),
      // codeLink: "",
	  // more_info : "https://tsukat.com/portfolio/koerber-vr-robots",
      // demoLink: "",
    },
    {
      name: "Learning Platform",
      technologies: [
        "Unity", "C#", "3D", "WebGL", "Unity Customization", "API integration"
      ],
      // TODO: add description if needed
      desc: t("project.description_digital_academy"),
      // codeLink: "",
	  // more_info: "https://tsukat.com/portfolio/koerber-digital-academy",
      // demoLink: "",
    },
    {
      name: "Clerk Shadow",
      technologies: [
        "Unity", "C#", "2D", "Windows", "WebGL"
      ],
      // TODO: add description if needed
      desc: t("project.description_clerk_shadow"),
      // codeLink: "",
	  // more_info: "",
      // demoLink: "",
    },
    {
      name: "Don’t miss your travel",
      technologies: [
        "Unity", "C#", "2D", "Windows", "WebGL"
      ],
      // TODO: add description if needed
      desc: t("project.description_dont_miss_your_travel"),
      // codeLink: "",
	  // more_info: "",
      // demoLink: "",
    }
  ];

  return PROJECTS_DATA;
};
