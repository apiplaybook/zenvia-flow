import express from 'express'
import { searchPromotionsController } from './UseCases/SearchPromotions'

const routes = express.Router()

routes.get('/hook', searchPromotionsController.handle)

export default routes
