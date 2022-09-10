import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import {
    Routes,
    Route
} from "react-router-dom";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='content'>
                <Routes>
                    <Route path='/profile' element={<Profile/>}></Route>
                    <Route path='/dialogs' element={<DialogsContainer/>}></Route>
                    <Route path='/news' element={<News/>}></Route>
                    <Route path='/settings' element={<Settings/>}></Route>
                    <Route path='/users' element={<UsersContainer />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
