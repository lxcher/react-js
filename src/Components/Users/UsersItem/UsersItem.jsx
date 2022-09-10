import style from './UsersItem.module.css'



const UsersItem = (props) => {
    const follow = () => {
        props.follow(props.id)
    }
    const unfollow = () => {
        props.unfollow(props.id)
    }
    return <div className={style.userWrapper}>
        <div className={style.leftPart}>
            <div style={{backgroundImage: `url(${props.avatar ? props.avatar : 'https://www.w3schools.com/howto/img_avatar2.png'})`}} className={style.avatar}></div>
            {props.followed
                ? <button onClick={unfollow}>UNFOLLOW</button>
                : <button onClick={follow}>FOLLOW</button>
            }
        </div>
        <div className={style.centerPart}>
            <div className={style.userFullName}>{props.name}</div>
            <div className={style.status}>{props.status}</div>
        </div>
        <div className={style.rightPart}>
            {/*<div className={style.counry}>{props.location.country}</div>*/}
            {/*<div className={style.city}>{props.location.city}</div>*/}
        </div>
    </div>
}

export default UsersItem