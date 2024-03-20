import { FaUser } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { educations, experiences, skills, tools } from "../../Data/database";
import style from "./style.module.scss"
import { GiOfficeChair } from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";
import { BsCalendar2DateFill } from "react-icons/bs";

export const AboutMe = () => {
    return(
        <>
            <section className={style.section}>

                <div className={style.containerSubSection}>

                    <div className={style.containerSectionOne}>

                        <h1 className={style.TitleMain}>About me</h1>

                        <p className={style.paragraphOne}>Quality of services for over 1 year</p>

                        <p className={style.paragraphTwo}>Driven by an insatiable curiosity, I dedicate myself to the craft of coding, engaging in new projects and continually learning.</p>

                        <div className={style.containerInformationPersonal}>

                            <FaUser  className={style.iconsInformationPersonal}/>
                            <p className={style.textInformationPersonal}>José Wenned</p>

                        </div>

                        <div className={style.containerInformationPersonal}> 

                            <RiGraduationCapFill className={style.iconsInformationPersonal}/>
                            <p className={style.textInformationPersonal}>Develop full stack</p>

                        </div>

                        <div className={style.containerInformationPersonal}>

                            <MdEmail className={style.iconsInformationPersonal}/>
                            <p className={style.textInformationPersonal}>wennedchaves1997@gmail.com</p>

                        </div>

                        <div className={style.containerInformationPersonal}>

                            <FaHouseUser className={style.iconsInformationPersonal}/>
                            <p className={style.textInformationPersonal}>Quixeré, Ceará, Brasil</p>
                            
                        </div>

                        <div className={style.containerInformationLanguage}>

                            <h3 className={style.titleLanguage}>Language skills</h3>

                            <p className={style.textLanguage}>Portuguese (Native)</p>
                            <p className={style.textLanguage}>English (basic)</p>

                        </div>

                    </div>

                    <div className={style.containerSectionTwo}>

                        <h2 className={style.titleSectionTwo}>My qualifications</h2>

                        <div>

                            <h3 className={style.titleExperirnce}>Experience</h3>

                            <ul className={style.containerList}>
                                {experiences.map((experience, index) => (
                                    <li className={style.containerCard} key={index}>

                                        <div className={style.containerSubCard}>
                                            <HiOfficeBuilding className={style.iconsCardExperience} />
                                            <p className={style.textCardExperience}>{experience.company}</p>
                                        </div>
                                        <div className={style.containerSubCard}>
                                            <GiOfficeChair className={style.iconsCardExperience}/>
                                            <p className={style.textCardExperience}>{experience.office}</p>
                                        </div>
                                        <div className={style.containerSubCard}>
                                            <BsCalendar2DateFill className={style.iconsCardExperience}/>
                                            <p className={style.textCardExperience}>{experience.date}</p>
                                        </div>

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
                                    <img className={style.imageIconLanguage} src={skill.image}/>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div>

                        <p>Tools</p>

                        <ul>
                            {tools.map((tool, index) => (
                                <li key={index}>
                                    <img className={style.imageIconTools} src={tool.image}/>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div>

                        <h2>My services</h2>

                        <div>
                            <h3>Develop Front-End</h3>
                            <p>I worked on comprehensive solutions that cover front-end. I can create robust and integrated applications, providing a complete user experience.</p>
                        </div>

                        <div>
                            <h3>Develop Back-End</h3>
                            <p>My passion for back-end development led me to build solid foundations for applications, ensuring performance, scalability and security.</p>
                        </div>

                        <div>
                            <h3>Personal identity</h3>
                            <p>My enthusiasm for continuous learning fuels my search for new challenges and innovative solutions in programming.</p>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}