import React, { useState, useEffect } from 'react';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import './hour.scss';

const Hour = ({ dataHour, hourEvents, onDeleteEvent, isCurrentDay, onCloseModal }) => {
  const [hour, setHour] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHour(hour + 1);
    }

    const intervalId = setInterval(() => {
      setMinutes(minutes + 1);
    }, 1000 * 60);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <div
      className="calendar__time-slot"
      data-time={dataHour + 1}
      onClick={() => {
        if (hourEvents.lenght === 0) {
          onCloseModal();
        }
      }}
    >
      {isCurrentDay && hour === dataHour && (
        <div className="redLine" style={{ top: minutes }}></div>
      )}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            id={id}
            onDeleteEvent={onDeleteEvent}
          />
        );
      })}
    </div>
  );
};

export default Hour;
