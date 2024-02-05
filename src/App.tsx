import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

let list1 = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "React", isDone: false},
]
let list2 = [
    {id: 1, title: "Jentelmens of fortune", isDone: true},
    {id: 2, title: "Terminator", isDone: false},
    {id: 3, title: "Terminator 2", isDone: true},
]

function App() {

    return (
        <div className="App">
            <TodoList title="What to learn" tasks={list1} />
            <TodoList title="Movies" tasks={list2} />
        </div>
    );
}

export default App;
