import { FilterValuesType, TaskType } from "../../App"
import { Button } from "../Button"
import { TaskListItem, TaskPropsType } from "./taskListItem/TaskListItem"

export type TasksList = {
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (filter: FilterValuesType) => void

}

export function TasksList({ tasks, removeTask, changeFilter }: TasksList) {
    const taskListItem = <ul>
        {
            tasks.map(task => {
                return <TaskListItem
                    id={task.id}
                    title={task.title}
                    isDone={task.isDone}
                    removeTask={removeTask}
                />
            })
        }
    </ul>



    return (
        <div>
            {taskListItem}
            <div>
                <Button title="All" onClickHandler={ ()=>changeFilter('all') } />
                <Button title="Active" onClickHandler={ ()=>changeFilter('active') } />
                <Button title="Completed" onClickHandler={ ()=>changeFilter('completed') } />
            </div>
        </div>


    )
}