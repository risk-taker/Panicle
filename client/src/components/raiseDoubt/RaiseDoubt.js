import { useState } from 'react';
import styles from './RaiseDoubt.module.css';

const RaiseDoubt = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');
    const { setDoubt } = props;

    const askDoubt = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                body,
                userId
            })
        };
        await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        window.alert("Successfully Posted");
        setBody('');
        setTitle('');
        setUserId('');
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <button onClick={() => setDoubt(false)} className={styles.cancelBtn}>
                    <img src="/images/cancel.png" alt="cancel" />
                </button>
                <h6 className={styles.title}>Title</h6>
                <input type="text" name="title" id="title" className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
                <h6>Body</h6>
                <input type="text" name="body" id="body" className={styles.input} value={body} onChange={(e) => setBody(e.target.value)} />
                <h6>UserId</h6>
                <input type="text" name="userId" id="userId" className={styles.input} value={userId} onChange={(e) => setUserId(e.target.value)} />
                <button className={styles.btn} onClick={askDoubt}>Add Post</button>
            </div>
        </div>
    )
}

export default RaiseDoubt