import React, {createContext, useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState)

    const [edit, setEdit] = useState(null)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title) => {
        setTasks([...tasks, {title, id: uuidv4() }])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearList = () => {
        setTasks([])
    }

    const findItem = id => {
        const item = tasks.find(task => task.id === id)

        setEdit(item)
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id ===
            id ? {title, id} : task)
        )

        setTasks(newTasks)
        setEdit(null)
    }


    return (
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList, findItem, editTask, edit}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;
