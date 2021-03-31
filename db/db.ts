import { load } from 'ts-dotenv';
import mongoose from 'mongoose';
import config from '../config/config'

const env = load({
    URLDB: String
})

const urlDbAnotaAi = env.URLDB || config.db.anotaai

class database {
    public async connect(){
        const anotaai = mongoose.connect(urlDbAnotaAi,
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true 
            })
            return {
                anotaai,
            }
    }
}    

export default new database()