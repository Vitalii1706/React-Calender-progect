import React, { useState } from 'react';
import Modal from '../modal/Modal';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({ weekDates, deleteEvent, events }) => {
  return (
    <>
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week weekDates={weekDates} events={events} deleteEvent={deleteEvent} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Calendar;
