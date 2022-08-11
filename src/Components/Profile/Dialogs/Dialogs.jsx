import style from './Dialogs.module.css'

const Dialogs = () => {
    return <div className={style.dialogs}>
        <div className={style.dialogsItems}>
            <div className={style.item}>Alex</div>
            <div className={style.item}>Sveta</div>
            <div className={style.item}>Max</div>
            <div className={style.item}>Lena</div>
        </div>
        <div className={style.messages}>
            <div className={style.message}>Hi</div>
            <div className={style.message}>How are you?</div>
            <div className={style.message}>Im fine</div>
        </div>
    </div>
}

export default Dialogs