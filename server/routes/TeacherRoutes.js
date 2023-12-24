import express from 'express';
import { LoginValidator } from '../middlewares/LoggedIn.js';
import { getMySubjects, getStudentsInClass } from '../controllers/TeacherContraller.js';

const TeacherRouter = express.Router();

TeacherRouter.use(LoginValidator);
TeacherRouter.get('/my-subjects', getMySubjects);
TeacherRouter.get('/get-students-in-class', getStudentsInClass);




export default TeacherRouter;