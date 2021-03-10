import express from 'express';
import mongoose from 'mongoose';
import router from './routes';
import { load } from 'ts-dotenv';

const env = load({
  STRING_CONNECTION: String
})

mongoose.connect(env.STRING_CONNECTION,
   { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }
)

const app = express();

app.use(express.json());
app.use(router);

export { app }