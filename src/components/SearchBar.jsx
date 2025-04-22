import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import useImagesContext from '../hooks/use-images-context';
import './SearchBar.scss';

const SearchBar = () => {
  const { handleSubmit } = useImagesContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit(searchTerm);
    setSearchTerm('');
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit} action='' className='search-bar__form'>
        <input
          value={searchTerm}
          onChange={handleChange}
          type='text'
          className='search-bar__input'
          placeholder='Search Photos'
        />
        <button className='search-bar__btn' onSubmit={handleFormSubmit}>
          <IoMdSearch className='search-bar__icon' />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
