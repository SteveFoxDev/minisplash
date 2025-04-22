import { useState } from 'react';
import Modal from './Modal';
import './ImageCard.scss';

const ImageCard = ({ image, className }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const onCancel = () => setShowModal(false);

  return (
    <>
      {showModal && <Modal image={image} onCancel={onCancel}></Modal>}
      <img
        className={`image-card__img ${className}`}
        onClick={handleOpenModal}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </>
  );
};

export default ImageCard;
