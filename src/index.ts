import express = require("express")
import cors = require("express")


const app = express()

// Configuração de CORS
app.use(express.json())
app.use(cors()
)

// Inicia o servidor
app.listen(3333, () => console.log("Server online on port 3333."));
