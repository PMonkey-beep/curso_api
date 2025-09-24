import express from 'express';

import alunoController from './controller/alunoController.js';
import carroController from './controller/carrosController.js';
import cursoController from './controller/cursoController.js';
import crimeController from './controller/crimesController.js';
import livroController from './controller/livrosController.js';
import pizzaController from './controller/pizzaController.js';
import serieController from './controller/seriesController.js';
import animeController from './controller/animesController.js';
import prisioneiroController from './controller/prisioneirosController.js';
import roupaController from './controller/roupaController.js';

const api = express();
api.use(express.json());


api.use('/aluno', alunoController);
api.use('/carros', carroController);
api.use('/curso', cursoController);
api.use('/crimes', crimeController);
api.use('/livros', livroController);
api.use('/pizzas', pizzaController);
api.use('/series', serieController);
api.use('/animes', animeController);
api.use('/prisioneiros', prisioneiroController);
api.use('/roupa', roupaController);

api.listen(5010, () => console.log('Api subiu com sucesso'));


