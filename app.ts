import express from 'express';
import noAuthRoutes from './routes/noauth/routes';
import database from './db/db'

const app = express();

app.use(express.json());

database.connect()
    .then(() => {
      app.use("/noauth",noAuthRoutes);
    }).catch((e) => {
      console.log(e)
    })



app.listen(8080, () => {
  console.log('Server is running! 🚀');
});

export { app }