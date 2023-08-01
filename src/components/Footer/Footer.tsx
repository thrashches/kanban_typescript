import React from "react";
import style from "./Footer.module.scss";


export default function Footer() {
    return <footer className={style.Footer}>
        <section className={style.Footer__section}>
            <p>Active tasks: {}</p>
            <p>Finished tasks: {}</p>
        </section>
        <section className={style.Footer__section}>
            <p>Kanban board by Vladimir Ches, 2023</p>
        </section>
    </footer>
}