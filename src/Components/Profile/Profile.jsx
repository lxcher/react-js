import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <Posts
            posts={props.posts}
            newPostText={props.newPostText}
            addNewPost={props.addNewPost}
            updateNewPostText={props.updateNewPostText}
        />
    </div>
}

export default Profile