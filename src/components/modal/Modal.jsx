import React, { useState } from 'react';
import { getDateTime } from '../../utils/dateUtils';
import './modal.scss';
import moment from 'moment';
import PropTypes from 'prop-types';

const Modal = ({ isCloseModal, onCreateEvent }) => {
  const [modalEvent, setModalEvent] = useState({
    title: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    dateFrom: moment(new Date()).format('HH:mm'),
    dateTo: moment(new Date()).format('HH:mm'),
    description: '',
  });

  const { title, date, dateFrom, dateTo, description } = modalEvent;

  const handleChange = e => {
    setModalEvent({
      ...modalEvent,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const updatedEvent = {
      title,
      description,
      dateFrom: getDateTime(date, dateFrom),
      dateTo: getDateTime(date, dateTo),
    };
    if (dateFrom > dateTo) {
      alert('You should to done it in one day');
    } else {
      onCreateEvent(updatedEvent);
      isCloseModal();
    }
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={isCloseModal}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="dateFrom"
                className="event-form__field"
                value={dateFrom}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="dateTo"
                className="event-form__field"
                value={dateTo}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  onCreateEvent: PropTypes.func.isRequired,
};

export default Modal;
