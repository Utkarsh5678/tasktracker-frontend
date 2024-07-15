import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProjects, deleteProject } from '../../redux/actions/projectActions';

const ProjectList = () => {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteProject(id));
    };

    return (
        <div>
            <h1>Projects</h1>
            <Link to="/projects/new">Add Project</Link>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        {project.name}
                        <Link to={`/projects/edit/${project.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(project.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;
