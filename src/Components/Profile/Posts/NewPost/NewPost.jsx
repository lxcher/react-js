import React from "react";
import style from './NewPost.module.css'


const NewPost = (props) => {
    const newPostElement = React.createRef()
    const addNewPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }
    const onPostChange = () => {
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', text: newPostElement.current.value})
    }
    return <div className={style.newPost}>
        <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}></textarea>
        <button onClick={addNewPost}>ADD POST</button>
    </div>
}

export default NewPost