import { useState, useEffect } from "react";

const useTodos = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error("Failed to load tasks from localStorage", error);
      return [];
    }
  });
  const [inputValue, setInputValue] = useState("");

  // Save tasks to localStorage when "task" state changes
  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage", error);
    }
  }, [tasks]);

  // Function to add a new task
  const handleAddTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      // Update the tasks array and clear the input
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue("");
    }
  };

  // Function to toggle task (completed/not completed)
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete task
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Function to delete all completed tasks
  const deleteCompletedTasks = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  // Function to check it app has completed tasks
  const hasCompletedTasks = tasks.some((task) => task.completed);

  return {
    tasks,
    inputValue,
    setInputValue,
    handleAddTask,
    toggleTask,
    deleteTask,
    deleteCompletedTasks,
    hasCompletedTasks,
  };
};

export default useTodos;
