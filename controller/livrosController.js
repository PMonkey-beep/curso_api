import { Router } from 'express';
import { listarlivros, consultarlivro, filtrarlivropornome, inserirlivro, alterarlivro, removerlivro } from '../repository/livrosRepository.js';

const router = Router();

router.get('/', async (req, resp) => {
    let registros = await listarlivros();
    resp.send(registros);
});

router.get('/:id', async (req, resp) => {
    let registro = await consultarlivro(req.params.id);
    resp.send(registro);
});

router.get('/filtro/titulo/:titulo', async (req, resp) => {
    let registros = await filtrarlivropornome(req.params.titulo);
    resp.send(registros);
});

router.post('/', async (req, resp) => {
    let novolivro = req.body;
    let id = await inserirlivro(novolivro);
    resp.send({novoId: id});
});

router.put('/:id', async (req, resp) => {
    let id = req.params.id;
    let novosdados = req.body;
    let info = await alterarlivro(id, novosdados);
    resp.send(info);
});

router.delete('/:id', async (req, resp) => {
    let info = await removerlivro(req.params.id);
    resp.send(info);
});

export default router;
