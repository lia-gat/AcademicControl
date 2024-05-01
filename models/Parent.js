import mongoose from 'mongoose';

const parentSchema = new mongoose.Schema({
    last_name: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    patronymic: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
},
{
    timestamps: true,
},
);
const ParentModel = mongoose.model('Parent', parentSchema);

export default ParentModel;
  