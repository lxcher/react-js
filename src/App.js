import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Dialogs from "./Components/Dialogs/Dialogs";
import {
    Routes,
    Route
} from "react-router-dom";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='content'>
                <Routes>
                    <Route
                        path='/profile'
                        element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}>
                    </Route>
                    <Route
                        path='/dialogs'
                        element={<Dialogs
                            dialogsPage={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />}></Route>
                    <Route path='/news' element={<News/>}></Route>
                    <Route path='/settings' element={<Settings/>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
