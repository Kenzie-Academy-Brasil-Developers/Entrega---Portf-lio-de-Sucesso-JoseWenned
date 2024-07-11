export const FormRegister = () => {

    return (
        
        <>

            <form>

            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Type here is name" required/>

            <label htmlFor="profession">Profession</label>
            <input id="profession" name="profession" type="text" placeholder="Type here is profession" required/>

            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" placeholder="Type here is description" required></textarea>

            <button type="submit">Register evaluation</button>

            </form>

        </>

    )

}