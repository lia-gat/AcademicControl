import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    is_present: {
        type: Boolean,
        required: true,
    },
},
{
    timestamps: true,
},
);

const AttendanceModel = mongoose.model('Attendance', attendanceSchema);

export default AttendanceModel;
