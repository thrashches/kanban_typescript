import React from "react";
import style from "./Footer.module.scss";
import {ITask} from "../../data/types";


type FooterProps = {
    tasks: ITask[]
}

export default function Footer(props: FooterProps) {
    const {tasks} = props;

    return <footer className={style.Footer}>
        <section className={style.Footer__section}>
            <p>Active tasks: {tasks.filter((task, index) => {
                return task.status !== 'finished'
            }).length}</p>
            <p>Finished tasks: {tasks.filter((task, index) => {
                return task.status === 'finished'
            }).length}</p>
        </section>
        <section className={style.Footer__section}>
            <p>Kanban board by Vladimir Ches, 2023</p>
        </section>
    </footer>
}