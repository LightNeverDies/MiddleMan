const express = require('express')
const io = require('socket.io')
const app = express()
const http = require('http').createServer(app)
const server = io(8000)
const port = 8888
//const socket = io.connect("http://localhost:8001")
//const client = require("socket.io-client")

const colorSide = require('./parkingData.json')

let sequenceNumberByClient = new Map();

server.on("connection", (socket) => {
  console.info(`Client connected to Midd App [id=${socket.id}]`)

  sequenceNumberByClient.set(socket, 1)

  socket.emit("ParkingLots", colorSide)

  socket.on("disconnect", () => {
    sequenceNumberByClient.delete(socket)
    console.info(`Client disconnected from Midd App [id=${socket.id}]`)
  });
});

http.listen(port, () => {
  console.log(`Info: HTTP Server is running on port ${port}`)
});