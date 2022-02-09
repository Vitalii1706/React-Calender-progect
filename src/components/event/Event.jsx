import React, { useState } from 'react';
import { validationForDelete } from '../../utils/validations';
import './event.scss';

const Event = ({ height, marginTop, title, time, onDeleteEvent, id }) => {
  const [deleteEventButton, setDeleteEventButton] = useState(false);

  const showDeleteEventButton = () => {
    setDeleteEventButton(!deleteEventButton);
  };

  const eventStyle = {
    height,
    marginTop,
  };

  const handleDelete = () => {
    if (validationForDelete(time)) {
      alert('Event starts is less then 15min, you cann`t delete it');
    } else onDeleteEvent(id);
  };

  return (
    <>
      <div style={eventStyle} className="event" onClick={showDeleteEventButton}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {deleteEventButton && (
        <button className="delete-event-btn" onClick={handleDelete}>
          Delete
        </button>
      )}
    </>
  );
};

export default Event;
