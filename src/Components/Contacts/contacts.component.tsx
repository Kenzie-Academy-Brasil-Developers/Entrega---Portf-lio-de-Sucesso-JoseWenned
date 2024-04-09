import { UserContext } from "../../Providers/userContext.provider"
import { useContext } from "react"
import style from "./style.module.scss"
import { MdOutlineCopyAll } from "react-icons/md";
import whatsapp from "../../assets/WhatsApp.png";
import email from "../../assets/Icon E-mail.png";
import linkedin from "../../assets/LinkedInTwo.png";
import imagecart2 from "../../assets/header-bg2.png"

export const Contacts = () => {

    const { handleEmailCopyClick, handleTelephoneCopyClick } = useContext(UserContext)

    return(
        <>
            <section className={style.section}>

                <div className={style.containerSubSection}>

                    <div className={style.containerTwoSubSection}>

                        <div className={style.containerTitle}>
                            <h2 className={style.titleSection}>Let's set up a conversation and <span className={style.textPurple}>develop our creativity</span> together?</h2>
                        </div>

                        <ul>
                            <li className={style.containerCard}>

                                <div>
                                        <img className={style.imageWhatsApp} src={whatsapp}/>
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
                                    <img className={style.imageEmail} src={email}/>
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
                                    <img className={style.imageLinkedIn} src={linkedin}/>
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

                        <img className={style.imageProjects} src={imagecart2} alt="imageProjects"/>

                    </div>

                </div>
                
            </section>
        </>
    )
}