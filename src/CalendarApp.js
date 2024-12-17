import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const CalendarApp = ({ onDateClick }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        onClickDay={(value) => onDateClick(value)}
      />
    </div>
  );
};

export default CalendarApp;
