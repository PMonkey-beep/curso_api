import { Router } from 'express';
import { listarcrimes, consultarcrime, filtrarcrimepornome, inserircrime, alterarcrime, removercrime } from '../repository/crimesRepository.js';

const router = Router();

router.get('/', async (req, resp) => {
    let registros = await listarcrimes();
    resp.send(registros);
});

router.get('/:id', async (req, resp) => {
    let registro = await consultarcrime(req.params.id);
    resp.send(registro);
});

router.get('/filtro/nome/:nome', async (req, resp) => {
    let registros = await filtrarcrimepornome(req.params.nome);
    resp.send(registros);
});

router.post('/', async (req, resp) => {
    let novocrime = req.body;
    let id = await inserircrime(novocrime);
    resp.send({novoId: id});
});

router.put('/:id', async (req, resp) => {
    let id = req.params.id;
    let novosdados = req.body;
    let info = await alterarcrime(id, novosdados);
    resp.send(info);
});

router.delete('/:id', async (req, resp) => {
    let info = await removercrime(req.params.id);
    resp.send(info);
});

export default router;
