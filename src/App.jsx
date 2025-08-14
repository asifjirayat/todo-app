import { MdDelete } from "react-icons/md";
import useTodos from "./hooks/useTodos.js";
import Input from "./components/Input.jsx";
import Button from "./components/Button.jsx";

const App = () => {
  const {
    tasks,
    inputValue,
    setInputValue,
    handleAddTask,
    toggleTask,
    deleteTask,
    deleteCompletedTasks,
    hasCompletedTasks,
  } = useTodos();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans text-gray-500">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-emerald-600 mb-6 text-center">
          My To-Do List
        </h1>
        {/* Input to read task */}
        <div className="flex gap-2 mb-6">
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
            placeholder="Add a new task..."
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
          />
          <Button
            onClick={handleAddTask}
            className="bg-emerald-600 text-white p-2 rounded-md font-bold hover:bg-emerald-700 transition-colors"
          >
            Add Task
          </Button>
        </div>

        {/* Render list of tasks */}
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
                  <Input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 rounded-md text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                  <span>
                    {task.text.charAt(0).toUpperCase() + task.text.slice(1)}
                  </span>
                </div>
                <Button
                  onClick={() => deleteTask(task.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <MdDelete className="h-5 w-5" />
                </Button>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-500 font-sans p-4">
              No tasks yet! Add one above.
            </p>
          )}
        </ul>

        {/* Delete all completed tasks */}
        {hasCompletedTasks && (
          <div className="flex flex-col items-center justify-center">
            <Button
              onClick={deleteCompletedTasks}
              className="bg-red-600 text-white px-4 py-2 mt-4 rounded-md font-bold shadow hover:bg-red-700 transition-colors"
            >
              Delete Completed Tasks
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
