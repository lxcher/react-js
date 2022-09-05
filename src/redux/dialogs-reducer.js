const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogs: [
        {id: '1', name: 'Alex'},
        {id: '2', name: 'Sveta'},
        {id: '3', name: 'Lena'},
        {id: '4', name: 'Egor'}
    ],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Im fine'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state, newMessageText: action.text
            }
        }
        case ADD_MESSAGE: {
            const newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }
        default:
            return state
    }
}

export const addNewMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const updateNewMessageTextActionCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', text: text})

export default dialogsReducer