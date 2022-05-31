// <!-- Load more Btn & Spinner -->
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ onBtnClick }) => {
  return (
    <button type="button" onClick={onBtnClick} className={s.button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};
export default Button;
