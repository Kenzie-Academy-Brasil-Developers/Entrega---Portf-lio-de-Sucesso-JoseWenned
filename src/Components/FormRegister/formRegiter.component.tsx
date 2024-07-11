import { SubmitHandler, useForm } from "react-hook-form"
import { IEvaluationCreate } from "../../Interfaces/EvaluationContext/evaluation.interface";

export const FormRegister = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IEvaluationCreate>();

    const submit: SubmitHandler<IEvaluationCreate> = ( formData ) => {

        addTodo( formData );
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
                { errors.profession ? <p>{ errors.profession.message }</p>: null }

                <label htmlFor="description">Description</label>
                <textarea id="description" placeholder="Type here is description" required { ...register( "description" ) }></textarea>
                { errors.description ? <p>{ errors.description.message }</p>: null }

                <button type="submit">Register evaluation</button>

            </form>

        </>

    )

}


