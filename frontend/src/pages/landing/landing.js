import React from 'react';
import styles from './landing.module.css';
import ShowPosts from '../../components/showPosts/showposts';
import PostForm from '../../components/postform/postform';

const Landing = () => {

    

    return ( 
        
        <div className={styles.__landing}>
        <h1>soy la landing</h1>
        <PostForm />   
        <ShowPosts />
        </div>

    )
}
export default Landing;
