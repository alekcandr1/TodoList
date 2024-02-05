import { AddTask } from "./addTask/AddTask";
import { TaskPropsType, TasksList } from "./tasksList/TasksList";
import { TodoListHeader } from "./todoListHeader/TodoListHeader";

type TodoList = {
    title: string
    tasks: Array<TaskPropsType>
}

export function TodoList(props: TodoList) {
    return ( 
        <div>
            <TodoListHeader title={props.title} />
            <AddTask />
            <TasksList tasks={props.tasks} />
        </div>
    )
}