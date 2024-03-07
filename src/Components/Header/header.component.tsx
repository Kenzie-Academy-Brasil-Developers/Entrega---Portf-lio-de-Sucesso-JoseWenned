import { Link } from "react-router-dom"

export const Header = () => {

    return(
        <>
            <header>

                <div>
                    <h1>José Wenned</h1>
                </div>

                <div>
                    <Link to="/">Home</Link>
                    <Link to="/AboutMe">About me</Link>
                    <Link to="/ProjectsPage">Projects</Link>
                    <Link to="/ContactsPage">Contacts</Link>
                </div>
                
            </header>
        </>
    )
}