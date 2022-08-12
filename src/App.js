import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Dialogs from "./Components/Profile/Dialogs/Dialogs";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Settings from "./Components/Settings/Settings";
import News from "./Components/Profile/News/News";

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='content'>
                    <Routes>
                        <Route path='/profile' element={<Profile/>}></Route>
                        <Route path='/dialogs' element={<Dialogs/>}></Route>
                        <Route path='/news' element={<News/>}></Route>
                        <Route path='/settings' element={<Settings/>}></Route>
                    </Routes>
                </div>
            </div>
        </Router>

    );
}

export default App;
