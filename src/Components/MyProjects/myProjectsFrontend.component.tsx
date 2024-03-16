import { useContext } from "react"
import { UserContext } from "../../Providers/userContext.provider"
import { ListProjectsAll } from "./ListProjectsAll/listProjects.component"
import  style  from "./style.module.scss"

export const MyProjects = () => {

    const { setCategory } = useContext( UserContext )

    return(
        <>  
            <section className={style.sectionPrimary}>
                <div className={style.containerButton}>
                        <button className={style.button} type="submit" onClick={() => setCategory("All projects")}>All projects</button>
                        <button className={style.button} type="submit" onClick={() => setCategory("Frontend")}>Frontend projects</button>
                        <button className={style.button} type="submit" onClick={() => setCategory("Backend")}>Backend projects</button>
                        <button className={style.button} type="submit" onClick={() => setCategory("Fullstack")}>Fullstack projects</button>
                </div>
            </section>
            <section className={style.sectionSecond}>

                <h2 className={style.titleProjects}>My Projects</h2>

                <div className={style.sectionSubSecond}>

                    <ListProjectsAll/>
                    
                </div>
                
            </section>
        </>
    )
}