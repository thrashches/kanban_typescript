import React, {useState} from "react";
import {ITask} from "../../data/types";
import {ReactComponent as Arrow} from "./Arrow.svg";
import style from "./Dropdown.module.scss";


type DropdownProps = {
    boardTitle: "backlog" | "ready" | "inProgress" | "finished",
    tasks: ITask[],
    setShowDropdown: (value: boolean) => void,
    moveTask: (task: ITask, target: "backlog" | "ready" | "inProgress" | "finished") => void,
}

type DropdownTaskProps = {
    task: ITask,
    selectTask: (task: ITask) => void,
    setDropdownCollapsed: (state: boolean) => void,
}


const DropdownTask = (props: DropdownTaskProps) => {
    const {task, selectTask, setDropdownCollapsed} = props;
    const handleSelect = (e: React.SyntheticEvent) => {
        e.preventDefault();
        selectTask(task);
        console.log(task);
        setDropdownCollapsed(true);
    }
    return <div className={style.DropdownTask} onClick={handleSelect}>{task.title}</div>
}

export default function Dropdown(props: DropdownProps) {
    const {boardTitle, tasks, setShowDropdown, moveTask} = props;
    const [dropdownCollapsed, setDropdownCollapsed] = useState<boolean>(true);
    const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

    const selectTask = (task: ITask) => setSelectedTask(task);
    const handleCollapseClick = () => {
        setDropdownCollapsed(!dropdownCollapsed);
    };

    const handleBlur = () => {
        setDropdownCollapsed(true);
    }

    const dropdownElements = tasks.map((task, index) => <DropdownTask
        task={task}
        key={index}
        selectTask={selectTask}
        setDropdownCollapsed={setDropdownCollapsed}
    />);

    const handleSubmit = () => {
        if (selectedTask && boardTitle) {
            moveTask(selectedTask, boardTitle);
            setSelectedTask(null);
        }
        setShowDropdown(false);
    }

    return <div className={style.Dropdown__wrapper}>
        <div className={style.Dropdown__switch__wrapper}>
            <button className={style.Dropdown__switch} onClick={handleCollapseClick}>
                <div>{selectedTask ? selectedTask.title : <></>}</div>
                <Arrow/>
            </button>
            {dropdownCollapsed ? <></> : <div className={style.Dropdown__list}>
                {dropdownElements}
            </div>}
        </div>


        <button className={style.submit} onClick={handleSubmit}>Submit</button>
    </div>
}