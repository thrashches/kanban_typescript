import React from "react";
import style from "./Task.module.scss";
import {ITask} from "../../data/types";
import {useNavigate} from "react-router-dom";


type TaskProps = {
    task: ITask
}
export default function Task(props: TaskProps) {
    const {task} = props;
    const navigate = useNavigate();

    const handleTaskClick = () => {
        navigate(`/tasks/${task.id}`)
    }

    return <div className={style.Task} onClick={handleTaskClick}>{task.title}</div>
}