import React from "react";
import style from "./Layout.module.scss"
import Board from "../Board/Board";
import {ITask} from "../../data/types";

type LayoutProps = {
    tasks: ITask[],
}
export default function Layout(props: LayoutProps) {
    const {tasks} = props;

    return <section className={style.Layout}>
        <Board boardTitle={"Backlog"} tasks={tasks.filter((task) => task.status === 'backlog')}/>
        <Board boardTitle={"Ready"} tasks={tasks.filter((task) => task.status === 'ready')}/>
        <Board boardTitle={"In progress"} tasks={tasks.filter((task) => task.status === 'inProgress')}/>
        <Board boardTitle={"Finished"} tasks={tasks.filter((task) => task.status === 'finished')}/>
    </section>
}