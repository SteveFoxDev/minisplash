import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useImagesContext from './hooks/use-images-context';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = () => {
  const { images, fetchImages, hasMore } = useImagesContext();

  useEffect(() => {
    fetchImages();
  }, []);

  const renderedImages = images.map((image, i) => {
    return <ImageCard key={`${image.id}${i}`} image={image} />;
  });

  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={hasMore}
      loader={<h4>Is Loading ...</h4>}
    >
      <div className='image-list'>
        {renderedImages}
      </div>
    </InfiniteScroll>
  );
};

export default ImageList;
