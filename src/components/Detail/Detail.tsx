import React, {SyntheticEvent, useState} from "react";
import {ITask} from "../../data/types";
import style from "./Detail.module.scss";


type DetailProps = {
    task: ITask,
}

export default function Detail(props: DetailProps) {
    const {task} = props;
    const [title, setTitle] = useState<string>(task.title);
    const [description, setDescription] = useState<string>(task.description);

    const handleTitleInput = (e: SyntheticEvent<HTMLInputElement>): void => {
        setTitle(e.currentTarget.value);
    };

    return <div className={style.Detail__wrapper}>
        <div className={style.Detail}>
            <input type={"text"} value={title} onInput={handleTitleInput} className={style.title}
                   placeholder={"Введите название задачи..."}/>
            <textarea
                placeholder={"Введите описание задачи..."}
                className={style.description}>{task.description}</textarea>
            <div>
                <button className={style.submit}>Submit</button>
            </div>
        </div>
    </div>
}