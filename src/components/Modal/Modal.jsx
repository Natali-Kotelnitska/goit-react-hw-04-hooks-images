import PropTypes from 'prop-types';
import { useEffect } from 'react';
import s from './Modal.module.css';

const Modal = ({ onModalClick, largeImg, altTag }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onModalClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClick]);

  // const onOverlayClick = e => {
  //   if (e.target === e.currentTarget) {
  //     this.props.onModalClick();
  //   }
  // };

  return (
    <div className={s.overlay} onClick={() => onModalClick()}>
      <div className={s.modal}>
        {/* {this.props.children} */}
        <img src={largeImg} alt={altTag} className={s.modalImg} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onModalClick: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
  altTag: PropTypes.string.isRequired,
};

export default Modal;
