import express from 'express';
import cors from 'cors';
const app=express();
app.use(express.json());
app.use(cors());
import axios from 'axios';
app.post("/translate",async(req,res)=>{
    var text=req.body.data;
    console.log(text);
    try {
        const response=await axios.get(`https://api.mymemory.translated.net/get?q=${text}&langpair=en|fr`);
        return res.json({translation:response.data.responseData.translatedText});
    } catch (error) {
        res.status(500).json({error:'Failed Try Again'});
    }


});
app.listen(3001,()=>{
    console.log("Server IS Running !!");
})