import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import RaiseDoubt from '../raiseDoubt/RaiseDoubt';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const navigate = useNavigate();
    const { setAuth, setData } = props;
    const [doubt, setDoubt] = useState(false);


    function logout() {
        fetch('/api/logout')
            .then(response => response.json())
            .then(data => { });
        setAuth(false)
        navigate('/', { replace: true });
    }
    function raiseDoubt() {
        setDoubt(true);
    }

    return (
        <>
            <div className={`${styles.wrapper} container`}>
                <Link className={styles.logoWrapper} to="/home">
                    <img src="/images/logo.png" alt="logo" />
                    <h2>Raise Doubt</h2>
                </Link>
                <div>
                    <span className={styles.link} onClick={raiseDoubt}>Add Post</span>
                    <button onClick={logout} className={styles.btn}>Logout</button>
                </div>
            </div>
            {doubt && <RaiseDoubt setDoubt={setDoubt} doubt={doubt} setData={setData} />}
        </>
    )
}

export default Navbar