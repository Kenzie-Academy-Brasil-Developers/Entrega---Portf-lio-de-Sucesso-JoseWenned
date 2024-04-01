import { FaUser } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { educations, experiences, skills, tools } from "../../Data/database";
import { GiOfficeChair } from "react-icons/gi";
import { HiOfficeBuilding } from "react-icons/hi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaSchoolFlag } from "react-icons/fa6";
import { ImFileEmpty } from "react-icons/im";
import style from "./style.module.scss"

export const AboutMe = () => {

    return(

        <>

            <section className={style.section}>

                <div className={style.containerSubSection}>

                    <div>

                        <h1 className={style.TitleMain}>About me</h1>

                        <p className={style.paragraphOne}>Quality of services for over 1 year</p>

                        <p className={style.paragraphTwo}>Driven by an insatiable curiosity, I dedicate myself to the craft of coding, engaging in new projects and continually learning.</p>

                    </div>

                </div>

            </section>

            <section className={style.section}>

                <div className={style.containerSectionTwo}>

                    <h2 className={style.titleTwo}>Personal information</h2>

                    <div className={style.containerInformationPersonal}>

                        <FaUser  className={style.iconsInformationPersonal}/>
                        <p className={style.textInformationPersonal}>José Wenned</p>

                    </div>

                    <div className={style.containerInformationPersonal}> 

                        <RiGraduationCapFill className={style.iconsInformationPersonal}/>
                        <p className={style.textInformationPersonal}>Developer full stack</p>

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

                        <h3 className={style.titleLanguage}>Languages skills</h3>

                        <p className={style.textLanguage}>Portuguese (Native)</p>
                        <p className={style.textLanguage}>English (basic)</p>

                    </div>
                    
                </div>

            </section>

            <section className={style.sectionThree}>

                <h2 className={style.titleTwo}>My qualifications</h2>

                <div className={style.containerSubThree}>

                    <div className={style.containerSubInformationThree}>

                        <div className={style.containerTitleSkills}>
                            <h3 className={style.titleThree}>Experience</h3>
                        </div>
                        
                        {experiences.length === 0 ?  
                            
                            (

                            <div className={style.containerEmpty}>
                                <ImFileEmpty className={style.imageEmpty}/>
                                <p className={style.paragraphEmpty}>I do not have professional experience.</p>
                            </div>

                            ): (

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

                        )}
                        
                    </div>

                    <div className={style.containerSubInformationThree}>

                        <div className={style.containerTitleSkills}>
                            <h3 className={style.titleThree}>Education</h3>
                        </div>

                        <ul className={style.containerList}>
                            {educations.map((education, index) => (
                                <li className={style.containerCard} key={index}>

                                    <div className={style.containerSubCard}>
                                        <FaSchoolFlag className={style.iconsCardExperience}/>
                                        <p className={style.textCardExperience}>{education.intitution}</p>
                                    </div>
                                    <div className={style.containerSubCard}>
                                        <RiGraduationCapFill className={style.iconsCardExperience}/>
                                        <p className={style.textCardExperience}>{education.training}</p>
                                    </div>
                                    <div className={style.containerSubCard}>
                                        <BsCalendar2DateFill className={style.iconsCardExperience}/>
                                        <p className={style.textCardExperience}>{education.date}</p>
                                    </div>

                                </li>
                            ))}
                        </ul>

                    </div>
                
                </div>

            </section>

            <section className={style.sectionFour}>

                <h2 className={style.titleTwo}>My skills set</h2>

                <div className={style.containerSubFour}>

                    <div>

                        <h3 className={style.titleThree}>Skills</h3>

                        <ul className={style.containerListSkills}>
                            {skills.map((skill, index) => (
                                <li key={index}>
                                    <img className={style.imageIconLanguage} src={skill.image}/>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div>

                        <h3 className={style.titleThree}>Tools</h3>

                        <ul className={style.containerListSkills}>
                            {tools.map((tool, index) => (
                                <li key={index}>
                                    <img className={style.imageIconTools} src={tool.image}/>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>

            </section>

            <section className={style.sectionFive}>

                <h2 className={style.titleTwo}>My services</h2>

                <div className={style.containerMainServices}>

                    <div className={style.containerServices}>
                        <h3 className={style.titleThree}>Develop Front-End</h3>
                        <p className={style.paragraphServices}>I worked on comprehensive solutions that cover front-end. I can create robust and integrated applications, providing a complete user experience.</p>
                    </div>

                    <div className={style.containerServices}>
                        <h3 className={style.titleThree}>Develop Back-End</h3>
                        <p className={style.paragraphServices}>My passion for back-end development led me to build solid foundations for applications, ensuring performance, scalability and security.</p>
                    </div>

                    <div className={style.containerServices}> 
                        <h3 className={style.titleThree}>Personal identity</h3>
                        <p className={style.paragraphServices}>My enthusiasm for continuous learning fuels my search for new challenges and innovative solutions in programming.</p>
                    </div>

                </div>

            </section>

        </>

    )

}