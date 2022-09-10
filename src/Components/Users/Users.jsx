import UsersItem from "./UsersItem/UsersItem";


const Users = (props) => {
    return <div>
        {props.usersPage.users.map(u => <UsersItem
            fullName={u.fullName}
            status={u.status}
            id={u.id}
            location={u.location}
            followed={u.followed}
            follow={props.follow}
            unfollow={props.unfollow}
        />)}
    </div>
}

export default Users