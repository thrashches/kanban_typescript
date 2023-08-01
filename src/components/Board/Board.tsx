import React from "react";
import style from "./Board.module.scss";
import Task from "../Task/Task";
import {ITask} from "../../data/types";

type BoardProps = {
    boardTitle: string,
    tasks: ITask[],
}
export default function Board(props: BoardProps) {
    const {boardTitle, tasks} = props;

    const taskElements = tasks.map((task, index) => {
        return <Task task={task} key={index}/>
    })

    return <div className={style.Board}>
        <h1 className={style.Board__header}>{boardTitle}</h1>
        <div className={style.Tasks}>
            {taskElements}
        </div>
    </div>
}