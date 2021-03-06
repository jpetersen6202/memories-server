import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/postsRouter.js'

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())

app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://jpetersen6202:data123@memories.cppuz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

mongoose.connect(CONNECTION_URL).then(()=>{console.log(`Database connected.`)})