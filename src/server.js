const express = require('express')
const server = express()

const { pageLanding, pageGiveClasses, pageStudy, saveClasses } = require('./pages')

// Configuração nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//Receber os dados do req body
.use(express.urlencoded({extended: true}))

// configuração de arquivos estáticos (css, scripts, imagens)
.use(express.static('public'))
// Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)