import GroupModel from '../models/Group.js';


export const getAllGroups = async (req, res) => {
    try {
        const groups = await GroupModel.find().populate('tutor_id').exec();
        res.json(groups); 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Произошла ошибка при получении списка групп',
        });
    }
};

export const getOneGroup = async (req, res) => {
    try {
        const groupId = req.params.id;
        const group = await GroupModel.findById(groupId).populate('tutor_id').exec();

        if (!group) {
            return res.status(404).json({
                message: 'Группа не найдена',
            });
        }

        res.json(group); 
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Произошла ошибка при получении группы',
        });
    }
};

export const removeGroup = async (req, res) => {
    try {
        const groupId = req.params.id;

        const deletedGroup = await GroupModel.findByIdAndDelete(groupId);

        if (deletedGroup) {
            res.json({ message: 'Группа успешно удалена' });
        } else {
            res.status(404).json({ message: 'Группа не найдена' });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Произошла ошибка при удалении группы' });
    }
};

export const createGroup = async (req, res) => {
    try {
        const group = new GroupModel({
            group_name: req.body.group_name,
            year_of_admission: req.body.year_of_admission,
            tutor_id: req.userId,
        });

        const savedGroup = await group.save();

        res.status(201).json(savedGroup);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Не удалось создать группу',
        });
    }
};

export const updateGroup = async (req, res) => {
    try {
        const groupId = req.params.id;

        await GroupModel.updateOne({
            _id: groupId,
        }, {
            group_name: req.body.group_name,
            year_of_admission: req.body.year_of_admission,
            tutor_id: req.userId,
        });

        res.json({
            success: true,
        });


    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Не удалось обновить группу',
        });
    }
};