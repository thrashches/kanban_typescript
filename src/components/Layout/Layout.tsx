import React from "react";
import style from "./Layout.module.scss"
import Board from "../Board/Board";
import {ITask} from "../../data/types";

type LayoutProps = {
    tasks: ITask[],
    addTask: (task: ITask) => void,
}
export default function Layout(props: LayoutProps) {
    const {tasks, addTask} = props;

    return <section className={style.Layout}>
        <Board boardTitle={"backlog"} addTask={addTask} tasks={tasks.filter((task) => task.status === 'backlog')}/>
        <Board boardTitle={"ready"} addTask={addTask} tasks={tasks.filter((task) => task.status === 'ready')}/>
        <Board boardTitle={"inProgress"} addTask={addTask} tasks={tasks.filter((task) => task.status === 'inProgress')}/>
        <Board boardTitle={"finished"} addTask={addTask} tasks={tasks.filter((task) => task.status === 'finished')}/>
    </section>
}