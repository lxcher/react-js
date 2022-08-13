import React from "react";
import style from './NewPost.module.css'


const NewPost = () => {
    const newPostElement = React.createRef()
    const addNewPost = () => {
        console.log(newPostElement.current.value)
    }
    return <div className={style.newPost}>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addNewPost}>ADD POST</button>
    </div>
}

export default NewPost