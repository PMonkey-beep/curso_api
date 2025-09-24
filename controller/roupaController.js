import { Router } from 'express';
import { listarroupa, consultarroupa, filtrarroupapornome, inserirroupa, alterarroupa, removerroupa } from '../repository/roupaRepository.js';

const router = Router();

router.get('/', async (req, resp) => {
    let registros = await listarroupa();
    resp.send(registros);
});

router.get('/:id', async (req, resp) => {
    let registro = await consultarroupa(req.params.id);
    resp.send(registro);
});

router.get('/filtro/nome/:nome', async (req, resp) => {
    let registros = await filtrarroupapornome(req.params.nome);
    resp.send(registros);
});

router.post('/', async (req, resp) => {
    let novoroupa = req.body;
    let id = await inserirroupa(novoroupa);
    resp.send({novoId: id});
});

router.put('/:id', async (req, resp) => {
    let id = req.params.id;
    let novosdados = req.body;
    let info = await alterarroupa(id, novosdados);
    resp.send(info);
});

router.delete('/:id', async (req, resp) => {
    let info = await removerroupa(req.params.id);
    resp.send(info);
});

export default router;
