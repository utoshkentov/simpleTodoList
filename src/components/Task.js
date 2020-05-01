import React, {useContext} from 'react';
import {TaskListContext} from "../context/TaskListContext";

const Task = ({task}) => {
    const {removeTask, findItem} = useContext(TaskListContext)


    return (
        <li className='list-group-item d-flex flex-row bg-transparent w-100 p-3'>
            <span className='w-25'>{task.title}</span>
            <div className='d-flex h-50 w-75'>
                <button className='btn btn-warning mr-1 ml-5' onClick={() => findItem(task.id)}>
                    Edit
                </button>
                <button onClick={() => removeTask(task.id)} className='btn btn-danger ml-1'>
                    Remove
                </button>
            </div>
        </li>
    );
}

export default Task;