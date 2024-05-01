import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
},
{
    timestamps: true,
},
);

const GradeModel = mongoose.model('Grade', gradeSchema);

export default GradeModel;
