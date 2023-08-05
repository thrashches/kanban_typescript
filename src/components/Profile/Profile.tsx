import React, {useState} from "react";
import style from "./Profile.module.scss";
import {ReactComponent as Avatar} from "./Profile.svg";
import {ReactComponent as ArrowIcon} from "./Arrow.svg";


export default function Profile() {
    const [dropdownCollapsed, setDropdownCollapsed] = useState<boolean>(true);

    const handleProfileClick = () => {
        setDropdownCollapsed(!dropdownCollapsed);
    }

    return <div className={style.Profile__wrapper}>
        <button className={style.Profile} onClick={handleProfileClick} onBlur={handleProfileClick}>
            <div className={style.Profile__avatar}><Avatar/></div>
            <div className={dropdownCollapsed ? "" : style.rotated}><ArrowIcon/></div>
        </button>
        {dropdownCollapsed ? <></> : <div className={style.Profile__dropdown}>
            <ul>
                <li>Profile</li>
                <li>Logout</li>
            </ul>
        </div>}
    </div>
}