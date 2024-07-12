import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react";
import { TcreateEvaluationForm } from "../../schemas/evaluationFormSchema.schema";

export const FormRegister = () => {

    const [ evaluation, setEvaluation ] = useState< TcreateEvaluationForm[] >([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TcreateEvaluationForm>();

    const addTodo = ( formData: TcreateEvaluationForm ) => {

        setEvaluation([ ...evaluation, formData ]);

    };

    const submit: SubmitHandler<TcreateEvaluationForm> = ( formData ) => {

        console.log(formData);
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

