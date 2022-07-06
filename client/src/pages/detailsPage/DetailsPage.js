import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './DetailsPage.module.css';

const DetailsPage = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const post = await response.json();
            setPost(post);
            const comResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const comments = await comResponse.json();
            setComments(comments);
        }
        fetchData();
    }, [id]);
    return (
        <div className={'container'}>
            <div className={styles.card}>
                <h3>NO. {post.id}</h3>
                <h3>Title: {post.title}</h3>
                <h3>Body: {post.body}</h3>
                <h2>Comments:</h2>
                {
                    comments.map(comment => {
                        const name = comment.email.split('@')[0];
                        return <p>{name}: {comment.body}</p>
                    })
                }
            </div>
        </div>
    )
}

export default DetailsPage