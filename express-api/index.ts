import express,{Request,Response} from 'express';

const app = express()

const port = 9001

app.get('/',(req:Request,res:Response)=>{
res.json({
  status:'ok',
  message:'hello express'})
})

app.listen(port,()=>{
  console.log('server running on port '+ port )
})


