import React from "react";
import style from "./AddCardBtn.module.scss";
import {ReactComponent as AddIcon} from "./add-card.svg";
import {ITask} from "../../data/types";


type AddCardProps = {
    boardTitle: "backlog"|"ready"|"inProgress"|"finished",
    onClick: () => void,
    tasks?: ITask[],
}

export default function AddCardBtn(props: AddCardProps) {
    const {onClick} = props;
    return <button className={style.AddCardBtn} onClick={onClick}>
        <AddIcon/>
        Add card
    </button>
}