import React, { useState, useEffect } from 'react';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import './hour.scss';
import PropTypes from 'prop-types';

const Hour = ({ dataHour, hourEvents, onDeleteEvent, isCurrentDay }) => {
  const [line, setLine] = useState({
    marginTop: new Date().getMinutes() + new Date().getHours() * (60 - 1),
  });

  useEffect(() => {
    const currentTimeout = setInterval(() => {
      setLine({
        marginTop: new Date().getMinutes() + new Date().getHours() * (60 - 1),
      });
    }, 60000);

    return () => {
      clearInterval(currentTimeout);
    };
  }, []);

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {isCurrentDay === dataHour && <div className="redLine" style={line}></div>}
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
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

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
  isCurrentDay: PropTypes.bool.isRequired,
};

export default Hour;
