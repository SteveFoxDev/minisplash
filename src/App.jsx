import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

import './sass/main.scss';

function App() {
  return (
    <>
      <Header>
        <SearchBar />
      </Header>
      <ImageList />
    </>
  );
}

export default App;
