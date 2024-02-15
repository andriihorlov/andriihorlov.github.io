import { FC, memo, useContext, useState, useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { GlobalContext } from "../../../../context/GlobalContext";
import useTheme from "../../../../hooks/useTheme";

import styles from "./styles.module.scss";

import arrowLeft from "../../../../assets/arrow-left.svg";
import arrowRight from "../../../../assets/arrow-right.svg";
import arrowLeftLight from "../../../../assets/arrow-left-light.svg";
import arrowRightLight from "../../../../assets/arrow-right-light.svg";

type ProjectCarouselType = {
  gallery: string[];
  name: string;
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ProjectCarousel: FC<ProjectCarouselType> = ({ gallery, name }) => {
  const { theme } = useContext(GlobalContext);
  const { addTheme } = useTheme(theme, styles.light);
  const [modalUrl, setModalUrl] = useState("");

  const modalRef = useRef(null);

  useEffect(() => {
    const clickOutsideContent = (e: any) => {
      if (e.target === modalRef.current) {
        setModalUrl("");
      }
    };
    window.addEventListener("click", clickOutsideContent);

    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, [modalUrl]);

  const handleSetModalUrl = (url: string) => {
    setModalUrl(url);
  };

  return (
    <>
      <Carousel responsive={responsive}>
        {gallery.map((galleryUrl) => (
          <div
            key={galleryUrl}
            className={addTheme(styles.galleryItem)}
            role="button"
            onClick={() => {
              handleSetModalUrl(galleryUrl);
            }}
          >
            <img
              src={require(`../../../../assets/projectsImg/${galleryUrl}`)}
              alt="Project img"
            />
          </div>
        ))}
      </Carousel>

      {modalUrl && (
        <div className={styles.modal}>
          <div ref={modalRef} className={styles.content}>
            <div className={styles.buttonContainer}>
              <button
                onClick={() =>
                  setModalUrl(gallery[gallery.indexOf(modalUrl) - 1])
                }
                disabled={gallery.indexOf(modalUrl) === 0}
                className={addTheme(styles.switchButton)}
              >
                <img src={theme ? arrowLeftLight : arrowLeft} alt="arrow" />
              </button>
            </div>
            <div className={styles.containerImage}>
              <div className={addTheme(styles.header)}>
                <div className={addTheme(styles.modalTitle)}>{name}</div>
                <button
                  onClick={() => setModalUrl("")}
                  className={addTheme(styles.closeButton)}
                >
                  X
                </button>
              </div>
              <div className={styles.image}>
                <img
                  src={require(`../../../../assets/projectsImg/${modalUrl}`)}
                  alt="Project img"
                />
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button
                onClick={() =>
                  setModalUrl(gallery[gallery.indexOf(modalUrl) + 1])
                }
                disabled={gallery.length - 1 === gallery.indexOf(modalUrl)}
                className={addTheme(styles.switchButton)}
              >
                <img src={theme ? arrowRightLight : arrowRight} alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(ProjectCarousel);
