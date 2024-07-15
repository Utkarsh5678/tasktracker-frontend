const projectReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PROJECTS':
            return action.payload;
        case 'CREATE_PROJECT':
            return [...state, action.payload];
        case 'UPDATE_PROJECT':
            return state.map(project => project.id === action.payload.id ? action.payload : project);
        case 'DELETE_PROJECT':
            return state.filter(project => project.id !== action.payload);
        default:
            return state;
    }
};

export default projectReducer;
