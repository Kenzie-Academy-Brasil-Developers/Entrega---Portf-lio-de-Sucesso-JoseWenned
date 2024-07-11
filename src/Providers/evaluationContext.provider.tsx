import { IEvaluationContext, IEvaluationProvidersProps } from "../Interfaces/EvaluationContext/evaluation.interface";

export const EvaluationContext = ({ } as IEvaluationContext); 

export const EvaluationProvider = ( { children }: IEvaluationProvidersProps ) => {

    return( 

        <EvaluationContext.Provider value={{

        }}>

            { children }

        </EvaluationContext.Provider>

    )

}