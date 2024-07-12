import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react";
import { evaluationFormSchema, TcreateEvaluationForm } from "../../schemas/evaluationFormSchema.schema";
import { Input } from "../../fragments/Input/input.fragment";
import { TextArea } from "../../fragments/Textarea/textarea.fragment";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../Providers/UserContext.provider";

export const FormRegister = () => {

    const { addTodo } = useContext(UserContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TcreateEvaluationForm>({
        resolver: zodResolver(evaluationFormSchema)
    });

    const submit: SubmitHandler<TcreateEvaluationForm> = ( formData ) => {

        console.log(formData);
        addTodo( formData );
        reset();

    };

    return (
        
        <>

            <form onSubmit={ handleSubmit( submit ) }>

                <label htmlFor="name">Name</label>
                <Input 
                    id="name" 
                    type="text" 
                    placeholder="Type here is name" 
                    required 
                    { ...register( "name" ) }
                    error={errors.name}
                />

                <label htmlFor="profession">Profession</label>
                <Input 
                    id="name" 
                    type="text" 
                    placeholder="Type here is name"
                    required 
                    { ...register( "profession" ) }
                    error={errors.profession}
                />

                <label htmlFor="description">Description</label>
                <TextArea 
                    id="description" 
                    placeholder="Type here is description" 
                    required 
                    { ...register( "description" ) } 
                    error={errors.description}
                />

                <button type="submit">Register evaluation</button>

            </form>

        </>

    )

}



