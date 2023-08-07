interface ITask {
    status: "backlog" | "ready" | "inProgress" | "finished",
    id: number,
    title: string,
    description: string,
}

export {
    type ITask,
}