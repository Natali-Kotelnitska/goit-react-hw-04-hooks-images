import s from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <span className={s.spinner}>
        <RotatingLines width="50" strokeColor="#3f51b5" animationDuration="1" />
      </span>
      Loading ...
    </div>
  );
};

export default Loader;
