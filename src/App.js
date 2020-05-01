import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TaskList from "./components/TaskList";
import TaskListContextProvider from "./context/TaskListContext";
import TaskForm from "./components/taskForm";
import Header from "./components/Header";


const App = () => {
        return (
            <TaskListContextProvider>
                <div className='container text-white-50'>
                    <div className="row mt-5">
                        <div style={{borderRadius: '5px'}} className="col-8 col-md-8 offset-2 col-lg-8 bg-dark p-5 shadow">
                            <Header />
                            <TaskForm />
                            <TaskList />
                        </div>
                    </div>
                </div>
            </TaskListContextProvider>
        );
}


export default App;