import { FaUser } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";

export const AboutMe = () => {
    return(
        <>
            <section>

                <div>

                    <h1>About me</h1>

                    <p>Quality of services for over 1 year</p>

                    <p>Driven by an insatiable curiosity, I dedicate myself to the craft of coding, engaging in new projects and continually learning.</p>
                    
                    <div>

                        <FaUser />
                        <p>José Wenned</p>

                    </div>

                    <div>

                        <RiGraduationCapFill />
                        <p>Develop full stack</p>

                    </div>

                    <div>

                        <MdEmail />
                        <p>wennedchaves1997@gmail.com</p>

                    </div>

                    <div>

                        <FaHouseUser />
                        <p>Quixeré, Ceará, Brasil</p>
                        
                    </div>

                    <div>

                        <h3>Language skills</h3>

                        <p>Portuguese(Native)</p>
                        <p>English(basic)</p>

                    </div>

                </div>

                <div>

                    <h2>Skills</h2>

                    <img src="./src/assets/css-3.png" alt="icon.css.png"/>
                    <img src="./src/assets/database.png" alt="icon.database.png"/>
                    <img src="./src/assets/Express.png" alt="icon.express.png"/>
                    <img src="./src/assets/html.png" alt="icon.html.png"/>
                    <img src="./src/assets/nodejs.png" alt="icon.nodejs.png"/>
                    <img src="./src/assets/python.png" alt="icon.python.png"/>
                    <img src="./src/assets/physics.png" alt="icon.physics.png"/>
                    <img src="./src/assets/typescrit.png" alt="icon.typescrit.png"/>

                </div>

            </section>
        </>
    )
}