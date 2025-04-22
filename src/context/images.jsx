import { createContext, useState } from "react";
import { searchImages, getImages } from '../api';

const ImagesContext = createContext();

function Provider({children}) {
    const [query, setQuery] = useState();
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1); // start page count at 1, because it is the first batch
    const [hasMore, setHasMore] = useState(true);

    // fetchImages() checks if a query is set.  If so it makes a get request with the query.
    // then it sets hasMore based on the result, and pushes the next page of images onto state.
    // If no query is set, it makes a get request for the Unsplash editorial photos list.  
    // Then pushes the next page of images onto state.  
    // Note: The only time images state is replaced (or needs to be replaced) is through handleSubmit. 
    const fetchImages = async () => {
        try {
          let result;
          if (query) { //If query is set, keep getting photos from that query
            result = await searchImages(query, page); 
            if(result.total_pages === 0){ 
              setHasMore(false);
            } else { 
              setImages([...images, ...result]);
            }
          } else { // Else if no query, get photos from editorial feed
            result = await getImages(page); 
            setImages([...images, ...result]);
          }
          setPage(p => p + 1); //increment page count
        } catch (error) {
        console.log(error);
        } 
      };
      // Handle Submit comes from the SearchBar Component. It sets the query with the search term, and returns the first 10 images.
      const handleSubmit = async (searchTerm) => {
        setPage(2); // This Fn returns the first page, needs to be at 2 so that it will return the second page at bottom scroll.
        if(!searchTerm){
          return;
        } else {
          setQuery(searchTerm);
          const result = await searchImages(searchTerm, page);
          setImages(result);
        }
      };

      const valuesToShare = {
        images,
        hasMore,
        fetchImages,
        handleSubmit,
      };

      return <ImagesContext.Provider value={valuesToShare}>{children}</ImagesContext.Provider>
}

export { Provider };
export default ImagesContext;