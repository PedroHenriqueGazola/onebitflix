import express from 'express'
import { authController } from './controllers/authController'
import { categoriesControllers } from './controllers/categoriesControler'
import { coursesController } from './controllers/coursesController'
import { episodesController } from './controllers/episodesController'
import { favoritesController } from './controllers/favoritesController'
import { likesController } from './controllers/likesController'
import { usersController } from './controllers/usersController'
import { ensureAuth, ensureAuthViaQuery } from './middlewares/auth'

const router = express.Router()

router.post('/auth/login', authController.login)
router.post('/auth/register', authController.register)

router.get('/categories', ensureAuth ,categoriesControllers.index)
router.get('/categories/:id',ensureAuth , categoriesControllers.show)

router.get('/courses/featured',ensureAuth , coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/popular', ensureAuth, coursesController.popular)
router.get('/courses/search', ensureAuth ,coursesController.search )
router.get('/courses/:id', ensureAuth ,coursesController.show)

router.get('/episodes/stream', ensureAuthViaQuery, episodesController.stream)
router.get('/episodes/:id/watchTime', ensureAuth, episodesController.getWatchTime)
router.post('/episodes/:id/watchTime', ensureAuth, episodesController.setWatchTime)

router.post('/favorites',ensureAuth, favoritesController.save)
router.get('/favorites', ensureAuth, favoritesController.index)
router.delete('/favorites/:id', ensureAuth, favoritesController.delete)

router.post('/likes', ensureAuth, likesController.save) 
router.delete('/likes/:id', ensureAuth, likesController.delete)

router.get('/watching', ensureAuth, usersController.watching)
router.get('/account', ensureAuth, usersController.show)
router.put('/account', ensureAuth, usersController.update)
export { router }   