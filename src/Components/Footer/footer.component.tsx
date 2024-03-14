import style from "./style.module.scss"

export const Footer = () => {
    return(
        <>
            <footer className={style.footer}>

                <div className={style.containerPrimary}>
                    <h2 className={style.titleThank}>Thank you!</h2>
                    <p className={style.paragraph}>Follow me on my social metworks and lets's talk.</p>
                </div>

                <div className={style.containerSecond}>
                    <a href={"https://www.facebook.com/profile.php?id=100004807723751"} target="blank"><img src="./src/assets/facebook.png" alt="facebook.png"/></a>
                    <a href={"https://www.instagram.com/j.wenned?igsh=MW5henc0Z2E3eDhqag%3D%3D&utm_source=qr"} target="blank"><img src="./src/assets/instagram.png" alt="instagram.png"/></a>
                    <a href={"https://www.linkedin.com/in/jos%C3%A9-wenned-chaves-de-sousa-148554165/"} target="blank"><img src="./src/assets/linkedin.png" alt="linkendin.png"/></a>
                </div>
                
            </footer>
        </>
    )
}