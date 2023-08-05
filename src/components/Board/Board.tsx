import React, {useState} from "react";
import style from "./Board.module.scss";
import Task from "../Task/Task";
import {ITask} from "../../data/types";
import AddCardBtn from "../AddCardBtn/AddCardBtn";
import {fromCamel} from "../../utils/functions";
import NewTask from "../NewTask/NewTask";
import Dropdown from "../Dropdown/Dropdown";

type BoardProps = {
    boardTitle: "backlog" | "ready" | "inProgress" | "finished",
    tasks: ITask[],
    addTask: (task: ITask) => void, // Отвечает за создание новой задачи
}

export default function Board(props: BoardProps) {
    const {boardTitle, tasks, addTask} = props;
    const [taskNameTyping, setTaskNameTyping] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const taskElements = tasks.map((task, index) => {
        return <Task task={task} key={index}/>
    });

    const addCardClick = (): void => {
        // Отвечает за действие по нажатию кнопки(добавление, перемещение)
        if (boardTitle === "backlog") {
            setTaskNameTyping(true);
        } else {
            setShowDropdown(true);
        }


    }

    return <div className={style.Board}>
        <h1 className={style.Board__header}>{fromCamel(boardTitle)}</h1>
        <div className={style.Tasks}>
            {taskElements}
            {taskNameTyping || showDropdown ? <></> : <AddCardBtn boardTitle={boardTitle} onClick={addCardClick}/>}
            {taskNameTyping ? <NewTask addTask={addTask} setTyping={setTaskNameTyping}/> : <></>}
            {showDropdown ? <Dropdown tasks={tasks}/> : <></>}
        </div>
    </div>
}