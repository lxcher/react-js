import style from './Posts.module.css'
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";


const Posts = (props) => {
    return <div className={style.posts}>
        <NewPost addNewPost={props.addNewPost} />
        {props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
    </div>
}

export default Posts