import React from "react";
import {useRouteError} from "react-router-dom";
import style from "./ErrorElem.module.scss";


type ErrorElemProps = {
    baseUrl: string,
}


export default function ErrorElem(props: ErrorElemProps) {
    const {baseUrl} = props;
    const error = useRouteError();
    console.error(error);

    return <main className={style.Error__wrapper}>
        <div className={style.ErrorElem}>
            <h1>Error 404</h1>
            <p>Страница с таким адресом не найдена.</p>
            <p><a href={baseUrl}>Вернуться на главную</a></p>
        </div>

    </main>
}