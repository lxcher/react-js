import style from './Posts.module.css'
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";


const Posts = (props) => {
    return <div className={style.posts}>
        <NewPost
            newPostText={props.newPostText}
            dispatch={props.dispatch}
        />
        {props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
    </div>
}

export default Posts