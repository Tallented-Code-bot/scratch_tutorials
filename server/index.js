//initialize variables
const express=require('express');
const path=require('path');
const PORT=process.env.PORT || 3000;
const app= express();


app.use(express.static(path.resolve(__dirname,'../build')))


//return hello world in json
app.get("/api",(req,res)=>{
	res.json({message:"Hello from the server!"});
});


app.get("/",(req,res)=> {
	res.sendFile(path.resolve(__dirname,'../build/','index.html'));
})



//listen on port 3000 by default
app.listen(PORT,()=>{
	console.log(`Server listening on https://localhost:${PORT}`)
});