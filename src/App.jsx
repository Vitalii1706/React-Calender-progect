import React, { Component, useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import {
  getWeekStartDate,
  generateWeekRange,
  startWeek,
  endWeek,
  getMonthName,
} from '../src/utils/dateUtils.js';
import './common.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weekStartDate: new Date(),
    };
  }

  goPrev = () => {
    this.setState({
      weekStartDate: new Date(this.state.weekStartDate.getTime() - 7 * 24 * 60 * 60 * 1000),
    });
  };

  goNext = () => {
    this.setState({
      weekStartDate: new Date(this.state.weekStartDate.getTime() + 7 * 24 * 60 * 60 * 1000),
    });
  };
  today = () => {
    this.setState({
      weekStartDate: new Date(),
    });
  };

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
    const showMonth = getMonthName(weekStartDate);

    return (
      <>
        <Header
          goPrev={this.goPrev}
          goNext={this.goNext}
          today={this.today}
          showMonth={showMonth}
        />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;
