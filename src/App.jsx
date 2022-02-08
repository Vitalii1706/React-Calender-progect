import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(getWeekStartDate(new Date()));
  const [isShownModal, setShownModal] = useState(false);
  const weekDates = generateWeekRange(weekStartDate);

  const switchWeekUp = () => {
    setWeekStartDate(new Date(weekStartDate.setTime(weekStartDate.getTime() + 604800000)));
  };

  const switchWeekDown = () => {
    setWeekStartDate(new Date(weekStartDate.setTime(weekStartDate.getTime() - 604800000)));
  };

  const switcToToday = () => setWeekStartDate(getWeekStartDate(new Date()));

  const handleChangeShowModal = () => {
    setShownModal(!isShownModal);
  };

  return (
    <>
      <Header
        nextWeek={switchWeekUp}
        prevWeek={switchWeekDown}
        onToday={switcToToday}
        weekStartDate={weekStartDate}
        onCreateButton={handleChangeShowModal}
      />
      <Calendar
        weekDates={weekDates}
        handleChangeShowModal={handleChangeShowModal}
        isShownModal={isShownModal}
      />
    </>
  );
};

export default App;
