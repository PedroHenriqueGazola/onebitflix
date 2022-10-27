import { Request, Response } from "express";
import { getPaginationParams } from "../helpers/getPaginationParams";
import { AuthenticatedRequest } from "../middlewares/auth";
import { courseService } from "../services/courseService";
import { favoriteService } from "../services/favoriteService";
import { likeService } from "../services/likeService";

export const coursesController = {
    //GET /courses/featured
    featured: async(req: Request, res: Response) => {
        try {
            const featuredCourses = await courseService.getRandomFeaturedCourses()
            res.json(featuredCourses)
        } catch (error) {
            if(error instanceof Error) {
                return res.status(400).json( {message: error.message})
            }
        }
    },
    //GET /courses/newest
    newest: async(req: Request, res: Response) => {
        try {
            const newestCourses = await courseService.getTopTenNewestCourses()
            res.json(newestCourses)
        } catch (error) {
            if(error instanceof Error) {
                return res.status(400).json( {message: error.message})
            }
        }
    },

    //GET /courses/popular
    popular: async (req: Request, res: Response) => {
        try {
            const topTen = await courseService.getTopTenbyLike()
            return res.json(topTen)
        } catch (error) {
            if(error instanceof Error) {
                return res.status(400).json( {message: error.message})
            }
        }
    },

    //GET /courses/search?name=
    search: async(req: Request, res: Response) => {
        const { name } = req.query
        const [page, perPage] = getPaginationParams(req.query)
        try {
            if(typeof name !== 'string') throw new Error('Name param must be type string')
            const courses = await courseService.findByName(name, page, perPage)
            return res.json(courses)
        } catch (error) {
            if(error instanceof Error) {
                return res.status(400).json( {message: error.message})
            }
        }
    },  


    //GET /courses/:id
    show: async(req: AuthenticatedRequest, res: Response) => {
        const { id } = req.params
        const userId = req.user!.id

        try {
            const course = await courseService.findByIdWithEpisode(id)
            if(!course){
                return res.status(404).json({message: 'Curso não encontrado'})
            }
            const liked = await likeService.isLiked(userId, Number(id))
            const favorited = await favoriteService.isFavorites(Number(id), userId)
            return res.json({...course.get(), liked, favorited})
        } catch (error) {
            if(error instanceof Error) {
                return res.status(400).json( {message: error.message})
            }
        }
    }
}