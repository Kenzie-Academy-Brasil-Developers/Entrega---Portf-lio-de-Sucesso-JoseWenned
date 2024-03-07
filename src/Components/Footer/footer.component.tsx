import { Link } from "react-router-dom"

export const Footer = () => {
    return(
        <>
            <footer>

                <div>
                    <img src="./src/assets/Perfil.png" alt="perfil.png"/>
                </div>

                <div>
                    <h2>Thank you!</h2>
                    <p>Follow me on my social metworks and lets's talk.</p>
                </div>

                <div>
                    <Link to={"https://www.facebook.com/profile.php?id=100004807723751"}><img src="./src/assets/facebook.png" alt="facebook.png"/></Link>
                    <Link to={"https://www.instagram.com/j.wenned?igsh=MW5henc0Z2E3eDhqag%3D%3D&utm_source=qr"}><img src="./src/assets/instagram.png" alt="instagram.png"/></Link>
                    <Link to={"https://www.linkedin.com/in/jos%C3%A9-wenned-chaves-de-sousa-148554165/"}><img src="./src/assets/linkedin.png" alt="linkendin.png"/></Link>
                </div>
                
            </footer>
        </>
    )
}