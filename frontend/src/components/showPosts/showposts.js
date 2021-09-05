import React, { useState, useEffect } from 'react';
import styles from './showposts.module.css';
import Post from '../post/post';


const ShowPosts = () => {

    const [posts, setPosts ] = useState(['']);

    const getPosts = () => {
        const url = 'http://localhost:8000/api/posts';
        const options = {
          method: 'GET',
          mode:'cors',
          headers: new Headers (),
        };
        fetch (url, options)
          .then (response => {
            if (response.status === 200) {
              return response.json ();
            }
            return Promise.reject (response.status);
          })
            .then(function(myJson) {
              setPosts(myJson)    
              console.log(posts)
          })
          .catch (error => console.log (error));
      };

    useEffect(() => {
        getPosts();
    },[])

    return (
        <div className={styles.__showposts}>
        <h1>soy el showposts</h1>
        {posts.map ((item) => 
            
            <Post post={item} />
        )}
        </div>
    )
}
export default ShowPosts;
