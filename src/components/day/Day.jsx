import React, { useState, useEffect } from 'react';
import Hour from '../hour/Hour';
import moment from 'moment';
import PropTypes from 'prop-types';
import './day.scss';

const Day = ({ events, dataDay, dayEvents, dayStart, onDeleteEvent }) => {
  const [line, setLine] = useState({
    marginTop: new Date().getHours() * (60 - 1) + new Date().getMinutes(),
  });
  useEffect(() => {
    const timeOut = setInterval(() => {
      setLine({
        marginTop: new Date().getHours() * (60 - 1) + new Date().getMinutes(),
      });
    }, 60 * 1000);
    return () => {
      clearInterval(timeOut);
    };
  }, []);

  const dayNow =
    moment(dayStart).format('MMMM Do YYYY') === moment(new Date()).format('MMMM Do YYYY');
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {dayNow && <div className="red-line" style={line} />}
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);
        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            events={events}
            onDeleteEvent={onDeleteEvent}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  events: PropTypes.array.isRequired,
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
  dayStart: PropTypes.object.isRequired,
};

export default Day;
