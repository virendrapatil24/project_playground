import { WebSocketServer } from "ws";


const wss = new WebSocketServer({ port: 8080 })

wss.on("connection", (socket) => {
    console.log("user connected")
    // setInterval(() => {
    //     socket.send("welcometo the wss connection")
    // }, 500)

    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong")
        }
    })
})