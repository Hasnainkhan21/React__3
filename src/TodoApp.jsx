import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    const [taskList, setTaskList] = useState([]);
    const [currentTask, setCurrentTask] = useState("");

    function handleAddTask() {
        if (currentTask.trim() !== "") {
            setTaskList([...taskList, currentTask]);
            setCurrentTask(""); // Reset input field
        }
    }

    return (
        <div>
            <h4>Todo List</h4>
            <input
                type="text"
                id="taskInput"
                placeholder="Enter a task"
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}