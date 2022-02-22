import React, { useState } from 'react';
import events from '../../gateway/events';
import './modal.scss';
import moment from 'moment';

const Modal = ({ isCloseModal, onCreateEvent }) => {
  const [modalEvent, setModalEvent] = useState({
    id: new Date().getTime(),
    title: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    startTime: moment(new Date()).format('HH:mm'),
    endTime: moment(new Date()).format('HH:mm'),
    description: '',
  });

  const handleChange = e => {
    setModalEvent({
      ...modalEvent,
      [e.target.name]: e.target.value,
    });
    console.log(modalEvent);
    onCreateEvent(modalEvent);
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={isCloseModal}>
            +
          </button>
          <form className="event-form" >
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={modalEvent.title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={modalEvent.date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={modalEvent.startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={modalEvent.endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={modalEvent.description}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn" onClick={onCreateEvent}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
