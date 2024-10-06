import React, { useState } from "react";

const Home = () => {
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddTaskClick = () => {
    if (dueDate == "") {
      alert("please select the due date");
    }

    if (task.trim() !== "" && dueDate !== "") {
      setTasks([...tasks, { task, dueDate }]);
      setTask("");
      setDueDate("");
    }
  };

  const handleClearTaskClick = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-amber-300 flex flex-col gap-6 justify-center items-center rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold">Task Manager</h1>

        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter a task"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <input
          type="date"
          value={dueDate}
          onChange={handleDateChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <div className="flex gap-2 w-full justify-center">
          <button
            onClick={handleAddTaskClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add Task
          </button>
        </div>

        {tasks.length > 0 && (
          <ul className="w-full bg-white rounded-lg shadow-md p-4">
            {tasks.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-2 p-2 border-b border-gray-300"
              >
                <div>
                  <p className="font-medium">{item.task}</p>
                  <p className="text-gray-500 text-sm">Due: {item.dueDate}</p>
                </div>
                <button
                  onClick={() => handleClearTaskClick(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition duration-200"
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
