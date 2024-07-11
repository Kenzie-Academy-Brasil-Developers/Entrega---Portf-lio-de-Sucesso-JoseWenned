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
                        <a href="https://www.facebook.com/profile.php?id=100004807723751" target="blank"><BsFacebook className={style.imageFooterFacebook}/></a>
                        <a href="https://www.instagram.com/j.wenned?igsh=MW5henc0Z2E3eDhqag%3D%3D&utm_source=qr" target="blank"><BsInstagram className={style.imageFooterInstagram}/></a>
                        <a href="https://www.linkedin.com/in/jos%C3%A9-wenned-chaves-de-sousa-148554165/" target="blank"><BsLinkedin className={style.imageFooterLinkedIn}/></a>
                    </div>
                </div>
                
            </footer>
        </>
    )
}