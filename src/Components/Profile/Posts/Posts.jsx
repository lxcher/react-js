import style from './Posts.module.css'
import Post from "./Post/Post";
import NewPostContainer from "./NewPost/NewPostContainer";


const Posts = (props) => {
    let state = props.store.getState()
    return <div className={style.posts}>
        <NewPostContainer
            store={props.store}
        />
        {state.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
    </div>
}

export default Posts