/* 
*
* index da CRUD API REST de forma a receber requisições HTTP e passar por parametro para as funções
* abaixo e cumprir elas no banco de dados MySQL.
*
* Obs: alterar na pasta config o config.json para credenciais de acesso do banco de dados proprio.
*/

const express = require('express');
const app = express();
const models = require("./models");
const Automoveis = models.Automoveis;

app.use(express.json());

app.post("/Automoveis", (req, resp) => { //Post equivalente ao Create de uma CRUD
    Automoveis.create(req.body).then(resp.send("Criado com sucesso!"));
});

app.get("/Automoveis/:id", (req, resp) => { //Get equivalente ao Read de uma CRUD, procurando e lendo um unico ID
    Automoveis.findByPk(req.params.id).then(a => {
        resp.send(a.dataValues);
    });
});
app.get("/Automoveis", (req, resp) => { //Get equivalente ao Read de uma CRUD, procurando e lendo todo o banco
        resp.send(Automoveis);
});

app.put("/Automoveis/:id", (req, resp) => { //Put equivalente ao Update de uma CRUD
    Automoveis.findByPk(req.params.id).then(u => {
        u.update(req.body).then("Atualizado com sucesso!");
    });
});

app.delete("/Automoveis/:id", (req, resp) => { //Delete equivalente ao Delete de uma CRUD
    Automoveis.delete(req.param.id).then("Deletado com sucesso!");
});


app.listen(3306, () =>{
    console.log('Ok');
});
