import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks, deleteTask } from '../../redux/actions/taskActions';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    return (
        <div>
            <h1>Tasks</h1>
            <Link to="/tasks/new">Add Task</Link>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.description}
                        <Link to={`/tasks/edit/${task.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
