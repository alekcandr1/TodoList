import { Button } from "../../Button";

export type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
    removeTask: (taskId: number) => void

}

export function TaskListItem({id, title, isDone, removeTask}: TaskPropsType) {

    return (
        <li key={id}>
            <input type="checkbox" checked={isDone} />
            <span>{title}</span>
            <Button title="x" onClickHandler={()=>removeTask(id)} />
        </li>
)
}

