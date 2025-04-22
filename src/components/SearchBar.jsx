import { useState } from 'react';
import useImagesContext from './hooks/use-images-context';
import './SearchBar.css';

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
    
    return <div className="search-bar__container">
        <form onSubmit={handleFormSubmit} action="" className="search-bar__form">
            <input value={searchTerm} onChange={handleChange} type="text" className="search-bar__input" placeholder='Search Photos'/>
            <button onSubmit={handleFormSubmit}>search</button>
        </form>
    </div>
}

export default SearchBar;