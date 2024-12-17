import React, { useState } from "react"; 
import Modal from "react-modal";

const TaskInputModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");

  const handleSave = () => {
    onSave({ name, task, time });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Add Task</h2>
      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <label>Task:</label>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <label>Time:</label>
      <input value={time} onChange={(e) => setTime(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
};

export default TaskInputModal;
