import { FC, memo, useContext } from 'react'
import Carousel from 'react-multi-carousel';
import ModalImage from 'react-modal-image';
import 'react-multi-carousel/lib/styles.css';

import { GlobalContext } from '../../../../context/GlobalContext';
import useTheme from '../../../../hooks/useTheme';

import styles from './styles.module.scss';

type ProjectCarouselType = {
  gallery: string[]
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

const ProjectCarousel: FC<ProjectCarouselType> = ({ gallery }) => {
  const { theme } = useContext(GlobalContext);
  const { addTheme } = useTheme(theme, styles.light);

  return (
    <Carousel responsive={responsive}>
      {gallery.map(galleryUrl => (
        <div key={galleryUrl} className={addTheme(styles.galleryItem)}>
          {/*<img src={require(`../../../../assets/projectsImg/${galleryUrl}`)} alt="Project img" />*/}
          <ModalImage
            small={require(`../../../../assets/projectsImg/${galleryUrl}`)}
            large={require(`../../../../assets/projectsImg/${galleryUrl}`)}
            alt="Project img"
          />
        </div>
      ))}
    </Carousel>
  )
}

export default memo(ProjectCarousel)
