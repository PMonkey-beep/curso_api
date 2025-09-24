import { Router } from 'express';
import { listarcarros, consultarcarro, filtrarcarropormodelo, inserircarro, alterarcarro, removercarro } from '../repository/carrosRepository.js';

const router = Router();

router.get('/', async (req, resp) => {
    let registros = await listarcarros();
    resp.send(registros);
});

router.get('/:id', async (req, resp) => {
    let registro = await consultarcarro(req.params.id);
    resp.send(registro);
});

router.get('/filtro/modelo/:modelo', async (req, resp) => {
    let registros = await filtrarcarropormodelo(req.params.modelo);
    resp.send(registros);
});

router.post('/', async (req, resp) => {
    let novocarro = req.body;
    let id = await inserircarro(novocarro);
    resp.send({novoId: id});
});

router.put('/:id', async (req, resp) => {
    let id = req.params.id;
    let novosdados = req.body;
    let info = await alterarcarro(id, novosdados);
    resp.send(info);
});

router.delete('/:id', async (req, resp) => {
    let info = await removercarro(req.params.id);
    resp.send(info);
});

export default router;
