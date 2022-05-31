import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
import s from './Searchbar.module.css';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  //   static propTypes = {
  //     onSubmit: PropTypes.func,
  //   };
  const [searchQuery, setSearchQuery] = useState('');
  //   state = {
  //     searchQuery: '',
  //   };
  // console.log(onSubmit);
  const handleQueryChange = e => {
    const searchValue = e.currentTarget.value.toLowerCase();
    setSearchQuery(searchValue);
    // this.setState({ searchQuery: searchValue });
  };

  const handleSubmit = e => {
    // const { onSubmit } = this.props;
    // const { searchQuery } = this.state;

    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.warn('Please, enter a search term');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
    // this.setState({
    //   searchQuery: e.target.elements.searchQuery.value,
    // });
    // this.setState({ searchQuery: '' });
  };

  //   render() {
  //     const { searchQuery } = this.state;
  return (
    <header className={s.searchbar}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <button type="submit" className={s.searchFormButton}>
          <FcSearch size="29px" />
          <span className={s.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          name="searchQuery"
          value={searchQuery}
          onChange={handleQueryChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
  //   }
};
