import { useState } from "react";
import { MdDelete } from "react-icons/md";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue("");
    }
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans text-gray-500">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-emerald-600 mb-6 text-center">
          My To-Do List
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
            placeholder="Add a new task..."
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
          />
          <button
            onClick={handleAddTask}
            className="bg-emerald-600 text-white p-2 rounded-md font-bold hover:bg-emerald-700 transition-colors"
          >
            Add Task
          </button>
        </div>
        <ul className="divide-y divide-gray-200">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <li
                key={task.id}
                className={`flex items-center justify-between p-4 text-lg font-mono ${
                  task.completed ? "bg-gray-200 line-through text-gray-500" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 rounded-md text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                  <span>{task.text}</span>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <MdDelete className="h-5 w-5" />
                </button>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500 font-sans p-4">
              No tasks yet! Add one above.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
