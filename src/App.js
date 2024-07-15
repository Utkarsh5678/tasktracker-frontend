import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectList from './components/Project/ProjectList';
import ProjectForm from './components/Project/ProjectForm';
import TaskList from './components/Task/TaskList';
import TaskForm from './components/Task/TaskForm';
import UserList from './components/User/UserList';
import UserForm from './components/User/UserForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<ProjectList />} />
                <Route path="/projects/new" element={<ProjectForm />} />
                <Route path="/projects/edit/:id" element={<ProjectForm />} />
                <Route path="/tasks" element={<TaskList />} />
                <Route path="/tasks/new" element={<TaskForm />} />
                <Route path="/tasks/edit/:id" element={<TaskForm />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/users/new" element={<UserForm />} />
                <Route path="/users/edit/:id" element={<UserForm />} />
            </Routes>
        </Router>
    );
}

export default App;
