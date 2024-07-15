import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask } from '../../redux/actions/taskActions';
import { fetchProjects } from '../../redux/actions/projectActions';

const TaskForm = ({ match, history }) => {
    const dispatch = useDispatch();
    const taskId = match.params.id;
    const task = useSelector(state => state.tasks.find(t => t.id === taskId));
    const projects = useSelector(state => state.projects);

    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState('');
    const [owner, setOwner] = useState('');
    const [projectId, setProjectId] = useState('');

    useEffect(() => {
        dispatch(fetchProjects());
        if (task) {
            setDescription(task.description);
            setDueDate(task.dueDate);
            setStatus(task.status);
            setOwner(task.owner);
            setProjectId(task.project.id);
        }
    }, [dispatch, task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            dispatch(updateTask(taskId, { description, dueDate, status, owner, project: { id: projectId } }));
        } else {
            dispatch(createTask({ description, dueDate, status, owner, project: { id: projectId } }));
        }
        history.push('/tasks');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                <option value="new">New</option>
                <option value="in-progress">In-Progress</option>
                <option value="blocked">Blocked</option>
                <option value="completed">Completed</option>
                <option value="not-started">Not Started</option>
            </select>
            <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} placeholder="Owner" required />
            <select value={projectId} onChange={(e) => setProjectId(e.target.value)} required>
                {projects.map(project => (
                    <option key={project.id} value={project.id}>{project.name}</option>
                ))}
            </select>
            <button type="submit">Save</button>
        </form>
    );
};

export default TaskForm;
