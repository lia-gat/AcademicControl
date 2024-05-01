import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
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
    date_of_birth: {
        type: Date,
        required: true,
    },
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true,
    },
},
{
    timestamps: true,
},
);

const StudentModel = mongoose.model('Student', studentSchema);

export default StudentModel;
