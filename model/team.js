const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
    tournamentId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tournament'
    },
    name:String,
    players:{
        type:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        default:[]
    },
    maxPlayers: {
        type: Number,
        default: 5,
        min: 2,
    },
    status:{
        type:String,
        enum:["remaining","lost"],
        required:true,
        default:"remaining"
    },
    password:{
        type:String,
        maxLength:20,
        default: "",
    }
})


const Team = mongoose.model("Team",TeamSchema);
module.exports =Team