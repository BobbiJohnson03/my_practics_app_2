/* import React, { useState } from 'react'; // useState -> hook reacta
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; //zarządzanie nawigacją
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

// definicja komponentu App
const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // funkcja do logowania
    const handleLogin = (username: string, password: string) => {
        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
            return true;
        }
        return false;
    };

    return (
        <Router> //obejmuje całą aplikację i zarządza historią nawigacji

            <Routes> // grupuje wszystkie ścieżki (trasy) aplikacji.

                <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />

                <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />

            </Routes>

        </Router>
    );
};

export default App;
*/


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (username: string, password: string) => {
        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true);
            return true;
        }
        return false;
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
                <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
