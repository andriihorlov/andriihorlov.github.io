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
      desc: t("project.description_vr_gallery"),
      codeLink: "https://github.com/FidgHorlov/VrGallery",
	    moreInfo: "",
      demoLink: "https://github.com/FidgHorlov/VrGallery/releases/tag/release",
      gallery: [
        'VR_Gallery/item1.jpeg',
        'VR_Gallery/item2.jpeg',
        'VR_Gallery/item3.jpeg',
        'VR_Gallery/item4.jpeg',
        'VR_Gallery/item5.jpeg',
      ]
    },
    {
      name: "VR Robots",
      technologies: [
        "Unity", "C#", "VR", "Hand-tracking", "OVR (Oculus Integration)"
      ],
      desc: t("project.description_robots_vr"),
      codeLink: "",
	    moreInfo : "https://tsukat.com/portfolio/koerber-vr-robots",
      demoLink: "",
    },
    {
      name: "Learning Platform",
      technologies: [
        "Unity", "C#", "3D", "WebGL", "Unity Customization", "API integration"
      ],
      desc: t("project.description_digital_academy"),
      codeLink: "",
	    moreInfo: "https://tsukat.com/portfolio/koerber-digital-academy",
      demoLink: "",
    },
    {
      name: "Clerk Shadow",
      technologies: [
        "Unity", "C#", "2D", "Windows", "WebGL"
      ],
      desc: t("project.description_clerk_shadow"),
      codeLink: "",
	    moreInfo: "",
      demoLink: "",
    },
    {
      name: "Don’t miss your travel",
      technologies: [
        "Unity", "C#", "2D", "Windows", "WebGL"
      ],
      desc: t("project.description_dont_miss_your_travel"),
      codeLink: "",
	    moreInfo: "",
      demoLink: "",
    }
  ];

  return PROJECTS_DATA;
};
