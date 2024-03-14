import { useContext } from "react"
import { UserContext } from "../../Providers/userContext.provider"
import { ListProjectsAll } from "./ListProjectsAll/listProjects.component"

export const MyProjects = () => {

    const { setCategory } = useContext( UserContext )

    return(
        <>  
            <header>

                <button type="submit" onClick={() => setCategory("All projects")}>all projects</button>
                <button type="submit" onClick={() => setCategory("Frontend")}>Frontend projects</button>
                <button type="submit" onClick={() => setCategory("Backend")}>Backend projects</button>
                <button type="submit" onClick={() => setCategory("Fullstack")}>Fullstack projects</button>
                
            </header>
            <section>

                <h2>My Projects</h2>

                <div>
                    <ListProjectsAll/>
                </div>
                
            </section>
        </>
    )
}