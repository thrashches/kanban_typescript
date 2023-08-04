import React, {useState} from "react";
import style from "./NewTask.module.scss";
import {ITask} from "../../data/types";

type NewTaskProps = {
    addTask: (task: ITask) => void,
    setTyping: (typing: boolean) => void,
}

export default function NewTask(props: NewTaskProps) {
    const {addTask, setTyping} = props;
    const [title, setTitle] = useState<string>("");
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.currentTarget.value);
    }

    const handleSubmitClick = (): void => {
        if (title.length) {
            const task: ITask = {
                id: 0,
                title: title,
                description: "",
                status: "backlog",
            }
            addTask(task);
        }

        setTyping(false);
        setTitle("");
    }
    return <>
        <div className={style.NewTask}>
            <input type="text" onInput={handleInput} value={title}/>
        </div>
        <button className={style.submit} onClick={handleSubmitClick}>Submit</button>
    </>
}