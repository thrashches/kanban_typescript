import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import {ITask} from "./data/types";
import {initialTasks} from "./data/dataMock";


function App() {
    const [tasks, setTasks] = useState<ITask[]>(initialTasks);
    return (
        <div className="App">
            <Header/>
            <Layout tasks={tasks}/>
            <Footer tasks={tasks}/>
        </div>
    );
}

export default App;
