import style from './Post.module.css'


const Post = (props) => {
    return <div className={style.post}>
        <div className={style.avatar} />
        <div>{props.message}</div>
        <div>LIKES: {props.likesCount}</div>
    </div>
}

export default Post