import { useContext } from "react"
import { UserContext } from "../../Providers/userContext.provider"

export const Home = () => {

    const { handleDownloadCv } = useContext( UserContext )

    return(
        <>
            <section>

                <div>
                    <img src="./src/assets/Perfil.png"/>
                    <h1>Hello, my name is José Wenned</h1>
                </div>

                <div>
                    <h2>I love creating and developing projects.</h2>

                    <p>Discover here in this environment, created especially for you, all my projects and technologies.</p>

                    <div>
                        <a href="https://github.com/JoseWenned?tab=projects" target="blank"><button>See projects</button></a>

                        <a href="https://github.com/JoseWenned" target="blank"><img src="./src/assets/GitHub.png"/></a>

                        <button type="submit" onClick={ handleDownloadCv }>Donwload CV</button>
                    </div>
                </div>

                <div>
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