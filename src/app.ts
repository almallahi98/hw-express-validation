import express from 'express';
import {z} from 'zod';

const app =express();
app.use(express.json());

app.listen(5000,()=>{
    console.log('server is up and running port number 5000')
});