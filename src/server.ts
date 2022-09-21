import express from 'express';
import { adminJs, adminJsRouter } from './adminJs';
import { sequelize } from './database';
import { router } from './routes';


const app = express();

app.use(express.static('public'))
//app.use(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter )

app.use(router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('DB connection sucessful')
    })
    console.log(`server started sucessfuly at port ${PORT}`)
});

