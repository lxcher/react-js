import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     let state = props.store.getState()
//     const addNewMessage = () => {
//         props.store.dispatch(addNewMessageActionCreator())
//     }
//     const onNewMessageChange = (text) => {
//         props.store.dispatch(updateNewMessageTextActionCreator(text))
//     }
//     return <Dialogs
//         updateNewMessageText={onNewMessageChange}
//         addNewMessage={addNewMessage}
//         state={state}
//     />
// }

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer