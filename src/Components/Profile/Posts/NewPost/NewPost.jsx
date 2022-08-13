import React from "react";
import style from './NewPost.module.css'


const NewPost = (props) => {
    const newPostElement = React.createRef()
    const addNewPost = () => {
        props.addNewPost(newPostElement.current.value)
        newPostElement.current.value = ''
    }
    return <div className={style.newPost}>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addNewPost}>ADD POST</button>
    </div>
}

export default NewPost