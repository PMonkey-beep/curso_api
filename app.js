import { listarlivros, Inserirlivros } from "./livrosRepository.js";
import { listarcarros, Inserircarros } from "./carrosRepository.js";
import { listarseries,Inserirseries } from "./seriesRepository.js";
import { listarpizzas, Inserirpizzas } from "./pizzaRepository.js";
import { listaranimes, Inseriranimes } from "./animesRepository.js";
import { listarprisioneiros, Inserirprisioneiros } from "./prisioneirosRepository.js";
import { listarroupa, Inserirroupa } from "./roupaRepository.js";
import { listaraluno, Inserialuno } from "./alunosRepository.js";
import { listarcurso, Inserircurso } from "./cursoRepository.js";
import { listarcrimes, Inserircrimes } from "./crimesRepository.js";

import express from 'express';
const api = express();
api.use(express.json());


// Tabela Livros

api.get('/livros', async (req, resp) => {
    let registros = await listarlivros();
    resp.send(registros)
});

api.post('/livros', async (req, resp) => {
    let novolivros = req.body;

    let id = await Inserirlivros(novolivros);
    resp.send({ novoId: id});
});


// Tabela Carros

api.get('/carros', async (req, resp) => {
    let registros = await listarcarros();
    resp.send(registros)
});

api.post('/carros', async (req, resp) => {
    let novocarros = req.body;

    let id = await Inserircarros(novocarros);
    resp.send({novoId: id});
});

// Series

api.get('/series', async (req, resp) => {
    let registros = await listarseries();
    resp.send(registros) 
});

api.post('/series', async (req, resp) =>{
    let novoseries = req.body;

    let id = await Inserirseries(novoseries);
    resp.send({novoId: id})
});

// Tabela Pizzas

api.get('/pizzas', async (req, resp) => {
    let registros = await listarpizzas();
    resp.send(registros)
});

api.post('/pizzas', async (req, resp) => {
    let novopizzas = req.body;

    let id = await Inserirpizzas(novopizzas);
    resp.send({novoid: id})
});

// Tabela Animes

api.get('/animes', async (req, resp) => {
    let registros = await listaranimes();
    resp.send(registros)
});

api.post('/animes', async (req, resp) => {
    let novoanimes = req.body;

    let id = await Inseriranimes(novoanimes);
    resp.send({novoId: id})
});

// Tabela Prisioneiros

api.get('/prisioneiros', async (req, resp) =>{
    let registros = await listarprisioneiros();
    resp.send(registros)
});

api.post('/prisioneiros', async (req, resp) => {
    let novoprisioneiros = req.body;

    let id = await Inserirprisioneiros(novoprisioneiros);
    resp.send({novoId: id})
});

// Tabela Roupas

api.get('/roupa', async (req,resp) => {
    let registros = await listarroupa();
    resp.send(registros)
});

api.post('/roupa', async (req, resp) => {
    let novoroupa = req.body

    let id = await Inserirroupa(novoroupa);
    resp.send({novoId: id})
});

// Tabela Alunos

api.get('/aluno', async (req, resp) => {
    let registros = await listaraluno();
    resp.send(registros)
});

api.post('/aluno', async (req, resp) => {
    let novoaluno = req.body

    let id = await Inserialuno(novoaluno);
    resp.send({novoId: id})
});

// Tabela Curso

api.get('/curso', async (req, resp) => {
    let registros = await listarcurso();
    resp.send(registros)
});

api.post('/curso', async (req, resp) => {
    let novocurso = req.body

    let id = await Inserircurso(novocurso);
    resp.send({novoId: id})
});

// Tabela Crimes

api.get('/crimes', async (req, resp) => {
    let registros = await listarcrimes();
    resp.send(registros)
});

api.post('/crimes', async (req, resp) => {
    let novocrimes = req.body

    let id = await Inserircrimes(novocrimes);
    resp.send({novoId: id})
});

api.listen(5010, () => console.log('Api subiu com sucesso'));
