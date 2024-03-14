import { ListProjectsBackend } from "./ListProjectsBackend/myProjectsBackend.component"
import { ListProjectsFrontend } from "./ListProjectsFrontend/listProjects.components"
import { ListProjectsFullstack } from "./ListaProjectsFullstack/listProjectFullstack.component"

export const MyProjects = () => {

    return(
        <>  
            <header>

                <button>all projects</button>
                <button>Frontend projects</button>
                <button>Backend projects</button>
                <button>Fullstack projects</button>
                
            </header>
            <section>

                <h2>My Projects</h2>

                <div>
                    <ListProjectsFrontend/>
                </div>

                <div>
                    <ListProjectsBackend/>
                </div>

                <div>
                    <ListProjectsFullstack/>
                </div>
                
            </section>
        </>
    )
}