import { Router } from 'express'
const router = Router()
import MainWebsocket from '../usecases/MainWebsocket'
import { ApplyUseCase } from '../middlewares/ApllyUseCases'

const mainWebsocket = new MainWebsocket()

router.get('/test', (req, res) => {
    res.status(200).json({ message: '>> Welcome to Messenger API [AUK] <<' })
})

router.post("/sent-message", ApplyUseCase(mainWebsocket.sendSocketMessage))


export default router