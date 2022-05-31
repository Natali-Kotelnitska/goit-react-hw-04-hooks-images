import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fetchImages from 'services/images-api';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal';
import { Searchbar } from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';
import Button from './ui/Button/Button';
import mapper from './utils/mapper';
import Error from './ui/Error/Error';
import Loader from './ui/Loader/Loader';

export const App = () => {
  const [searchQuery, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [tag, setTag] = useState('');
  const [error, setError] = useState('');

  // export default class App extends Component {
  //   state = {
  //     searchQuery: '',
  //     images: [],
  //     page: 1,
  //     showModal: false,
  //     loading: false,
  //     largeImage: '',
  //     tag: '',
  //     error: null,
  //   };

  // useEffect(() => {
  //   setImages([]);
  // }, []);

  const fetchGallery = (searchQuery, page) => {
    //     const { searchQuery, page } = this.state;
    fetchImages(searchQuery, page)
      .then(res => {
        const nextImages = mapper(res.data.hits);

        if (!res.data.hits.length) {
          setImages([]);
          // this.setState({ images: [] });
          toast.error('Sorry, image not found.');
          return;
        }

        setImages(prevState => [...prevState, ...nextImages]);
        // this.setState(prevState => ({
        //   images: [...prevState.images, ...nextImages],
        // }));
      })
      .catch(error => {
        setError();
        // this.setState({ error });
        toast.error('Something went wrong');
      })
      .finally(() => setLoading(false));
    // .finally(() => this.setState({ loading: false }));
  };

  useEffect(() => {
    setLoading(true);
    fetchGallery(searchQuery, page);
  }, [searchQuery, page]);
  //   componentDidUpdate(prevProps, prevState) {
  //     const { searchQuery, page } = this.state;
  //     if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
  //       this.setState({ loading: true });
  //       this.fetchGallery();
  //     }
  //   }

  const handleFormSubmit = searchQuery => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
    // this.setState({ page: 1, images: [], searchQuery });
  };
  //   handleFormSubmit = searchQuery => {
  //     this.setState({ page: 1, images: [], searchQuery });
  //   };

  const onLoadBtnClick = () => {
    setPage(prevPage => prevPage + 1);
  };
  //   onLoadBtnClick = () => {
  //     this.setState(prevState => ({
  //       page: prevState.page + 1,
  //     }));
  //   };

  const toggleModal = () => {
    setModal(!showModal);
    // this.setState(({ showModal }) => ({
    //   showModal: !showModal,
    // }));
  };

  const openModal = (tag, largeImageURL) => {
    toggleModal();
    setLargeImage(largeImageURL);
    setTag(tag);
    // this.setState({
    //   largeImage: largeImageURL,
    //   tag: tag,
    // });
  };
  //   render() {
  //     const { images, showModal, loading, error, largeImage, tag } = this.state;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar onSubmit={handleFormSubmit} />

      {error && <Error message={error.message} />}
      {images.length && (
        <ImageGallery images={images} onOpenModal={openModal} />
      )}
      {/* <ImageGallery images={images} onOpenModal={this.openModal} /> */}
      {loading && <Loader />}
      {images.length > 11 && <Button onBtnClick={onLoadBtnClick} />}
      {showModal && (
        <Modal largeImg={largeImage} altTag={tag} onModalClick={toggleModal} />
      )}
      <ToastContainer
        position="top-right"
        theme="colored"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};
// }
