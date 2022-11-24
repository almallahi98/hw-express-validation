import express from 'express';
import router from './routes/parks.router'
const app =express();
app.use(express.json());
app.use('/api/v1/park',router);

app.listen(5000,()=>{
    console.log('server is up and running port number 5000');
});