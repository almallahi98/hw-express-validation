import express from 'express';
import validate from '../middleware/validate';
import { parksSchema, parksSchemaType } from '../zod_schema/parks.schema';

const router= express.Router();
let parks: parksSchemaType[]=[];

router.get('/',(req,res,next)=>{
    return res.json(parks);
});

router.post('/',validate(parksSchema),(req,res,next)=>{
    const newParks=req.body as parksSchemaType;
    parks.push(newParks);
    return res.status(201).json({msg:'added..'});
});
router.put('/:id',validate(parksSchema),(req,res,next)=>{
    const updatePark=req.body as parksSchemaType;
    const id=req.params.id;
    const updatee=parks.filter(elm=>{
        return elm.id!==id;
    })
    updatee.push(updatePark);
    parks=updatee;
    return res.status(201).json({msg:'updated'}); 
})

router.delete('/:id',(req,res,next)=>{
    const id=req.params.id;
    const deleteElm=parks.filter(elm=>{
        return elm.id !== req.params.id;
    });
    parks=deleteElm;
    return res.status(200).json({msg:'deleted..'})
});
export default router;