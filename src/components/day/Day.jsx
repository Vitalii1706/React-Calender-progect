import React, { useState, useEffect } from 'react';
import Hour from '../hour/Hour';
import moment from 'moment';

import './day.scss';

const Day = ({ events, dataDay, dayEvents, dayStart }) => {
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
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour key={dataDay + hour} dataHour={hour} hourEvents={hourEvents} events={events} />
        );
      })}
    </div>
  );
};

export default Day;
