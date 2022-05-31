import PropTypes from 'prop-types';
import s from '../ImageGallery.module.css';

const ImageGalleryItem = ({ url, tag, openModal, largeImageURL }) => {
  return (
    <li className={s.imageGalleryItem}>
      <img
        onClick={() => openModal(tag, largeImageURL)}
        src={url}
        alt={tag || 'image'}
        loading="lazy"
        // width="780"
        className={s.imageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  openModal: PropTypes.func,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
