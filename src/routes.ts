import express from 'express'
import { authController } from './controllers/authController'
import { categoriesControllers } from './controllers/categoriesControler'
import { coursesController } from './controllers/coursesController'
import { episodesController } from './controllers/episodesController'
import { ensureAuth } from './middlewares/auth'

const router = express.Router()

router.post('/auth/login', authController.login)
router.post('/auth/register', authController.register)

router.get('/categories', ensureAuth ,categoriesControllers.index)
router.get('/categories/:id',ensureAuth , categoriesControllers.show)

router.get('/courses/featured',ensureAuth , coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search', ensureAuth ,coursesController.search)
router.get('/courses/:id', ensureAuth ,coursesController.show)

router.get('/episodes/stream', episodesController.stream)

export { router }   