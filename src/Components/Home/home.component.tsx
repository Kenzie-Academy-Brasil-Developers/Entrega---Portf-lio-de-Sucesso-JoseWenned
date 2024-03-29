import { useContext } from "react"
import { UserContext } from "../../Providers/userContext.provider"
import style from "./style.module.scss"
import { IoIosBriefcase } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";
import { FaFileCode } from "react-icons/fa6";

export const Home = () => {

    const { handleDownloadCv, sumProjects, setModal } = useContext( UserContext )

    const openModal = () => {

        setModal( true )

    }

    return(
        <>
            <section className={style.section}>

                <div className={style.containerPrimary}>

                    <div className={style.containerSecond}>
                        <img className={style.imageProfile} src="./src/assets/Perfil2.JPG" onClick={ openModal }/>
                        <h1 className={style.titleName}>Hello, my name is José Wenned</h1>
                    </div>

                    <div className={style.containerThird}>

                        <h2 className={style.paragraphPrimary}>I <span className={style.textPurple}>love</span> creating and <span className={style.textPurple}>developing</span> projects.</h2>

                        <p className={style.paragraphSecond}>Discover here in this environment, created especially for you, all my projects and technologies.</p>

                        <div className={style.containerSubThird}>

                            <a href="https://github.com/JoseWenned?tab=projects" target="blank"><button className={style.button}>See projects</button></a>

                            <button className={style.button} type="submit" onClick={ handleDownloadCv }>Donwload CV</button>

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
                            <p className={style.text}>Finished Projects</p>

                        </div>
                        
                    </div>

                </div>

             
                <img className={style.imageCart} src="./src/assets/header-bg.png.png" alt="image.cartPage"/>
                
                
            </section>
        </>
    )
}