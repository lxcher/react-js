import style from './Posts.module.css'
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";

const Posts = (props) => {
    return <div className={style.posts}>
        <NewPostContainer />
        {props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
    </div>
}

export default Posts