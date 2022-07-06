import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddPost.module.css';

const AddPost = (props) => {
    const { post } = props;
    const navigate = useNavigate();
    function details() {
        navigate(`/details/${post.id}`, { replace: true });
    }
    return (
        <div className={styles.card} onClick={details}>
            <h3>NO. {post.id}</h3>
            <h3>Title: {post.title}</h3>
            <h3>Body: {post.body}</h3>
        </div>
    )
}

export default AddPost