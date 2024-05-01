import StudentModel from '../models/Student.js';

export const createStudent = async (req, res) => {
    try {

        const doc = new StudentModel({
            last_name: req.body.last_name,
            first_name: req.body.first_name,
            patronymic: req.body.patronymic,
            phone_number: req.body.phone_number,
            date_of_birth: req.body.date_of_birth,
            group_id: req.body.group_id,
        });

        const student = await doc.save();

        res.status(201).json(student);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не удалось создать студента',
        });
    }
};
