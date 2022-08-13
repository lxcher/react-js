import style from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id
    return <div className={style.item}>
        <NavLink className={({isActive}) => isActive ? style.active : undefined} to={path}>{props.name}</NavLink>
    </div>
}

export default DialogsItem