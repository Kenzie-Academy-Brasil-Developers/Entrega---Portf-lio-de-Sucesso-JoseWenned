import { Link } from "react-router-dom"
import style from "./style.module.scss"
import { FaGithub } from "react-icons/fa";

export const Header = () => {

    return(
        <>
            <header className={style.header}>

                <h1 className={style.titleName}>José Wenned</h1>

                <div>
                    <Link className={style.titleNavigate} to="/">Home</Link>
                    <Link className={style.titleNavigate} to="/AboutMe">About</Link>
                    <Link className={style.titleNavigate} to="/ProjectsPage">Projects</Link>
                    <Link className={style.titleNavigate} to="/ContactsPage">Contacts</Link>
                </div>

                <a href="https://github.com/JoseWenned" target="blank"><FaGithub className={style.imageGitHub}/></a>
                
            </header>
        </>
    )
}