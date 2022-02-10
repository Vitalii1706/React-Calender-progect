import React from 'react';
import './navigation.scss';
import { days } from '../../utils/dateUtils.js';
import moment from 'moment';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => {
        let colorToday =
          moment(dayDate).format('MMMM Do YYYY') === moment(new Date()).format('MMMM Do YYYY');
        let colorTodayDayClasses = classNames('day-label__day-name', {
          'day-label__day-name-color': colorToday,
        });
        let colorTodayNumberClasses = classNames('day-label__day-number', {
          'day-label__day-number-color': colorToday,
        });
        return (
          <div key={Math.random()} className="calendar__day-label day-label">
            <span className={colorTodayDayClasses}>{days[dayDate.getDay()]}</span>
            <span className={colorTodayNumberClasses}>{dayDate.getDate()}</span>
          </div>
        );
      })}
    </header>
  );
};

Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Navigation;
