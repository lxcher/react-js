import UsersItem from "./UsersItem/UsersItem";
import * as axios from 'axios'


const Users = (props) => {
    if (props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => props.setUsers(response.data.items))
    }
    return <div>
        {props.usersPage.users.map(u => <UsersItem
            name={u.name}
            status={u.status}
            id={u.id}
            avatar={u.photos.small}
            followed={u.followed}
            follow={props.follow}
            unfollow={props.unfollow}
        />)}
    </div>
}

export default Users