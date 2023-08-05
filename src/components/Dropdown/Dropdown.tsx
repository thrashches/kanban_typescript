import React, {useState} from "react";
import {ITask} from "../../data/types";
import style from "./Dropdown.module.scss";


type DropdownProps = {
    tasks: ITask[],
}

type DropdownTaskProps = {
    task: ITask,
    select: (task: ITask) => void,
}


const DropdownTask = (props: DropdownTaskProps) => {
    const {task, select} = props;
    return <div className={style.DropdownTask}>{task.title}</div>
}

export default function Dropdown(props: DropdownProps) {
    const {tasks} = props;
    const [dropdownCollapsed, setDropdownCollapsed] = useState<boolean>(true);
    const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

    const selectTask = (task: ITask) => setSelectedTask(task);
    const handleCollapseClick = () => {
        setDropdownCollapsed(!dropdownCollapsed);
    };

    const dropdownElements = tasks.map((task, index) => <DropdownTask task={task} key={index} select={selectTask}/>);

    return <>
        <div className={style.Dropdown} onClick={handleCollapseClick}>
            {selectedTask ? selectedTask.title : <></>}
        </div>
        {dropdownCollapsed ? <></> : <div className={style.Dropdown}>
            {dropdownElements}
        </div>}

        <button className={style.submit}>Submit</button>
    </>
}