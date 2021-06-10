import GalleryItem from '../GalleryItem/GalleryItem';
import PropTypes from 'prop-types';

const Gallery = ({ showGallery, onImgClick }) => {
  return (
    <ul className="Gallery">
      {showGallery.map(({ id, webformatURL, largeImageURL }) => {
        const handleItemClick = () => onImgClick(largeImageURL);
        return (
          <GalleryItem
            key={id}
            webformatURL={webformatURL}
            onImgClick={handleItemClick}
          />
        );
      })}
    </ul>
  );
};

Gallery.propTypes = {
    onImgClick: PropTypes.func,
  showGallery: PropTypes.array,
};

export default Gallery;