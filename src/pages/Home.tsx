 /* import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Home Page</h1>
            {T}
        </div>
    );
};

export default Home; */

 import React from 'react';
 import logo2 from '../assets/logo2.png';
 import './Home.css'; // Import pliku CSS dla komponentu Home

 const Home: React.FC = () => {
     return (
         <div className="home-container">
             <img src={logo2} alt="Logo" className="home-logo" />
             <h1>Welcome to the Home Page</h1>
         </div>
     );
 };

 export default Home;

