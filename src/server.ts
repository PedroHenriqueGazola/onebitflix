import express from 'express';
import { sequeize } from './database';


const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequeize.authenticate().then(() => {
        console.log('DB connection sucessful')
    })
    console.log(`server started sucessfuly at port ${PORT}`)
})