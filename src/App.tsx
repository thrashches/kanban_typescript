import React, {useEffect, useState} from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import {ITask} from "./data/types";
import {TaskStorage} from "./data/storage";
import TaskDetail, {loader as taskLoader} from "./pages/TaskDetail/TaskDetail";


function App() {
    const taskStorage = new TaskStorage();
    const [tasks, setTasks] = useState<ITask[]>(taskStorage.getTasks());

    const addTask = (task: ITask): void => {
        // Создание новой задачи
        const maxId = Math.max(...tasks.map((task) => task.id));
        task.id = maxId + 1;
        setTasks([...tasks, task]);
    };

    const moveTask = (task: ITask, target: "backlog" | "ready" | "inProgress" | "finished") => {
        task.status = target;
        setTasks([...tasks.filter((t) => t.id !== task.id), task]);
    }

    const updateTask = (task: ITask) => {
        setTasks([...tasks.filter((t) => t.id !== task.id), task].sort((a, b) => b.id - a.id));
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout tasks={tasks} addTask={addTask} moveTask={moveTask}/>,
        },
        {
            path: "tasks/:taskId",
            element: <TaskDetail updateTask={updateTask}/>,
            loader: taskLoader,
        }
    ]);

    useEffect(() => {
        setTasks(taskStorage.getTasks());
    }, []);

    useEffect(() => {
        taskStorage.updateTasks(tasks);
    }, [tasks]);

    return (
        <div className="App">
            <Header/>
            <RouterProvider router={router}/>
            <Footer tasks={tasks}/>
        </div>
    );
}

export default App;
