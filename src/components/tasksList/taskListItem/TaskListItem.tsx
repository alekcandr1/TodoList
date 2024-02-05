import { TaskPropsType } from "../TasksList";

export function TaskListItem(props: TaskPropsType) {
    return (
        <li key={props.id}>
            <input type="checkbox" checked={props.isDone} />
            <span>{props.title}</span>
        </li>
)
}