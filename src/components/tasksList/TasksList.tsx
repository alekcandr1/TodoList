import { Button } from "../Button"
import { TaskListItem } from "./taskListItem/TaskListItem"

export type TasksList = {
    tasks: Array<TaskPropsType>
}

export type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}

export function TasksList(props: TasksList) {
    const taskListItem = <ul>
        {
            props.tasks.map(task => {
                return <TaskListItem id={task.id} title={task.title} isDone={task.isDone} />
            })
        }
    </ul>

    return (
        <div>
            {taskListItem}
            <div>
                <Button title="All" />
                <Button title="Active" />
                <Button title="Completed" />
            </div>
        </div>


    )
}