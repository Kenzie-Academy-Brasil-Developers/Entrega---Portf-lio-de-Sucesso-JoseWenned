import { FaUser } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { educations, experiences, skills } from "../../Data/database";

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

                    <h2>My qualifications</h2>

                    <div>

                        <h3>Experience</h3>

                        <ul>
                            {experiences.map((experience, index) => (
                                <li key={index}>
                                    <p>{experience.company}</p>
                                    <p>{experience.office}</p>
                                    <p>{experience.date}</p>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div>

                        <h3>Education</h3>

                        <ul>
                            {educations.map((education, index) => (
                                <li key={index}>
                                    <p>{education.intitution}</p>
                                    <p>{education.training}</p>
                                    <p>{education.date}</p>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

                <div>
                    
                    <h2>My skills set</h2>

                    <p>Skills</p>

                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>
                                <img src={skill.image}/>
                            </li>
                        ))}
                    </ul>

                </div>

            </section>
        </>
    )
}