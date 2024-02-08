import React, { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import {Accordion} from './components/Accordion';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    const [list1, setList1] = useState(
        [
            { id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true },
            { id: 3, title: "React", isDone: false },
        ]
    )

    const [filter, setFilter] = useState<FilterValuesType>('all')

    // let list2 = [
    //     { id: 1, title: "Jentelmens of fortune", isDone: true },
    //     { id: 2, title: "Terminator", isDone: false },
    //     { id: 3, title: "Terminator 2", isDone: true },
    // ]

    function removeTask(taskId: number) {
        setList1(
            list1.filter(task => task.id !== taskId)
        )
    }

    function changeFilter(filter: FilterValuesType) {
        setFilter(filter)
    }


    //UI
    let tasksForTodoList = list1
    if (filter === 'active') {
        tasksForTodoList = list1.filter(task => !task.isDone)
    } else if (filter === 'completed') {
        tasksForTodoList = list1.filter(task => task.isDone)
    }

    return (
        <div className="App">
            <TodoList
                title="What to learn"
                tasks={tasksForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
            <Accordion title={'Accordion'} isOpen={true}/>

            {/* <TodoList 
            title="Movies" 
            tasks={list2} /> */}
        </div>
    );
}

export default App;
