import React from "react";
import style from './NewPost.module.css'


const NewPost = (props) => {
    const newPostElement = React.createRef()
    const addNewPost = () => {
        props.addNewPost()
    }
    const onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value)
    }
    return <div className={style.newPost}>
        <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}></textarea>
        <button onClick={addNewPost}>ADD POST</button>
    </div>
}

export default NewPost