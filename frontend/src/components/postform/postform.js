import React, { useState } from 'react';
import styles from './postform.module.css';

const PostForm = () => {

    const [data, setData] = useState({});

    const handleInputChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value,
        });
        console.log(data);
      };

      const submitForm = () => {
        const url = 'http://localhost:8000/api/posts/create';
        const body = {
          title: data.title,
          description: data.description,
          content: data.content,
        };
        const options = {
          method: 'POST',
          headers: new Headers({
            'Content-type': 'application/json',
          }),
          mode: 'cors',
          body: JSON.stringify(body),
        };
        console.log(body)
        fetch(url, options)
          .then((response) => {
            if (response.status === 201 || response.status === 200) {
              console.log(response.status);
                alert("post creado con exito");
                setData({});
              return response.json();
            } else {
              return Promise.reject(response.status);
            }
          })
          .catch((error) => console.log(error));

      };

    return (
        <div className={styles.__postform}>
            <h1>soy postform</h1>
            <input className={styles.__input} type="text" name='title' placeholder="Titulo" onChange={handleInputChange}/>
            <input className={styles.__input} type="text" name='description' placeholder="Descripción" onChange={handleInputChange}/>
            <textarea className={styles.__input_content} name='content' type="text" placeholder="Cuentanos..." onChange={handleInputChange} />
            <input className={styles.__button} type="button" value="Publicar" onClick={submitForm} />
        </div>
    )
}
export default PostForm;
