import React, {useContext} from 'react';
import {TaskListContext} from "../context/TaskListContext";
import Task from "./Task";

const TaskList = (props) => {
    const {tasks} = useContext(TaskListContext)
    return (
        <div>
            {
                tasks.length ? (
                    <ul className='list-group'>
                        {tasks.map(task => {
                            return (
                                <Task task={task} key={task.id}/>
                            )
                        })}
                    </ul>
                ) : (
                    <h4 className='text-danger text-center'>I am sorry there is not any task</h4>
                )
            }
        </div>

    );
}

export default TaskList;