import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProjectForm = () => {
    const { id } = useParams(); // Use useParams to get the route parameter
    const [project, setProject] = useState({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        owner: ''
    });

    useEffect(() => {
        if (id) {
            // Fetch project details if editing
            axios.get(`/api/projects/${id}`)
                .then(response => {
                    setProject(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the project data!', error);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            // Update project
            axios.put(`/api/projects/${id}`, project)
                .then(response => {
                    // Handle success
                })
                .catch(error => {
                    console.error('There was an error updating the project!', error);
                });
            } else {
                // Create new project
                axios.post('/api/projects', project)
                .then(response => {
                    // Handle success
                    console.log('Project created successfully!', response.data);
                })
                .catch(error => {
                    console.error('There was an error creating the project!', error);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={project.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={project.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Start Date</label>
                <input
                    type="date"
                    name="startDate"
                    value={project.startDate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>End Date</label>
                <input
                    type="date"
                    name="endDate"
                    value={project.endDate}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Owner</label>
                <input
                    type="text"
                    name="owner"
                    value={project.owner}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default ProjectForm;
