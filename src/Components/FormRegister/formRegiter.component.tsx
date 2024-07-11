import { useForm } from "react-hook-form"

export const FormRegister = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const submit = ( formData ) => {

        addTodo( { name, profession, description } );
        reset();

    };

    return (
        
        <>

            <form onSubmit={ handleSubmit( submit ) }>

                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Type here is name" required { ...register( "name" ) }/>
                { errors.name ? <p>{ errors.name.message }</p>: null }

                <label htmlFor="profession">Profession</label>
                <input id="profession" type="text" placeholder="Type here is profession" required { ...register( "profession" ) } />
                { errors.name ? <p>{ errors.profession.message }</p>: null }

                <label htmlFor="description">Description</label>
                <textarea id="description" placeholder="Type here is description" required { ...register( "description" ) }></textarea>
                { errors.name ? <p>{ errors.description.message }</p>: null }

                <button type="submit">Register evaluation</button>

            </form>

        </>

    )

}