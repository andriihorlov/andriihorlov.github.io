import { TFunction } from "i18next";

export const useProjectData = (
  t: TFunction<"translation", undefined, "translation">
) => {
  const PROJECTS_DATA = [
     {
      name: "Immersive Gallery AI",
      technologies: [
        "Unity",
        "C#",
        "VR",
		"Firebase",
		"DoTween",
		"XR Toolkit",
		"Zenject",
		"OpenAI",
      ],
      desc: t("project.description_immersivegalleryai"),
      codeLink: "",
      moreInfo: "",
      demoLink: "",
      gallery: [
        "ImmersiveGalleryAI/ImmersiveGalleryAI_1.jpg",
        "ImmersiveGalleryAi/ImmersiveGalleryAI_2.jpg",
        "ImmersiveGalleryAi/ImmersiveGalleryAI_3.jpg",
        "ImmersiveGalleryAi/ImmersiveGalleryAI_4.jpg",
        "ImmersiveGalleryAi/ImmersiveGalleryAI_5.jpg",
        "ImmersiveGalleryAi/ImmersiveGalleryAI_6.jpg",
        "ImmersiveGalleryAi/ImmersiveGalleryAI_7.jpg",
      ],
	  video: "https://www.youtube.com/embed/RL4igfD7drc?si=jFkPTZfPw78ttm39",
     },
     {
      name: "The Vang Mike",
      technologies: [
        "Unity",
        "C#",
        "VR",
		"Hand-tracking",
		"DoTween",
		"MetaSDK",
      ],
      desc: t("project.description_thevangmike"),
      codeLink: "",
      moreInfo: "",
      demoLink: "",
      gallery: [
        "TheVangMike/TheVangMike_1.jpg",
        "TheVangMike/TheVangMike_2.jpg",
        "TheVangMike/TheVangMike_3.jpg",
        "TheVangMike/TheVangMike_4.jpg",
        "TheVangMike/TheVangMike_5.jpg",
        "TheVangMike/TheVangMike_6.jpg",
      ],
	  video: "https://www.youtube.com/embed/e3gyVdfUSMQ?si=QShkL_IMpP8AORJm",
    },
    {
      name: "Unity tools",
      technologies: [
        "Unity",
        "C#",
        "Unity customization",
		"Unity Editor Tools",
      ],
      desc: t("project.description_assetstore"),
      codeLink: "https://github.com/andriihorlov/SeparateTools",
      moreInfo: "",
      demoLink: "https://assetstore.unity.com/publishers/94841",
      gallery: [
        "AssetsStore/AssetDetector_1.jpg",
        "AssetsStore/AssetDetector_2.jpg",
        "AssetsStore/AssetDetector_3.jpg",
        "AssetsStore/BuildLogger_1.jpg",
        "AssetsStore/BuildLogger_2.jpg",
        "AssetsStore/BuildLogger_3.jpg",
        "AssetsStore/ServiceLocator.jpg",
      ],
    },
    {
	    name: "CorPower VR",
      technologies: [
        "Unity",
        "C#",
        "VR",
		"Hand-tracking",
        "OVR (Oculus Integration)",
        "DoTween",
      ],
      desc: t("project.description_corpower_vr"),
      codeLink: "",
      moreInfo: "https://tsukat.com/portfolio/corpower-ocean-vr-experience",
      demoLink: "",
      gallery: [
        "CorPowerVR/CorPower_1.jpg",
        "CorPowerVR/CorPower_2.jpg",
        "CorPowerVR/CorPower_3.jpg",
        "CorPowerVR/CorPower_4.jpg",
        "CorPowerVR/CorPower_5.jpg",
        "CorPowerVR/CorPower_6.jpg",
      ],
      video: "https://player.vimeo.com/video/911575653?h=e4549b1e20",
    },
	  {
      name: "Simple Gallery VR",
      technologies: [
        "Unity",
        "C#",
        "VR",
        "MetaSDK",
        "File System Management",
        "DoTween",
      ],
      desc: t("project.description_vr_gallery"),
      codeLink: "https://github.com/andriihorlov/VrGallery",
      moreInfo: "",
      demoLink: "https://github.com/andriihorlov/VrGallery/releases",
      gallery: [
        "GalleryVR/GalleryVR_1.jpg",
        "GalleryVR/GalleryVR_2.jpg",
        "GalleryVR/GalleryVR_3.jpg",
        "GalleryVR/GalleryVR_4.jpg",
        "GalleryVR/GalleryVR_5.jpg",
        "GalleryVR/GalleryVR_6.jpg",
        "GalleryVR/GalleryVR_7.jpg",
      ],
      video: "https://www.youtube.com/embed/E590-BCadl0?si=BoU__pkG85WxPV8V",
    },
    {
      name: "MoviePass VR",
      technologies: [
        "Unity",
        "C#",
        "VR",
        "XR Toolkit",
        "API Integration",
        "DoTween",
      ],
      desc: t("project.description_moviepass_vr"),
      codeLink: "",
      moreInfo: "https://tsukat.com/portfolio/moviepass-vr-cinema-app",
      demoLink: "",
      gallery: [
        "MoviePassVR/MoviePassVR_1.jpg",
        "MoviePassVR/MoviePassVR_2.jpg",
        "MoviePassVR/MoviePassVR_3.jpg",
        "MoviePassVR/MoviePassVR_4.jpg",
      ],
      video: "https://player.vimeo.com/video/889916210?h=75b455e071",
    },
    {
      name: "VR Robots",
      technologies: [
        "Unity",
        "C#",
        "VR",
        "Hand-tracking",
        "OVR (Oculus Integration)",
        "DoTween",
      ],
      desc: t("project.description_robots_vr"),
      codeLink: "",
      moreInfo: "https://tsukat.com/portfolio/koerber-vr-robots",
      demoLink: "",
      gallery: [
        "RobotsVR/RobotsVR_1.jpg",
        "RobotsVR/RobotsVR_2.jpg",
        "RobotsVR/RobotsVR_3.jpg",
        "RobotsVR/RobotsVR_4.jpg",
        "RobotsVR/RobotsVR_5.jpg",
        "RobotsVR/RobotsVR_6.jpg",
        "RobotsVR/RobotsVR_7.jpg",
        "RobotsVR/RobotsVR_8.jpg",
        "RobotsVR/RobotsVR_9.jpg",
      ],
      video: "https://player.vimeo.com/video/874758080?h=42b57a3667",
    },
    {
      name: "Learning Platform",
      technologies: [
        "Unity",
        "C#",
        "3D",
        "WebGL",
        "Unity Customization",
        "API integration",
        "Cinemamachine Brain",
      ],
      desc: t("project.description_digital_academy"),
      codeLink: "",
      moreInfo: "https://tsukat.com/portfolio/koerber-digital-academy",
      demoLink: "",
      gallery: [
        "DigitalAcademy/DigitalAcademy_1.jpg",
        "DigitalAcademy/DigitalAcademy_2.jpg",
        "DigitalAcademy/DigitalAcademy_3.jpg",
        "DigitalAcademy/DigitalAcademy_4.jpg",
        "DigitalAcademy/DigitalAcademy_5.jpg",
        "DigitalAcademy/DigitalAcademy_6.jpg",
      ],
      video: "https://player.vimeo.com/video/776999870?h=cb9ab79bbf",
    },
    {
      name: "Clerk Shadow",
      technologies: [
        "Unity",
        "C#",
        "2D",
        "Windows",
        "WebGL",
        "DoTween",
        "Localization",
        "Cinemamachine Brain",
      ],
      desc: t("project.description_clerk_shadow"),
      codeLink: "https://github.com/andriihorlov/ClerkShadow",
      moreInfo: "",
      demoLink: "https://fidgetik.itch.io/clerkshadow",
      gallery: [
        "ClerkShadow/Clerk_1.jpg",
        "ClerkShadow/Clerk_2.jpg",
        "ClerkShadow/Clerk_3.jpg",
        "ClerkShadow/Clerk_4.jpg",
        "ClerkShadow/Clerk_5.jpg",
        "ClerkShadow/Clerk_6.jpg",
        "ClerkShadow/Clerk_7.jpg",
      ],
    },
    {
      name: "Don’t miss your travel",
      technologies: ["Unity", "C#", "2D", "Windows", "WebGL"],
      desc: t("project.description_dont_miss_your_travel"),
      codeLink: "https://github.com/andriihorlov/DontMissYourTravel",
      moreInfo: "",
      demoLink: "https://fidgetik.itch.io/dont-miss-your-travel",
      gallery: [
        "DontMissTravel/DontMissTravel_1.jpg",
        "DontMissTravel/DontMissTravel_2.jpg",
        "DontMissTravel/DontMissTravel_3.jpg",
        "DontMissTravel/DontMissTravel_4.jpg",
        "DontMissTravel/DontMissTravel_5.jpg",
        "DontMissTravel/DontMissTravel_6.jpg",
        "DontMissTravel/DontMissTravel_7.jpg",
        "DontMissTravel/DontMissTravel_8.jpg",
      ],
      video: "https://www.youtube.com/embed/tmIzZYaI3ZE?si=kmwDowbWgoH3wihO",
    },
  ];

  return PROJECTS_DATA;
};
