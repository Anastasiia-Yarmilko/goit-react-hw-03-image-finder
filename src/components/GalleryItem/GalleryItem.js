import style from './GalleryItem.module.css';
import PropTypes from 'prop-types';

const GalleryItem = ({ webformatURL, onImgClick }) => {
  return (
    <li className={style.GalleryItem}>
      <img
        src={webformatURL}
        alt="img"
        className={style.GalleryItemImage}
        onClick={onImgClick}
      />
    </li>
  );
};

GalleryItem.propTypes = {
  webformatURL: PropTypes.string,
};

export default GalleryItem;