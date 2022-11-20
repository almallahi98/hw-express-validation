import {z,TypeOf} from 'zod';
export const parksSchema= z.object({
    body:z.object({
        id:z.string({required_error:'the id cant be null'}).min(2,'at least 2'),
        name:z.string({required_error:'you have to enter name'}).min(4,'min lenght must be 4 at least'),
        type:z.enum(['rollercoaster','thriller','water'],{required_error:'the type isnt sellected'}),
        Tickets:z.number({required_error:'required: number of Tickets must be enterd'}),
        Price:z.number({required_error:'price must be added'}),




    })
});

export type parksSchemaType=TypeOf<typeof parksSchema>['body'];