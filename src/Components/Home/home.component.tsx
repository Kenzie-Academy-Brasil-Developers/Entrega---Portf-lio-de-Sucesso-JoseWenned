import { useContext } from "react"
import { UserContext } from "../../Providers/userContext.provider"
import style from "./style.module.scss"
import { IoIosBriefcase } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";
import { FaFileCode } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
<<<<<<< HEAD
import minhaImage  from "../../assets/Perfil.jpeg"
=======
import minhaImage from "../../../src/assets/Perfil.jpeg"
>>>>>>> d15e1b2474bf93d7e8b1e256cbe9e4bb7a42e108

export const Home = () => {

    const { handleDownloadCv, sumProjects, setModal } = useContext( UserContext )

    const openModal = () => {

        setModal( true )

    }

    return(
        <>
            <section className={style.section}>

                <div className={style.containerPrimary}>

                    <h1 className={style.titleDev}>DEVELOPER FULL STACK</h1>

                    <div className={style.containerSecond}>
                        <img className={style.imageProfile} src={minhaImage} onClick={ openModal }/>
                        <p className={style.titleName}>Hello, my name is José Wenned</p>
                    </div>

                    <div className={style.containerThird}>

                        <h2 className={style.paragraphPrimary}>I <span className={style.textPurple}>love</span> creating and <span className={style.textPurple}>developing</span> projects.</h2>

                        <p className={style.paragraphSecond}>Discover here in this environment, created especially for you, all my projects and technologies.</p>

                        <div className={style.containerSubThird}>

                            <Link to={"/ProjectsPage"} className={style.button}>See Projects</Link>

                            <button className={style.button} type="submit" onClick={ handleDownloadCv }>Download CV <FiDownload className={style.iconDownload}/></button>

                        </div>
                        
                    </div>

                    <div className={style.containerFourth}>

                        <div className={style.containerSubFourth}>

                            <IoIosBriefcase className={style.icons}/>
                            <span className={style.numberExperience}>1</span>
                            <p className={style.text}>Years of experience</p>

                        </div>

                        <div className={style.containerSubFourth}>

                            <IoMdContacts className={style.icons}/>
                            <span className={style.numberExperience}>0</span>
                            <p className={style.text}>Satisfied customers</p>

                        </div>

                        <div className={style.containerSubFourth}>

                            <FaFileCode className={style.icons}/>
                            <span className={style.numberExperience}>{sumProjects()}</span>
                            <p className={style.text}>Finished projects</p>

                        </div>
                        
                    </div>

                </div>

             
                <img className={style.imageCart} src="./src/assets/header-bg.png.png" alt="image.cartPage"/>
                
                
            </section>
        </>
    )
}