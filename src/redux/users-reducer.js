const SET_USERS = 'SET-USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        case FOLLOW: {
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