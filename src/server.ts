import express from 'express';
import { adminJs, adminJsRouter } from './adminJs';
import { sequeize } from './database';


const app = express();

app.use(express.static('public'))
//app.use(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter )

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    sequeize.authenticate().then(() => {
        console.log('DB connection sucessful')
    })
    console.log(`server started sucessfuly at port ${PORT}`)
});

