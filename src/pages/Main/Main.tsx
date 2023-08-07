import React from "react";
import {ITask} from "../../data/types";
import Layout from "../../components/Layout/Layout";


type MainProps = {
    tasks: ITask[],
    addTask: (task: ITask) => void,
    moveTask: (task: ITask, target: "backlog" | "ready" | "inProgress" | "finished") => void,
}

export default function Main(props: MainProps) {
    const {tasks, addTask, moveTask} = props;
    return <Layout tasks={tasks} addTask={addTask} moveTask={moveTask} />
}