import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль ддолжен быть минимум 5 символов').isLength({ min: 5}),
];

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль ддолжен быть минимум 5 символов').isLength({ min: 5}),
    body('lastName', 'Укажите фамилию').isLength({ min: 3}),
    body('firstName', 'Укажите имя').isLength({ min: 3}),
    body('patronymic', 'Укажите отчество').isLength({ min: 3}),
    body('phoneNumber', 'Укажите номер телефона').isLength({ min: 11}),
];

export const createStudentValidation = [
    body('last_name', 'Укажите фамилию студента').isLength({ min: 3 }),
    body('first_name', 'Укажите имя студента').isLength({ min: 3 }),
    body('patronymic', 'Укажите отчество студента').isLength({ min: 3 }),
    body('phone_number', 'Укажите номер телефона студента').isLength({ min: 11 }),
    body('date_of_birth', 'Укажите дату рождения студента').isISO8601(),
    body('group_id', 'Укажите идентификатор группы студента').isNumeric(),
];

export const createGroupValidation = [
    body('group_name', 'Укажите название группы').notEmpty(),
    body('year_of_admission', 'Укажите год поступления').isInt({ min: 1900, max: 2100 }),
    body('tutor_id', 'Укажите идентификатор куратора').isInt(),
];
