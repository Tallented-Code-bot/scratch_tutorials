const mongoose=require("mongoose");
const Schema=mongoose.Schema;



const TutorialSchema=new Schema({
	id:Number,
	title:String,	
	author:String,
	body:String
});


const Tutorial = mongoose.model("tutorial",TutorialSchema);

module.exports=Tutorial;