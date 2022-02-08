import React, { useState } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';

import './calendar.scss';

const Calendar = ({ weekDates, handleChangeShowModal, isShownModal }) => {
  const { events, setEvents } = useState([]);

  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar key={Math.random()} />
          <Week
            weekDates={weekDates}
            events={events}
            handleChangeShowModal={handleChangeShowModal}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
