import 'dotenv/config'
import express from "express";
import cors from 'cors'
import { json } from 'body-parser'
import WebsocketRoutes from "./routes/WebSocketsRoutes"

const app = express();
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(json())

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // 
}))

app.use("/websocket", WebsocketRoutes);

const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log("WEBSOCKET API listening on port: ", port)
})