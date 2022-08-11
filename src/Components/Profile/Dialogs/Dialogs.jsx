import style from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return <div className={style.dialogs}>
        <div className={style.dialogsItems}>
            <div className={style.item}><NavLink className={({isActive}) => isActive ? style.active : undefined} to='/dialogs/1'>Alex</NavLink></div>
            <div className={style.item}><NavLink className={({isActive}) => isActive ? style.active : undefined} to='/dialogs/2'>Sveta</NavLink></div>
            <div className={style.item}><NavLink className={({isActive}) => isActive ? style.active : undefined} to='/dialogs/3'>Sveta</NavLink></div>
            <div className={style.item}><NavLink className={({isActive}) => isActive ? style.active : undefined} to='/dialogs/4'>Lena</NavLink></div>
        </div>
        <div className={style.messages}>
            <div className={style.message}>Hi</div>
            <div className={style.message}>How are you?</div>
            <div className={style.message}>Im fine</div>
        </div>
    </div>
}

export default Dialogs