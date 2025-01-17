import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/post.js'

const app = express();

app.use('/post',postRoutes)

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://XicBeC0SjCRoELMT:XicBeC0SjCRoELMT123@cluster0.uohou.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message));
mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')});