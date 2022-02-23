import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './event.scss';

const Event = ({ id, height, marginTop, title, time, onDeleteEvent }) => {
  const [showButDel, setShowButDel] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };
  const showButDelEvent = () => {
    setShowButDel(!showButDel);
  };

  const handleDelete = () => {
    onDeleteEvent(id);
  };

  return (
    <div style={eventStyle} className="event" onClick={showButDelEvent}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {showButDel && (
        <button className="delete-event-btn" onClick={handleDelete}>
          DELETE
        </button>
      )}
    </div>
  );
};
Event.propTypes = {
  id: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string,
  onDeleteEvent: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
};

export default Event;
