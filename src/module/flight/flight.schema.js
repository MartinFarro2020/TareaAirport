import z from 'zod';

export const flightSchema = z.object({
    originId: z.number().positive(),
    destinationId: z.number().positive(),
    planeId: z.number().positive(),
    departureDare: z.string({
        invalid_type_error: "DepartureDate must be a correct format",
        required_error:"DepartureDate is required"
    }),
    checkIn: z.date().optional(),
    status: z.enum(['pending', 'inProgress', 'done', 'cancelled']).optional(),
});

export function validateFligth(data){

    const result = flightSchema.safeParse(data)

    const { hasError, errorMessages, data} = extractValidationData(result)

    return {
        hasError,
        errorMessages,
        data
    }
}

export const extractValidationData = (resultValidation) => {
    let errorMessages;
    let data;
    const hasError = !resultValidation.success;

    if(hasError) errorMessages = JSON.parse(resultValidation.error.message);
    if(!hasError) data = resultValidation.data
 
    return{
        hasError,
        errorMessages,
        data
    }
}

