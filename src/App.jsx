import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { searchImages, getImages } from './api';
import './App.css'

function App() {  
  const [query , setQuery ] = useState('');
  const [images , setImages ] = useState([]);
  

  const handleSubmit = async (searchTerm) => {
    if(searchTerm) {
      setQuery(searchTerm);
      const result = await searchImages(query);
      setImages(result);
    } else {
      setQuery('');
      const result = await getImages();
      setImages(result);
    }
  };

  console.log(images);

  return (
    <div>
      <Header ><SearchBar onSubmit={handleSubmit} /></Header>
    </div>
  )
}

export default App
