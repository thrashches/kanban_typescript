import React from "react";
import style from "./Header.module.scss";
import Profile from "../Profile/Profile";


export default function Header() {
    return <header className={style.Navbar}>
        <div className={style.Navbar__logo}>Awesome Kanban Board</div>
        <Profile/>
    </header>
}