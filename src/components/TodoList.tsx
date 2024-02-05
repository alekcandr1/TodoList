import { FilterValuesType, TaskType } from "../App";
import { AddTask } from "./addTask/AddTask";
import { TasksList } from "./tasksList/TasksList";
import { TaskPropsType } from "./tasksList/taskListItem/TaskListItem";
import { TodoListHeader } from "./todoListHeader/TodoListHeader";

type TodoList = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

export function TodoList({ title, tasks, removeTask, changeFilter }: TodoList) {
    return (
        <div>
            <TodoListHeader title={title} />
            <AddTask />
            <TasksList
                tasks={tasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    )
}