import express from "express"
import cors from "cors"
import mysql2 from "mysql2"
import "dotenv/config"

const app = express()

app.use(express.json())
app.use(cors())

const sql = mysql2.createPool({
    host: process.env.HOST_BANCO,
    user: process.env.USUARIO_BANCO,
    password: process.env.SENHA_BANCO,
    database: process.env.NOME_BANCO
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`)
})

app.get("/", (request, response) => {
    const comandoSelect = "SELECT * FROM musicas_KKUA21"

    sql.query(comandoSelect, (error, data) => {
        if (error){
            console.log(`Erro: ${error}`)
            return;
        } else {
            response.json(data)
        }
    })
})

export default app