import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv'
import { dbConfig } from './utils/dbConfig.js';
import userRouter from './routes/UserRoutes.js';
import cors from 'cors';
import adminRouter from './routes/AdminRoutes.js';
import studentRouter from './routes/StudentRoutes.js';
import classRoutes from './routes/ClassRoutes.js';
import noticeRouter from './routes/NoticeRoutes.js';

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
dotenv.config();


app.use(morgan('dev'));
app.use(cors());
app.get('/', async (req,res)=>{
    res.status(200).json('Server is up and running');
})

//Put other routes here

//Common Routes
app.use('/',userRouter);
app.use('/class', classRoutes);
app.use('/notices', noticeRouter);
//Student Routes
app.use('/student', studentRouter)
//Teacher Routes

//Support team Routes

//Parent Routes

//Admin Routes
app.use('/admin',adminRouter )

dbConfig().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is up and running on port ${port}`);
    })
}).catch((err)=>{
    console.log(err);
})

