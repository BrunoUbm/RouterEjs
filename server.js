const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", function(req, res){
    const items = [
        {   
            title: "Http",
            message: 'HTTP é um protocolo (protocol) que permite a obtenção de recursos, como documentos HTML. É a base de qualquer troca de dados na Web e um protocolo cliente-servidor, o que significa que as requisições são iniciadas pelo destinatário, geralmente um navegador da Web.',
        },
        {
            title: "Ejs",
            message: 'O EJS é uma engine de visualização, com ele conseguimos de uma maneira fácil e simples transportar dados do back-end para o front-end, basicamente conseguimos utilizar códigos em javascript no html de nossas páginas.',
        },
        {
            title: "V8",
            message: 'O V8 é o engine open-source de JavaScript e WebAssembly de alto desempenho do Google. Ele foi escrito em C++ e usado tanto no Chrome quanto em ambientes similares ao Chrome, e no Node. js. O V8 possui a implementação completa para ECMAScript e WebAssembly.',
        },

    ]
    res.render("pages/index", {
        qualitys: items,
    })
})



app.get("/sobre", function(req, res){
    const about = {
        message: "O Node.js foi criado em 2009 pelo pesquisador Ryan Dahl, quando este percebeu as falhas de processamento nos navegadores, aliadas à sua baixa performance, muitas vezes ocasionada pela sobrecarga de requisições. Nesse sentido, o especialista entendeu que era necessário criar um ambiente de execução para o JavaScript que atendesse às reais necessidades e demandas dos usuários, principalmente pelo fato de o uso da Web estar em constante expansão. Desse contexto surgiu o Node.js, vislumbrado como uma importante solução para resolver boa parte desses problemas. Desde então, ele tem se expandido no mercado e ganhado a confiança de grandes empresas em várias partes do mundo."
    }
    res.render("pages/about", {
        qualitys: about,
    })
})

app.listen(8080)
console.log("Rodando");