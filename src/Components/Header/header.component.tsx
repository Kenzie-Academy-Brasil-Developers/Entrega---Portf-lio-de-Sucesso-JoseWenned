import { Link } from "react-router-dom"
import style from "./style.module.scss"

export const Header = () => {

    return(
        <>
            <header className={style.header}>

                <div className={style.containerPrimary}>

                    <div>
                        <h1 className={style.titleName}>José Wenned</h1>
                    </div>

                    <div className={style.containerSecond}>
                        <Link className={style.titleNavigate} to="/">Home</Link>
                        <Link className={style.titleNavigate} to="/AboutMe">About</Link>
                        <Link className={style.titleNavigate} to="/ProjectsPage">Projects</Link>
                        <Link className={style.titleNavigate} to="/ContactsPage">Contacts</Link>
                    </div>

                </div>
                
            </header>
        </>
    )
}