import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange, getMonthName } from '../src/utils/dateUtils.js';
import './common.scss';
import { fetchEventsList } from './gateway/events';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [showModal, setSwowNodal] = useState(false);
  const [events, setEvens] = useState([]);
  console.log(events);

  const goPrev = () => {
    setWeekStartDate(new Date(weekStartDate.getTime() - 7 * 24 * 60 * 60 * 1000));
  };

  const goNext = () => {
    setWeekStartDate(new Date(weekStartDate.getTime() + 7 * 24 * 60 * 60 * 1000));
  };

  const today = () => {
    setWeekStartDate(new Date());
  };

  const isShowModal = () => {
    setSwowNodal(true);
  };

  const isCloseModal = () => {
    setSwowNodal(false);
  };

  const onCreateEvent = modalEvent => {
    // setEvens(events.concat(modalEvent));
  };

  const deleteEvent = id => {
    const updatedEvents = setEvens(events.filter(event => event.id !== id));
    useState(updatedEvents);
  };

  const fetchEvents = () => {
    fetchEventsList().then(dataEvents => setEvens(dataEvents));
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const showMonth = getMonthName(weekStartDate);

  return (
    <>
      <Header
        goPrev={goPrev}
        goNext={goNext}
        today={today}
        showMonth={showMonth}
        isShowModal={isShowModal}
        showModal={showModal}
        isCloseModal={isCloseModal}
        onCreateEvent={onCreateEvent}
      />

      <Calendar weekDates={weekDates} deleteEvent={deleteEvent} events={events} />
    </>
  );
};

export default App;
