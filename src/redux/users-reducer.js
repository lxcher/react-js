const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users: [
        {id: 1, fullName: 'John Doe', status: "I'm a boss!", followed: false, location: {country: 'Belarus', city: 'Minsk'}},
        {id: 2, fullName: 'Seta Karas', status: "Hi, guys!", followed: true, location: {country: 'Belarus', city: 'Minsk'}},
        {id: 3, fullName: 'Edik Vaschilko', status: "How're you?", followed: false, location: {country: 'Belarus', city: 'Minsk'}}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, user: [...state.users, ...action.users]}
        }
        case FOLLOW: {
            console.log('follow')
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else {
                        return u
                    }
                })
            }
        }
        case UNFOLLOW: {
            console.log('unfollow')
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else {
                        return u
                    }
                })
            }
        }
        default:
            return state
    }

}

export const setUsersActionCreator = (users) => ({type: 'SET-USERS', users: users})
export const followActionCreator = (id) => ({type: 'FOLLOW', userId: id})
export const unfollowActionCreator = (id) => ({type: 'UNFOLLOW', userId: id})

export default usersReducer