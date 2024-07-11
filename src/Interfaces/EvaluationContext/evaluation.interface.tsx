import { Value } from "sass";

export interface IEvaluation {

    id: string
    name: string;   
    profession: string;
    description: string;

}

export interface IEvaluationCreate extends Omit< Value, "id" >{};
export type IEvaluationReturn = IEvaluationCreate[];

export interface IEvaluationProvidersProps {

    children: React.ReactNode;
    addTodo: ( FormData: IEvaluation ) => void;

};

export interface IEvaluationContext {
    
    Provider: any;

};

