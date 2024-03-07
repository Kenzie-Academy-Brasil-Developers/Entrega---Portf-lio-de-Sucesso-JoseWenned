import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage/homePage.page"
import { ProjectsPage } from "../Pages/ProjectsPage/projectPage.page"
import { ContactsPage } from "../Pages/ContactsPage/contactPage.page"

export const RouterMain = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={ <HomePage/> }></Route>
                <Route path="/ProjectsPage" element={ <ProjectsPage/> }></Route>
                <Route path="/ContactsPage" element={ <ContactsPage/> }></Route>
                <Route path="/DigitalMedia" element={""}></Route>
            </Routes>
        </>
    )
}