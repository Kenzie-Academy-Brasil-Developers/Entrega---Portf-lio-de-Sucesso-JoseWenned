export interface IEvaluation {

    id: string
    name: string;   
    profession: string;
    description: string;

}

export interface IEvaluationCreate extends Omit< IEvaluation, "id" >{};
export type IEvaluationReturn = IEvaluationCreate[];

export interface IEvaluationProvidersProps {

    children: React.ReactNode;

};

export interface IEvaluationContext {
    
    Provider: any;

};

