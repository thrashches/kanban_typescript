import React from "react";
import style from "./Header.module.scss";
import Profile from "../Profile/Profile";


export default function Header() {
    return <header className={style.Navbar}>
        <a className={style.Navbar__logo} href={"/"}>Awesome Kanban Board</a>
        <Profile/>
    </header>
}