import { Link } from "react-router-dom"
import style from "./style.module.scss"
import { FaGithub } from "react-icons/fa";
import { BsList } from "react-icons/bs";

export const Header = () => {

    return(
        <>
            <header className={style.header}>

                <div className={style.containerHeader}>

                    <h1 className={style.titleName}>José Wenned</h1>

                    <div>

                        < BsList className={style.iconList}/>

                    </div>
                    {isOpen && (

                            <select id="navigate" name="slecione navegação">
                                <option><Link className={style.titleNavigate} to="/">Home</Link></option>
                                <option><Link className={style.titleNavigate} to="/AboutMePage">About</Link></option>
                                <option><Link className={style.titleNavigate} to="/ProjectsPage">Projects</Link></option>
                                <option><Link className={style.titleNavigate} to="/ContactsPage">Contacts</Link></option>
                            </select>
                        )
                        
                    }

                    <a href="https://github.com/JoseWenned" target="blank"><FaGithub className={style.imageGitHub}/></a>

                </div>
                
            </header>
        </>
    )
}