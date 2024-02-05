const mongoose=require('mongoose');
const NotesSchema={
    title:{
        type: string,
        required: true,
    },
    description:{
        type: string,
        required: true,
    },
    date:{
        type:date,
        default:Date.now
    }

};
module.exports=moongose.model(notes,NotesSchema);