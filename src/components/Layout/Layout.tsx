import React from "react";
import style from "./Layout.module.scss"
import Board from "../Board/Board";
import {ITask} from "../../data/types";

type LayoutProps = {
    tasks: ITask[],
    addTask: (task: ITask) => void,
    moveTask: (task: ITask, target: "backlog" | "ready" | "inProgress" | "finished") => void,
}
export default function Layout(props: LayoutProps) {
    const {tasks, addTask, moveTask} = props;

    return <section className={style.Layout}>
        <Board boardTitle={"backlog"} addTask={addTask} tasks={tasks} moveTask={moveTask}/>
        <Board boardTitle={"ready"} addTask={addTask} tasks={tasks} moveTask={moveTask}/>
        <Board boardTitle={"inProgress"} addTask={addTask} tasks={tasks} moveTask={moveTask}/>
        <Board boardTitle={"finished"} addTask={addTask} tasks={tasks} moveTask={moveTask}/>
    </section>
}