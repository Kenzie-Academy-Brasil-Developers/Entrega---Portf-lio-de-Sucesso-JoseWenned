import { Link } from "react-router-dom"
import style from "./style.module.scss"
import { BsList } from "react-icons/bs";
import {  useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

export const Header = () => {

    const [isOpen, setOpen] = useState( false );

    const handleOpenSelect = () => {
        setOpen(!isOpen);
    };

    const handleCloseSection = () => {
        setOpen(false)
    }

    return(
        <>
            <header className={style.header}>

                <div className={style.containerHeader}>

                    <h1 className={style.titleName}>José Wenned</h1>

                    <div className={style.containerItems}>

                        <div>
                            
                            < BsList className={style.iconList} onClick={handleOpenSelect}/>

                            {isOpen && (

                                    <section className={style.containerNavigate} id="navigate" onChange={() =>setOpen(false)}>
                                        <CgCloseR className={style.iconClose} onClick={handleCloseSection}/>
                                        <Link className={style.titleNavigate} to="/">Home</Link>
                                        <Link className={style.titleNavigate} to="/AboutMePage">About</Link>
                                        <Link className={style.titleNavigate} to="/ProjectsPage">Projects</Link>
                                        <Link className={style.titleNavigate} to="/ContactsPage">Contacts</Link>
                                    </section>

                                )

                            }

                        </div>

                        <a href="https://github.com/JoseWenned" target="blank"><FaGithub className={style.imageGitHub}/></a>

                    </div>

                </div>
                
            </header>
        </>
    )
}