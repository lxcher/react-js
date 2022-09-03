import React from "react";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState()
    const addNewMessage = () => {
        props.store.dispatch(addNewMessageActionCreator())
    }
    const onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }
    return <Dialogs
        updateNewMessageText={onNewMessageChange}
        addNewMessage={addNewMessage}
        state={state}
    />
}

export default DialogsContainer