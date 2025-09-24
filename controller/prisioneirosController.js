import { Router } from 'express';
import { listarprisioneiros, consultarprisioneiro, filtrarprisioneiropornome, inserirprisioneiro, alterarprisioneiro, removerprisioneiro } from './repository/prisioneirosRepository.js';

const router = Router();

router.get('/', async (req, resp) => {
    let registros = await listarprisioneiros();
    resp.send(registros);
});

router.get('/:id', async (req, resp) => {
    let registro = await consultarprisioneiro(req.params.id);
    resp.send(registro);
});

router.get('/filtro/nome/:nome', async (req, resp) => {
    let registros = await filtrarprisioneiropornome(req.params.nome);
    resp.send(registros);
});

router.post('/', async (req, resp) => {
    let novoprisioneiro = req.body;
    let id = await inserirprisioneiro(novoprisioneiro);
    resp.send({novoId: id});
});

router.put('/:id', async (req, resp) => {
    let id = req.params.id;
    let novosdados = req.body;
    let info = await alterarprisioneiro(id, novosdados);
    resp.send(info);
});

router.delete('/:id', async (req, resp) => {
    let info = await removerprisioneiro(req.params.id);
    resp.send(info);
});

export default router;
