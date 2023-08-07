import React from "react";
import {ITask} from "../../data/types";
import {LoaderFunctionArgs, useLoaderData} from "react-router-dom";
import {TaskStorage} from "../../data/storage";
import Detail from "../../components/Detail/Detail";


type TaskDetailLoaderType = {
    task: ITask,
}

type TaskDetailProps = {
    updateTask: (task: ITask) => void,
}

export async function loader({params}: LoaderFunctionArgs) {
    const taskStorage = new TaskStorage();
    const task = taskStorage.getTask(params.taskId);
    if (!task) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        });
    }
    return {task};
}

export default function TaskDetail(props: TaskDetailProps) {
    const {updateTask} = props;
    const {task} = useLoaderData() as TaskDetailLoaderType;
    return <Detail task={task} updateTask={updateTask}/>
}