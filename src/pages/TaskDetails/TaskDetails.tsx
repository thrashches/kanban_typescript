import React from "react";
import {ITask} from "../../data/types";
import {LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import {TaskStorage} from "../../data/storage";
import Detail from "../../components/Detail/Detail";


type TaskDetailLoaderType = {
    task: ITask,
}

export async function loader({params}: LoaderFunctionArgs) {
    const taskStorage = new TaskStorage();
    const task = taskStorage.getTask(params.taskId);
    return {task};
}

export default function TaskDetail() {
    const {task} = useLoaderData() as TaskDetailLoaderType;
    return <Detail task={task}/>
}