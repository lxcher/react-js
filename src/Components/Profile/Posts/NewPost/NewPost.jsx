import React from "react";
import style from './NewPost.module.css'
import {addNewPostTextActionCreator, updateNewPostTextActionCreator} from "../../../../redux/store";


const NewPost = (props) => {
    const newPostElement = React.createRef()
    const addNewPost = () => {
        props.dispatch(addNewPostTextActionCreator())
    }
    const onPostChange = () => {
        props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
    }
    return <div className={style.newPost}>
        <textarea onChange={onPostChange} ref={newPostElement}></textarea>
        <button onClick={addNewPost}>ADD POST</button>
    </div>
}

export default NewPost