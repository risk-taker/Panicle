import React, { useEffect, useState } from 'react';
import AddPost from '../../components/post/AddPost';
import styles from './HomePage.module.css';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        }
        fetchData();
    }, []);
    return (
        <div className={`${styles.wrapper} container`}>
            {
                posts.map(post => (
                    <AddPost key={post.id} post={post} />
                ))
            }
        </div>
    )
}

export default HomePage