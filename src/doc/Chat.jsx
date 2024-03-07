import React from "react"

function createConnection (serverUrl,roomId) {
    return {
        connect() {
            console.log(`connecting to ${roomId}, room at ${serverUrl}...`)
        },
        disconnect() {
            console.log(`disconnected from ${roomId}, room @ ${serverUrl}...`)
        }
    }
}

export default createConnection