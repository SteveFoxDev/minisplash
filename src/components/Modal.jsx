import { createPortal } from 'react-dom';
import './Modal.scss';

const Modal = ({ onCancel, image }) => {
  const content = (
    <>
      <div className='modal-bg' onClick={onCancel}></div>
      <div className='modal'>
        <div className='modal-header'>
          <h2 className='modal-title'>Photo by: {image.user.name}</h2>
          <a className='modal-btn' onClick={onCancel} ></a>
        </div>
        <div className='modal-body'>
            <img className='modal-img' src={image.urls.regular} alt={image.alt_description} />
        </div>
      </div>
    </>
  );
  return createPortal(content, document.querySelector('.modal-container'));
};

export default Modal;