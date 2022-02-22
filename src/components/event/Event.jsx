import React, { useState } from 'react';
import './event.scss';

const Event = ({ id, height, marginTop, title, time, deleteEvent }) => {
  const [showButDel, setShowButDel] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };
  const showButDelEvent = () => {
    setShowButDel(!showButDel);
  };

  return (
    <div style={eventStyle} className="event" onClick={showButDelEvent}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {showButDel && (
        <button
          className="delete-event-btn"
          onClick={() => {
            deleteEvent(id);
          }}
        >
          DELETE
        </button>
      )}
    </div>
  );
};

export default Event;
