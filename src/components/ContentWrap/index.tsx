import style from './style.module.css'
const ContentWrap = ({children}:{children:JSX.Element}) =>{
    return (
        <div className={style.contentWrap}>
            {children}
        </div>
    )
}

export default ContentWrap;