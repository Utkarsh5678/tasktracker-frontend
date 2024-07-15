import axios from 'axios';

export const fetchProjects = () => async dispatch => {
    const response = await axios.get('/api/projects');
    dispatch({ type: 'FETCH_PROJECTS', payload: response.data });
};

export const createProject = (project) => async dispatch => {
    const response = await axios.post('/api/projects', project);
    dispatch({ type: 'CREATE_PROJECT', payload: response.data });
};

export const updateProject = (id, project) => async dispatch => {
    const response = await axios.put(`/api/projects/${id}`, project);
    dispatch({ type: 'UPDATE_PROJECT', payload: response.data });
};

export const deleteProject = (id) => async dispatch => {
    await axios.delete(`/api/projects/${id}`);
    dispatch({ type: 'DELETE_PROJECT', payload: id });
};
