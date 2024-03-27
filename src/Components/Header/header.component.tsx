import { Link } from "react-router-dom"
import style from "./style.module.scss"
import { FaGithub } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import {  useState } from "react";

export const Header = () => {

    const [isOpen, setOpen] = useState( false );

    const handleOpenSelect = () => {
        setOpen(!isOpen);
    };

    return(
        <>
            <header className={style.header}>

                <div className={style.containerHeader}>

                    <h1 className={style.titleName}>José Wenned</h1>

                    <div>

                        < BsList className={style.iconList} onClick={handleOpenSelect}/>

                    </div>
                    {isOpen && (

                            <div onChange={() =>setOpen(false)}>
                                <Link className={style.titleNavigate} to="/">Home</Link>
                                <Link className={style.titleNavigate} to="/AboutMePage">About</Link>
                                <Link className={style.titleNavigate} to="/ProjectsPage">Projects</Link>
                                <Link className={style.titleNavigate} to="/ContactsPage">Contacts</Link>
                            </div>
                        )
                        
                    }

                    <a href="https://github.com/JoseWenned" target="blank"><FaGithub className={style.imageGitHub}/></a>

                </div>
                
            </header>
        </>
    )
}