import StudentModel from '../models/Student.js';

export const getAllStudents = async (req, res) => {
    try {
        const students = await StudentModel.find();
        res.json(students); 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Произошла ошибка при получении списка студентов',
        });
    }
};

export const getOneStudent = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await StudentModel.findById(studentId);

        if (!student) {
            return res.status(404).json({
                message: 'Студент не найден',
            });
        }

        res.json(student); 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Произошла ошибка при получении студента',
        });
    }
};

export const removeStudent = async (req, res) => {
    try {
        const studentId = req.params.id;

        const deletedStudent = await StudentModel.findByIdAndDelete(studentId);

        if (deletedStudent) {
            res.json({ message: 'Студент успешно удален' });
        } else {
            res.status(404).json({ message: 'Студент не найден' });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Произошла ошибка при удалении студента' });
    }
};

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
