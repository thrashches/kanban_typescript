import React, {useState} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import {ITask} from "./data/types";

function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    return (
        <div className="App">
            <Header/>
            <Layout tasks={tasks}/>
            <Footer/>
        </div>
    );
}

export default App;
