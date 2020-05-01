import React, {useContext, useState, useEffect} from 'react';
import {TaskListContext} from "../context/TaskListContext";

const TaskForm = (props) => {
    const {addTask, clearList, edit, editTask} = useContext(TaskListContext);
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
        console.log(title)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!edit) {
            addTask(title)
            setTitle('')
        }else {
            editTask(title, edit.id)
        }
    }

    useEffect(() => {
        if (edit){
            setTitle(edit.title)
        }else {
            setTitle('')
        }
    }, [edit])



    return (
        <form onSubmit={handleSubmit} className='form-group d-flex flex-column'>
            <input
                onChange={handleChange}
                type="text"
                value={title}
                className='form-control'
                placeholder='Add to todo'
                required
            />
            <div className='d-flex flex-row mt-3 mb-3'>
                <button type='submit' className={edit ? 'btn btn-warning w-50' : 'btn btn-success w-50'}>
                    {edit ? 'Edit' : 'Add Task'}
                </button>
                <button onClick={clearList} className='btn btn-outline-danger w-50'>
                    Clear
                </button>
            </div>
        </form>
    );
}

export default TaskForm;