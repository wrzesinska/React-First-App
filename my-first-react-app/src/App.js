import { useState } from "react";
import React from "react";
import Header from "./components/Header.js";
import Tasks from "./components/Tasks.js";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 6th at 2:30pm",
      reminder: false,
    },
  ]);

  //delete task

  const deleteTask = () => {};
  return (
    <div className='App container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
