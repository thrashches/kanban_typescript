import React, {SyntheticEvent, useState} from "react";
import {ITask} from "../../data/types";
import style from "./Detail.module.scss";
import {useNavigate} from "react-router-dom";


type DetailProps = {
    task: ITask,
    updateTask: (task: ITask) => void,
}

export default function Detail(props: DetailProps) {
    const {task, updateTask} = props;
    const [title, setTitle] = useState<string>(task.title);
    const [description, setDescription] = useState<string>(task.description);
    const navigate = useNavigate();

    const handleTitleInput = (e: SyntheticEvent<HTMLInputElement>): void => {
        setTitle(e.currentTarget.value);
    };

    const handleDescriptionInput = (e: SyntheticEvent<HTMLTextAreaElement>): void => {
        setDescription(e.currentTarget.value);
    }

    const handleCloseClick = () => {
        navigate("/");
    }

    const handleSubmitClick = (e: SyntheticEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if (title.length) {
            task.title = title;
            task.description = description;
            updateTask(task);
            navigate("/");
        }
        else {
            alert("Заполните название задачи!");
        }
    }

    return <div className={style.Detail__wrapper}>
        <form className={style.Detail}>
            <div className={style.title__wrapper}>
                <input
                    type={"text"}
                    name={"title"}
                    value={title}
                    onInput={handleTitleInput}
                    className={style.title}
                    required={true}
                    placeholder={"Введите название задачи..."}/>
                <button className={style.close} onClick={handleCloseClick}>x</button>
            </div>

            <textarea
                placeholder={"Введите описание задачи..."}
                name={"description"}
                className={style.description} onInput={handleDescriptionInput}>{description}</textarea>
            <div>
                <button className={style.submit} onClick={handleSubmitClick}>Submit</button>
            </div>
        </form>
    </div>
}