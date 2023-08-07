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
import ErrorElem from "./components/ErrorElem/ErrorElem";


const baseUrl: string = "/";

function App() {
    const taskStorage = new TaskStorage();
    const [tasks, setTasks] = useState<ITask[]>(taskStorage.getTasks());

    const addTask = (task: ITask): void => {
        // Создание новой задачи
        let maxId = Math.max(...tasks.map((task) => task.id));
        console.log(maxId)
        if (!tasks.length) {
            maxId = 0;
        }
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
                errorElement: <ErrorElem baseUrl={baseUrl}/>,
            },
            {
                path: "tasks/:taskId",
                loader: taskLoader,
                element: <TaskDetail updateTask={updateTask}/>,
                errorElement: <ErrorElem baseUrl={baseUrl}/>,
            }
        ],
        {basename: baseUrl},
    );

    useEffect(() => {
        setTasks(taskStorage.getTasks());
    }, []);

    useEffect(() => {
        taskStorage.updateTasks(tasks);
    }, [tasks]);

    return (
        <div className="App">
            <Header baseUrl={baseUrl}/>
            <RouterProvider router={router}/>
            <Footer tasks={tasks}/>
        </div>
    );
}

export default App;
