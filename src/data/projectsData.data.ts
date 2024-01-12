import { TFunction } from "i18next";

export const useProjectData = (
  t: TFunction<"translation", undefined, "translation">
) => {
  const PROJECTS_DATA = [
    {
      name: "Simple Gallery VR",
      technologies: [
        "Unity", "C#", "VR", "MetaSDK", "File System Management", "DoTween"
      ],
      desc: t("project.description_vr_gallery"),
      codeLink: "https://github.com/FidgHorlov/VrGallery",
	  moreInfo: "",
      demoLink: "https://github.com/FidgHorlov/VrGallery/releases",
      gallery: [
        'GalleryVR/GalleryVR_1.jpg',
        'GalleryVR/GalleryVR_2.jpg',
        'GalleryVR/GalleryVR_3.jpg',
        'GalleryVR/GalleryVR_4.jpg',
        'GalleryVR/GalleryVR_5.jpg',
        'GalleryVR/GalleryVR_6.jpg',
        'GalleryVR/GalleryVR_7.jpg',
      ]
    },
	{
      name: "MoviePass VR",
      technologies: [
        "Unity", "C#", "VR", "XR Toolkit", "API Integration", "DoTween"
      ],
      desc: t("project.description_moviepass_vr"),
      codeLink: "",
	  moreInfo: "https://tsukat.com/portfolio/moviepass-vr-cinema-app",
      demoLink: "",
      gallery: [
        'MoviePassVR/MoviePassVR_1.jpg',
        'MoviePassVR/MoviePassVR_2.jpg',
        'MoviePassVR/MoviePassVR_3.jpg',
        'MoviePassVR/MoviePassVR_4.jpg',
      ]
    },
    {
      name: "VR Robots",
      technologies: [
        "Unity", "C#", "VR", "Hand-tracking", "OVR (Oculus Integration)", "DoTween"
      ],
      desc: t("project.description_robots_vr"),
      codeLink: "",
	  moreInfo : "https://tsukat.com/portfolio/koerber-vr-robots",
      demoLink: "",
	  gallery: [
        'RobotsVR/RobotsVR_1.jpg',
        'RobotsVR/RobotsVR_2.jpg',
        'RobotsVR/RobotsVR_3.jpg',
        'RobotsVR/RobotsVR_4.jpg',
        'RobotsVR/RobotsVR_5.jpg',
        'RobotsVR/RobotsVR_6.jpg',
        'RobotsVR/RobotsVR_7.jpg',
        'RobotsVR/RobotsVR_8.jpg',
        'RobotsVR/RobotsVR_9.jpg',
      ]
    },
    {
      name: "Learning Platform",
      technologies: [
        "Unity", "C#", "3D", "WebGL", "Unity Customization", "API integration", "Cinemamachine Brain"
      ],
      desc: t("project.description_digital_academy"),
      codeLink: "",
	  moreInfo: "https://tsukat.com/portfolio/koerber-digital-academy",
      demoLink: "",
	  gallery: [
        'DigitalAcademy/DigitalAcademy_1.jpg',
        'DigitalAcademy/DigitalAcademy_2.jpg',
        'DigitalAcademy/DigitalAcademy_3.jpg',
        'DigitalAcademy/DigitalAcademy_4.jpg',
        'DigitalAcademy/DigitalAcademy_5.jpg',
        'DigitalAcademy/DigitalAcademy_6.jpg',
      ]
    },
    {
      name: "Clerk Shadow",
      technologies: [
        "Unity", "C#", "2D", "Windows", "WebGL", "DoTween"
      ],
      desc: t("project.description_clerk_shadow"),
      codeLink: "",
	  moreInfo: "",
      demoLink: "",
	  gallery: [
        'ClerkShadow/Clerk_1.jpg',
        'ClerkShadow/Clerk_2.jpg',
        'ClerkShadow/Clerk_3.jpg',
        'ClerkShadow/Clerk_4.jpg',
        'ClerkShadow/Clerk_5.jpg',
        'ClerkShadow/Clerk_6.jpg',
        'ClerkShadow/Clerk_7.jpg',
      ]
    },
    {
      name: "Don’t miss your travel",
      technologies: [
        "Unity", "C#", "2D", "Windows", "WebGL"
      ],
      desc: t("project.description_dont_miss_your_travel"),
      codeLink: "",
	  moreInfo: "",
      demoLink: "https://fidgetik.itch.io/dont-miss-your-travel",
	  gallery: [
        'DontMissTravel/DontMissTravel_1.jpg',
        'DontMissTravel/DontMissTravel_2.jpg',
        'DontMissTravel/DontMissTravel_3.jpg',
        'DontMissTravel/DontMissTravel_4.jpg',
        'DontMissTravel/DontMissTravel_5.jpg',
        'DontMissTravel/DontMissTravel_6.jpg',
        'DontMissTravel/DontMissTravel_7.jpg',
        'DontMissTravel/DontMissTravel_8.jpg',
      ]
    }
  ];

  return PROJECTS_DATA;
};
