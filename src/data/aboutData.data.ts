import { TFunction } from "i18next";

export const CONTENT_TECHNOLOGIES = [
  "Unity",
  "C#",
  "OVR SDK",
  "XR Toolkit",
  "AR Foundation",
  "EasyAR",
  "PicoSDK",
  "JSON",
  "Photon PUN (v2)",
  "Photon Fusion (v1, v2)",
  "Agora SDK",
  "API Integration",
  "Firebase",
  "Work with native DLLs",
  "WebGL/Windows/Android builds",
  "Android/IOS publishing",
  "Unity Editor customization",
];

export const useAboutData = (
  t: TFunction<"translation", undefined, "translation">
) => {
  const ABOUT_DATA = [
    { content: CONTENT_TECHNOLOGIES, number: "01.", name: t("home.skills") },
    {
      content: [t("home.univ"), t("home.course")],
      number: "02.",
      name: t("home.edu"),
    },
    {
      content: [t("home.uk"), t("home.en")],
      number: "03.",
      name: t("home.lang"),
    },
  ];

  return ABOUT_DATA;
};
