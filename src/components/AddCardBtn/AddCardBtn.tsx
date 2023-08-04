import React from "react";
import style from "./AddCardBtn.module.scss";
import {ReactComponent as AddIcon} from "./add-card.svg";
import {ITask} from "../../data/types";


type AddCardProps = {
    boardTitle: "backlog"|"ready"|"inProgress"|"finished",
    tasks?: ITask[],
}

export default function AddCardBtn(props: AddCardProps) {
    return <button className={style.AddCardBtn}>
        <AddIcon/>
        Add card
    </button>
}