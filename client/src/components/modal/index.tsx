import React from 'react';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { renderComponent } from './Switch';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Modal = () => {
  const { toggleModal } = useActions();
  const { displayModal, component } = useTypedSelector((state) => state.modal);
  const handleCloseModal = () => toggleModal(false, null);

  React.useEffect(() => {
    disableBodyScroll(document.querySelector('.main-content')!);
    return () => {
      enableBodyScroll(document.querySelector('.main-content')!);
    };
  }, []);

  return (
    <div className={`modal ${displayModal ? 'open' : 'closed'}`}>
      <div className='modal__close-btn' onClick={handleCloseModal}>
        <span className='material-icons'>close</span>
      </div>
      <div className='modal__body'>{renderComponent(component)}</div>
    </div>
  );
};

export default Modal;
