import { Router } from 'express';
import { listarseries, consultarserie, filtrarseriepornome, inserirserie, alterarserie, removerserie } from '../repository/seriesRepository.js';

const router = Router();

router.get('/', async (req, resp) => {
    let registros = await listarseries();
    resp.send(registros);
});

router.get('/:id', async (req, resp) => {
    let registro = await consultarserie(req.params.id);
    resp.send(registro);
});

router.get('/filtro/titulo/:titulo', async (req, resp) => {
    let registros = await filtrarseriepornome(req.params.titulo);
    resp.send(registros);
});

router.post('/', async (req, resp) => {
    let novoserie = req.body;
    let id = await inserirserie(novoserie);
    resp.send({novoId: id});
});

router.put('/:id', async (req, resp) => {
    let id = req.params.id;
    let novosdados = req.body;
    let info = await alterarserie(id, novosdados);
    resp.send(info);
});

router.delete('/:id', async (req, resp) => {
    let info = await removerserie(req.params.id);
    resp.send(info);
});

export default router;
