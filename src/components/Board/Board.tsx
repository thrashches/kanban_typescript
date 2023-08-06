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
    moveTask: (task: ITask, target: "backlog" | "ready" | "inProgress" | "finished") => void, // Отвечает за перемещение задач между досками
}

export default function Board(props: BoardProps) {
    const {boardTitle, tasks, addTask, moveTask} = props;
    const [taskNameTyping, setTaskNameTyping] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const taskElements = tasks.filter((task) => task.status === boardTitle).map((task, index) => {
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

    const prevBoardTasks = () => {
        switch (boardTitle) {
            case "backlog":
                return [];
            case "ready":
                return tasks.filter((task) => task.status === "backlog");
            case "inProgress":
                return tasks.filter((task) => task.status === "ready");
            case "finished":
                return tasks.filter((task) => task.status === "inProgress");
            default:
                return [];
        }
    }

    return <div className={style.Board}>
        <h1 className={style.Board__header}>{fromCamel(boardTitle)}</h1>
        <div className={style.Tasks}>
            {taskElements}
        </div>
        <div className={style.Board__footer}>
            {taskNameTyping || showDropdown ? <></> : <AddCardBtn
                boardTitle={boardTitle}
                onClick={addCardClick}
                tasks={prevBoardTasks()}
            />}
            {taskNameTyping ? <NewTask
                addTask={addTask}
                setTyping={setTaskNameTyping}/> : <></>}
            {showDropdown ? <Dropdown
                boardTitle={boardTitle}
                tasks={prevBoardTasks()}
                setShowDropdown={setShowDropdown}
                moveTask={moveTask}/> : <></>}
        </div>
    </div>
}