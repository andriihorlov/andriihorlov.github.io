import { FC, memo, useContext, useState } from 'react'
import Carousel from 'react-multi-carousel';
import { Lightbox } from 'react-modal-image';
import 'react-multi-carousel/lib/styles.css';

import { GlobalContext } from '../../../../context/GlobalContext';
import useTheme from '../../../../hooks/useTheme';

import styles from './styles.module.scss';

type ProjectCarouselType = {
  gallery: string[]
  name: string
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const ProjectCarousel: FC<ProjectCarouselType> = ({ gallery, name }) => {
  const { theme } = useContext(GlobalContext);
  const { addTheme } = useTheme(theme, styles.light);
  const [modalUrl, setModalUrl] = useState('');

  const closeLightbox = () => {
    setModalUrl('')
  }

  const handleSetModalUrl = (url: string) => {
    setModalUrl(url)
  }

  return (
    <>
      <Carousel responsive={responsive}>
        {gallery.map(galleryUrl => (
          <div
            key={galleryUrl}
            className={addTheme(styles.galleryItem)}
            role="button"
            onClick={() => handleSetModalUrl(galleryUrl)}
          >
            <img src={require(`../../../../assets/projectsImg/${galleryUrl}`)} alt="Project img" />
          </div>
        ))}
      </Carousel>

      {modalUrl && (
        <Lightbox
          small={require(`../../../../assets/projectsImg/${modalUrl}`)}
          medium={require(`../../../../assets/projectsImg/${modalUrl}`)}
          large={require(`../../../../assets/projectsImg/${modalUrl}`)}
          alt={name || ''}
          // @ts-ignore
          onClose={closeLightbox}
        />
      )}
    </>
  )
}

export default memo(ProjectCarousel)
