import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div>
        <ProfileInfo/>
        <Posts posts={props.posts} addNewPost={props.addNewPost}/>
    </div>
}

export default Profile