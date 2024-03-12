import { UserContext } from "../../Providers/userContext.provider"
import { useContext } from "react"

export const Contacts = () => {

    const { handleEmailCopyClick, handleTelephoneCopyClick } = useContext(UserContext)

    return(
        <>
            <section>

                <div>
                    <h2>Let's set up a conversation and <span>develop our creativity</span>together?</h2>
                </div>

                <div>
                    <ul>
                        <li>
                            <div>
                                <img src="./src/assets/WhatsApp.png"/>
                            </div>
                            <h3>My phone</h3>
                            <div>
                                <p id="textTelephone">+55(88)9 8185-5950</p>
                                <button type="submit" onClick={() => handleTelephoneCopyClick("+55(88)9 8185-5950") }>Copy</button>
                            </div>
                            <p>I'm available for a voice chat, let's about creativity together?</p>
                            <a href="https://wa.me/5588981855950" target="blank"><button type="submit">Call now</button></a>
                        </li>

                        <li>
                            <img src="./src/assets/Email.png"/>
                            <h3>My email</h3>
                            <div>
                                <p id="textEmail">wennedchaves1997@gmail.com</p>
                                <button type="submit" onClick={() => handleEmailCopyClick("wennedchaves1997@gmail.com") }>Copy</button>
                            </div>
                            <p>Send me an email reporting feedbacks suggestions and ideas.</p>
                            <a href="https://www.google.com/intl/pt-BR/gmail/about/" target="blank"><button type="submit">Send email now</button></a>
                        </li>

                        <li>
                            <img src="./src/assets/linkedInTwo.png"/>
                            <h3>My LinkedIn</h3>
                            <p>We can create more constant interactions as well as a sharing network.</p>
                            <a href="https://www.linkedin.com/in/jos%C3%A9-wenned-chaves-de-sousa-148554165/" target="blanck"><button type="submit">Go to linkedIn now</button></a>
                        </li>
                    </ul>
                </div>
                
            </section>
        </>
    )
}