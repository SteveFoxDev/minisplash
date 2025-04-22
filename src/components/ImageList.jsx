import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useImagesContext from '../hooks/use-images-context';
import ImageCard from './ImageCard';
import './ImageList.scss';

const ImageList = () => {
  const { images, hasMore, fetchImages } = useImagesContext();

  useEffect(() => {
    fetchImages();
  }, []);

  const renderedImages1 = images.map((image, i) => {
    const j = i < 10 ? i : i % 10; //get last digit
    if(j <= 3){
      return <ImageCard key={`${image.id}${i}`} image={image} />;
    }
  });
  const renderedImages2 = images.map((image, i) => {
    const j = i < 10 ? i : i % 10; //get last digit
    if(j > 3 && j <= 7){
      return <ImageCard key={`${image.id}${i}`} image={image} />;
    }
  });
  const renderedImages3 = images.map((image, i) => {
    const j = i < 10 ? i : i % 10; //get last digit
    if(j > 7){
      return <ImageCard key={`${image.id}${i}`} image={image} />;
    }
  });
  const newRenderedList = (
  <>
    <div className="image-list__col-1">{renderedImages1}</div>
    <div className="image-list__col-2">{renderedImages2}</div>
    <div className="image-list__col-3">{renderedImages3}</div>
  </>
  );

  return (
    <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={hasMore}
          loader={<h4>Is Loading ...</h4>}
        >
    <div className='image-list'>
          {/* {renderedImages} */}
          {newRenderedList}
    </div>
    </InfiniteScroll>
  );
};

export default ImageList;
