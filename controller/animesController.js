import { Router } from 'express';
import { listaranimes, consultaranime, filtraranimepornome, inseriranime, alteraranime, removeranime } from '../repository/animesRepository.js';

const router = Router();

router.get('/', async (req, resp) => {
    let registros = await listaranimes();
    resp.send(registros);
});

router.get('/:id', async (req, resp) => {
    let registro = await consultaranime(req.params.id);
    resp.send(registro);
});

router.get('/filtro/nome/:nome', async (req, resp) => {
    let registros = await filtraranimepornome(req.params.nome);
    resp.send(registros);
});

router.post('/', async (req, resp) => {
    let novoanime = req.body;
    let id = await inseriranime(novoanime);
    resp.send({novoId: id});
});

router.put('/:id', async (req, resp) => {
    let id = req.params.id;
    let novosdados = req.body;
    let info = await alteraranime(id, novosdados);
    resp.send(info);
});

router.delete('/:id', async (req, resp) => {
    let info = await removeranime(req.params.id);
    resp.send(info);
});

export default router;
