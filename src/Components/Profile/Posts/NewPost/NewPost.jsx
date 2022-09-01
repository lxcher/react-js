import React from "react";
import style from './NewPost.module.css'
import {addNewPostTextActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";


const NewPost = (props) => {
    const newPostElement = React.createRef()
    const addNewPost = () => {
        props.dispatch(addNewPostTextActionCreator())
    }
    const onPostChange = () => {
        props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
    }
    return <div className={style.newPost}>
        <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}></textarea>
        <button onClick={addNewPost}>ADD POST</button>
    </div>
}

export default NewPost