import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';
import HomePage from './pages/homepage/HomePage';
import DetailsPage from './pages/detailsPage/DetailsPage';

function App() {
    const [auth, setAuth] = useState(false);

    return (
        <>
            {auth && <Navbar setAuth={setAuth} />}
            <Routes>
                <Route path='/' element={<Login setAuth={setAuth} />}></Route>
                <Route path='/signup' element={<SignUp setAuth={setAuth} />}></Route>
                <Route path='/home' element={<HomePage />}></Route>
                <Route path='/details/:id' element={<DetailsPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
