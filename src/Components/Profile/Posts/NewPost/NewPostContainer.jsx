import React from "react";
import {addNewPostTextActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {
    let state = props.store.getState()
    const addNewPost = () => {
        props.store.dispatch(addNewPostTextActionCreator())
    }
    const onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    return <NewPost
        updateNewPostText={onPostChange}
        addNewPost={addNewPost}
        newPostText={state.profilePage.newPostText}/>
}

export default NewPostContainer