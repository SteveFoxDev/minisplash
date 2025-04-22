import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

import './App.css';

function App() {
  return (
    <div>
      <Header>
        <SearchBar />
      </Header>
      <ImageList />
    </div>
  );
}

export default App;
