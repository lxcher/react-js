import style from './Profile.module.css'
import Posts from "./Posts/Posts";


const Profile = () => {
    return <div>
        <div>
            <img src="https://w0.peakpx.com/wallpaper/189/946/HD-wallpaper-naruto-pain-akatsuki-tendou-konan-deidara-hoshigaki-kisame-hidan-kakuzu-tobi-uchiha-madara-anime.jpg" alt=""/>
        </div>
        <div className={style.user_info}>ava+descr</div>
        <Posts />
    </div>
}

export default Profile