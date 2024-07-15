import axios from 'axios';

export const fetchTasks = () => async dispatch => {
    const response = await axios.get('/api/tasks');
    dispatch({ type: 'FETCH_TASKS', payload: response.data });
};

export const createTask = (task) => async dispatch => {
    const response = await axios.post('/api/tasks', task);
    dispatch({ type: 'CREATE_TASK', payload: response.data });
};

export const updateTask = (id, task) => async dispatch => {
    const response = await axios.put(`/api/tasks/${id}`, task);
    dispatch({ type: 'UPDATE_TASK', payload: response.data });
};

export const deleteTask = (id) => async dispatch => {
    await axios.delete(`/api/tasks/${id}`);
    dispatch({ type: 'DELETE_TASK', payload: id });
};
