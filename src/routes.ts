import express from 'express'
import { categoriesControllers } from './controllers/categoriesControler'
import { coursesController } from './controllers/coursesController'

const router = express.Router()

router.get('/categories', categoriesControllers.index)
router.get('/categories/:id', categoriesControllers.show)

router.get('/courses/featured', coursesController.featured)
router.get('/courses/:id', coursesController.show)

export { router }   