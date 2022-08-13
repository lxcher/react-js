const state = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, Alex', likesCount: '23'},
            {id: '2', message: 'How are you?', likesCount: '13'}
        ]
    },
    dialogsPage: {
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
        ]
    }
}

export default state