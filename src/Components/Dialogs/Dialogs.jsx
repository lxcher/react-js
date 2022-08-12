import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/messages/' + props.id
    return <div className={style.item}>
        <NavLink className={({isActive}) => isActive ? style.active : undefined} to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}

const Dialogs = () => {
    return <div className={style.dialogs}>
        <div className={style.dialogsItems}>
            <DialogsItem id='1' name='Alex'/>
            <DialogsItem id='2' name='Sveta'/>
            <DialogsItem id='3' name='Lena'/>
            <DialogsItem id='4' name='Egor'/>
        </div>
        <div className={style.messages}>
            <Message message='Hi'/>
            <Message message='How are you?'/>
            <Message message='Im fine'/>
        </div>
    </div>
}

export default Dialogs