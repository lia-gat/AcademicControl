import GroupModel from '../models/Group.js';

export const createGroup = async (req, res) => {
    try {
        const group = new GroupModel({
            group_name: req.body.group_name,
            year_of_admission: req.body.year_of_admission,
            tutor_id: req.body.tutor_id,
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
