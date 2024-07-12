import { z } from "zod";

export const evaluationFormSchema = z.object({

    name: z.string().min(1, {message: "Name is required"}).min(3, {message: "A minimum of 3 characters is required"}),
    profission: z.string().min(1, {message: "profission is required"}).min(8, "A minimum of 8 characters is required"),
    description: z.string().min(1, {message: "description is required"}).min(3, {message: "A minimum of 3 characters is required"}),

});