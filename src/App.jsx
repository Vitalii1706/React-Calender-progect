import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange, getMonthName } from '../src/utils/dateUtils.js';
import './common.scss';
import { fetchEventsList, createEvent, deleteEvent } from './gateway/events';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [showModal, setSwowNodal] = useState(false);
  const [events, setEvents] = useState([]);

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

  const handleDeleteEvent = id => {
    deleteEvent(id).then(() => fetchEvents());
  };

  const fetchEvents = () => {
    fetchEventsList().then(eventsList => {
      setEvents(eventsList);
    });
  };
  const onCreateEvent = modalEvent => {
    createEvent(modalEvent).then(() => fetchEvents());
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

      <Calendar weekDates={weekDates} onDeleteEvent={handleDeleteEvent} events={events} />
    </>
  );
};

export default App;
