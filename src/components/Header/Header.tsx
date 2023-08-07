import React from "react";
import style from "./Header.module.scss";
import Profile from "../Profile/Profile";


type HeaderProps = {
    baseUrl: string,
}


export default function Header(props: HeaderProps) {
    const {baseUrl} = props;

    return <header className={style.Navbar}>
        <a className={style.Navbar__logo} href={baseUrl}>Awesome Kanban Board</a>
        <Profile/>
    </header>
}