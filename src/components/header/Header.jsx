import React from 'react';
import Modal from '../modal/Modal';
import './header.scss';

const Header = ({
  goPrev,
  goNext,
  today,
  showMonth,
  isShowModal,
  showModal,
  isCloseModal,
  onCreateEvent,
}) => {
  return (
    <>
      {showModal ? <Modal isCloseModal={isCloseModal} onCreateEvent={onCreateEvent} /> : null}
      <header className="header">
        <button className="button create-event-btn" onClick={isShowModal}>
          <i className="fas fa-plus create-event-btn__icon"></i>Create
        </button>
        <div className="navigation">
          <button className="navigation__today-btn button" onClick={today}>
            Today
          </button>
          <button className="icon-button navigation__nav-icon" onClick={goPrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="icon-button navigation__nav-icon" onClick={goNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <span className="navigation__displayed-month">{showMonth}</span>
        </div>
      </header>
    </>
  );
};

export default Header;
