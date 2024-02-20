import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { GlobalContext } from "../../context/GlobalContext";
import useTheme from "../../hooks/useTheme";

import styles from "./GalleryModal.module.scss";

import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import arrowLeftLight from "../../assets/arrow-left-light.svg";
import arrowRightLight from "../../assets/arrow-right-light.svg";

interface GalleryModalProps {
  name: string;
  modalUrl: string;
  setModalUrl: (url: string) => void;
  gallery: string[];
}

const GalleryModal = ({
  name,
  modalUrl,
  setModalUrl,
  gallery,
}: GalleryModalProps) => {
  const { theme } = useContext(GlobalContext);
  const { addTheme } = useTheme(theme, styles.light);

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

  return createPortal(
    <div className={styles.modal}>
      <div ref={modalRef} className={styles.content}>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setModalUrl(gallery[gallery.indexOf(modalUrl) - 1])}
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
              data-atr="closeButton"
            >
              X
            </button>
          </div>

          <div className={styles.image}>
            <img
              src={require(`../../assets/projectsImg/${modalUrl}`)}
              alt="Project img"
            />
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button
            onClick={() => setModalUrl(gallery[gallery.indexOf(modalUrl) + 1])}
            disabled={gallery.length - 1 === gallery.indexOf(modalUrl)}
            className={addTheme(styles.switchButton)}
          >
            <img src={theme ? arrowRightLight : arrowRight} alt="arrow" />
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal") as Element
  );
};

export default GalleryModal;
