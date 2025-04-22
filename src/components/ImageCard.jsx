import './ImageCard.css';

const ImageCard = ({ image }) => {
    return <img src={image.urls.small} alt="" />
}

export default ImageCard;