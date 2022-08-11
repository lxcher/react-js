import style from './Posts.module.css'
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";


const Posts = () => {
    return <div className={style.posts}>
        <NewPost />
        <Post message='Hi, Alex!' likesCount='23'/>
        <Post message='How are you?' likesCount='13' />
    </div>
}

export default Posts