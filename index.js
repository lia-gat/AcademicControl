import express from 'express';
import mongoose from 'mongoose';

import { registerValidation, loginValidation, createStudentValidation, createGroupValidation } from './validations.js';

import checkAuth from './utils/checkAuth.js';

import * as UserController from './contrillers/UserController.js';
import * as StudentController from './contrillers/StudentController.js'
import * as GroupController from './contrillers/GroupController.js'


mongoose
    .connect('mongodb+srv://admin:aJocHic124@cluster0.fw05mwv.mongodb.net/grade')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();


app.use(express.json());

app.post('/auth/login',loginValidation, UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/students', StudentController.getAllStudents);
app.get('/students/:id', StudentController.getOneStudent);
app.post('/students', checkAuth, createStudentValidation, StudentController.createStudent);
app.delete('/students/:id', checkAuth, StudentController.removeStudent);
//app.patch('/students/:id', checkAuth, StudentController.updateStudent);

app.get('/groups', GroupController.getAllGroups);
app.get('/groups/:id', GroupController.getOneGroup);
app.post('/groups',checkAuth, createGroupValidation, GroupController.createGroup);
app.delete('/groups/:id',checkAuth, GroupController.removeGroup);
app.patch('/groups/:id',checkAuth, GroupController.updateGroup);


app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});


