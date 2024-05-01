import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
    group_name: {
        type: String,
        required: true,
    },
    year_of_admission: {
        type: Number,
        required: true,
    },
    tutor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},
{
    timestamps: true,
},
);

const GroupModel = mongoose.model('Group', groupSchema);

export default GroupModel;
