import style from './NewPost.module.css'


const NewPost = () => {
    return <div className={style.newPost}>
        <textarea></textarea>
        <button>ADD POST</button>
    </div>
}

export default NewPost