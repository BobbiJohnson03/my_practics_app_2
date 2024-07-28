/* import React, { useState } from 'react';


interface LoginProps: Definiuje typy propsów, które komponent Login przyjmuje.
 W tym przypadku, onLogin jest funkcją przyjmującą dwa argumenty (username i password)
  i zwracającą wartość typu boolean.
interface LoginProps
{
    onLogin: (username: string, password: string) => boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onLogin(username, password)) {
            setError('');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Log in</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Login; */


import React, { useState } from 'react';
import './Login.css'; // Import pliku CSS dla komponentu Login
import logo1 from '../assets/logo1.jpg';

interface LoginProps {
    onLogin: (username: string, password: string) => boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onLogin(username, password)) {
            setError('');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <img src={logo1} alt="Logo" className="spinning-logo" />
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Log in</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
