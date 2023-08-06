import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import {ITask} from "./data/types";
import {initialTasks} from "./data/dataMock";


function App() {
    const [tasks, setTasks] = useState<ITask[]>(initialTasks);

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

    return (
        <div className="App">
            <Header/>
            <Layout tasks={tasks} addTask={addTask} moveTask={moveTask}/>
            <Footer tasks={tasks}/>
        </div>
    );
}

export default App;
