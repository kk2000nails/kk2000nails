import React, { useState } from "react";
import CalendarApp from "./CalendarApp";
import ScheduleTable from "./ScheduleTable";
import TaskInputModal from "./TaskInputModal";
import PrintButton from "./PrintButton";

const App = () => {
  const [schedule, setSchedule] = useState(
    Array(5).fill(Array(24).fill(null))
  );
  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDateClick = (date) => {
    console.log("Selected Date:", date);
  };

  const handleHourClick = (hour, employeeIndex) => {
    setSelectedTask({ hour, employeeIndex });
    setShowModal(true);
  };

  const handleSaveTask = ({ name, task, time }) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[selectedTask.employeeIndex][selectedTask.hour] = {
      name,
      task,
      time,
    };
    setSchedule(updatedSchedule);
  };

  return (
    <div>
      <CalendarApp onDateClick={handleDateClick} />
      <ScheduleTable schedule={schedule} onHourClick={handleHourClick} />
      <PrintButton />
      <TaskInputModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSaveTask}
      />
    </div>
  );
};

export default App;
