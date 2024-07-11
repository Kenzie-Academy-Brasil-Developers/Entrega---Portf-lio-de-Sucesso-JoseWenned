import style from "./style.module.scss"
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export const Footer = () => {
    return(
        <>
            <footer className={style.footer}>

                <div className={style.containerFooter}>
                    <div className={style.containerPrimary}>
                        <h2 className={style.titleThank}>Thank you!</h2>
                        <p className={style.paragraph}>Follow me on my social networks and lets's talk.</p>
                    </div>

                    <div className={style.containerSecond}>
                        <BsFacebook className={style.imageFooterFacebook}/>
                        <BsInstagram className={style.imageFooterInstagram}/>
                        <BsLinkedin className={style.imageFooterLinkedIn}/>
                    </div>
                </div>
                
            </footer>
        </>
    )
}