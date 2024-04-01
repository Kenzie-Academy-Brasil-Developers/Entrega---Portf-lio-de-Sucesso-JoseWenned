import { UserContext } from "../../Providers/userContext.provider"
import { useContext } from "react"
import style from "./style.module.scss"
import { MdOutlineCopyAll } from "react-icons/md";

export const Contacts = () => {

    const { handleEmailCopyClick, handleTelephoneCopyClick } = useContext(UserContext)

    return(
        <>
            <section className={style.section}>

                <div className={style.containerSubSection}>

                    <div className={style.containerTitle}>
                        <h2 className={style.titleSection}>Let's set up a conversation and <span className={style.textPurple}>develop our creativity</span> together?</h2>
                    </div>

                    <div className={style.containerTwoSubSection}>
                        <ul>
                            <li className={style.containerCard}>

                                <div>
                                    <img className={style.imageWhatsApp} src="./src/assets/WhatsApp.png"/>
                                </div>

                                <div className={style.containerInformation}>

                                    <h3 className={style.titleContact}>My phone</h3>

                                    <div className={style.informationContact}>

                                        <p className={style.contact} id="textTelephone">+55(88)9 8185-5950</p>
                                        <MdOutlineCopyAll className={style.copy} onClick={() => handleTelephoneCopyClick("+55(88)9 8185-5950") }/>

                                    </div>

                                    <p className={style.paragraph}>I'm available for a voice chat, let's about creativity together?</p>

                                    <a className={style.anchor} href="https://wa.me/5588981855950" target="blank">Call now</a>

                                </div>

                            </li>

                            <li className={style.containerCard}>

                                <div>
                                    <img className={style.imageEmail} src="./src/assets/Icon E-mail.png"/>
                                </div>

                                <div className={style.containerInformation}>

                                    <h3 className={style.titleContact}>My email</h3>

                                    <div className={style.informationContact}>

                                        <p className={style.contact} id="textEmail">wennedchaves1997@gmail.com</p>
                                        <MdOutlineCopyAll className={style.copy} onClick={() => handleEmailCopyClick("wennedchaves1997@gmail.com") }/>

                                    </div>

                                    <p className={style.paragraph}>Send me an email reporting feedbacks suggestions and ideas.</p>

                                    <a className={style.anchor} href="https://www.google.com/intl/pt-BR/gmail/about/" target="blank">Send email now</a>

                                </div>
                                
                            </li>

                            <li className={style.containerCard}>

                                <div>
                                    <img className={style.imageLinkedIn} src="./src/assets/linkedInTwo.png"/>
                                </div>

                                <div className={style.containerInformation}>

                                    <h3 className={style.titleContact}>My LinkedIn</h3>

                                    <p className={style.paragraph}>We can create more constant interactions as well as a sharing network.</p>

                                    <a className={style.anchor} href="https://www.linkedin.com/in/jos%C3%A9-wenned-chaves-de-sousa-148554165/" target="blanck">Go to linkedIn now</a>

                                </div>

                            </li>
                        </ul>
                    </div>

                    <div>

                        <img className={style.imageProjects} src="./src/assets/header-bg (2).png" alt="imageProjects"/>

                    </div>

                </div>
                
            </section>
        </>
    )
}