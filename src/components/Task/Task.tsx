import React from "react";
import style from "./Task.module.scss";
import {ITask} from "../../data/types";


type TaskProps = {
    task: ITask
}
export default function Task(props: TaskProps) {
    const {task} = props;
    return <div className={style.Task}>{task.title}</div>
}