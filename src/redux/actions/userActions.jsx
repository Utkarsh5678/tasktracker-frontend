import axios from 'axios';

export const fetchUsers = () => async dispatch => {
    const response = await axios.get('/api/users');
    dispatch({ type: 'FETCH_USERS', payload: response.data });
};

export const createUser = (user) => async dispatch => {
    const response = await axios.post('/api/users', user);
    dispatch({ type: 'CREATE_USER', payload: response.data });
};

export const updateUser = (id, user) => async dispatch => {
    const response = await axios.put(`/api/users/${id}`, user);
    dispatch({ type: 'UPDATE_USER', payload: response.data });
};

export const deleteUser = (id) => async dispatch => {
    await axios.delete(`/api/users/${id}`);
    dispatch({ type: 'DELETE_USER', payload: id });
};
