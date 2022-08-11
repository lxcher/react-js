import './App.css';
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Dialogs from "./Components/Profile/Dialogs/Dialogs";
import style from "./Components/Profile/Profile.module.css";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='content'>
                <Profile/>
                {/*<Dialogs/>*/}
            </div>

        </div>
    );
}

export default App;
