import React from "react";
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const newMessageElement = React.createRef()
    const addNewMessage = () => {
        console.log(newMessageElement.current.value)

    }
    return <div className={style.dialogs}>
        <div className={style.dialogsItems}>
            {props.dialogsPage.dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>)}
        </div>
        <div className={style.messages}>
            {props.dialogsPage.messages.map(m => <Message message={m.message}/>)}
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addNewMessage}>ADD MESSAGE</button>
        </div>

    </div>
}

export default Dialogs