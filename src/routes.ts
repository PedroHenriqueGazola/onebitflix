import express from 'express'
import { categoriesControllers } from './controllers/categoriesControler'

const router = express.Router()

router.get('/categories', categoriesControllers.index)
router.get('/categories/:id', categoriesControllers.show)


export { router }