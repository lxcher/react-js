import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={style.nav}>
        <div className={style.item}><NavLink className={({isActive}) => isActive ? style.active : undefined} to='/profile' href="">Profile</NavLink></div>
        <div className={style.item}><NavLink className={({isActive}) => isActive ? style.active : undefined} to='/dialogs'>Messages</NavLink></div>
        <div className={style.item}><NavLink className={({isActive}) => isActive ? style.active : undefined} to='/users'>Users</NavLink></div>
        <div className={style.item}><NavLink className={({isActive}) => isActive ? style.active : undefined} to='/news'>News</NavLink></div>
        <div className={style.item}><NavLink className={({isActive}) => isActive ? style.active : undefined} to='/settings'>Settings</NavLink></div>
    </nav>
}

export default Navbar