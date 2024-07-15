import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, updateUser } from '../../redux/actions/userActions';

const UserForm = ({ match, history }) => {
    const dispatch = useDispatch();
    const userId = match.params.id;
    const user = useSelector(state => state.users.find(u => u.id === userId));

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        if (user) {
            setUsername(user.username);
            setPassword(user.password);
            setRole(user.role);
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            dispatch(updateUser(userId, { username, password, role }));
        } else {
            dispatch(createUser({ username, password, role }));
        }
        history.push('/users');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="admin">Admin</option>
                <option value="task-creator">Task Creator</option>
                <option value="read-only">Read Only</option>
            </select>
            <button type="submit">Save</button>
        </form>
    );
};

export default UserForm;
