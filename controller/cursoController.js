import { Router } from 'express';
import { listarcurso, consultarcurso, filtrarcursopornome, inserircuso, alterarcurso, removercurso } from '../repository/cursoRepository.js';

const router = Router();

router.get('/', async (req, resp) => {
    let registros = await listarcurso();
    resp.send(registros);
});

router.get('/:id', async (req, resp) => {
    let registro = await consultarcurso(req.params.id);
    resp.send(registro);
});

router.get('/filtro/nome/:nome', async (req, resp) => {
    let registros = await filtrarcursopornome(req.params.nome);
    resp.send(registros);
});

router.post('/', async (req, resp) => {
    let novocurso = req.body;
    let id = await inserircuso(novocurso);
    resp.send({novoId: id});
});

router.put('/:id', async (req, resp) => {
    let id = req.params.id;
    let novosdados = req.body;
    let info = await alterarcurso(id, novosdados);
    resp.send(info);
});

router.delete('/:id', async (req, resp) => {
    let info = await removercurso(req.params.id);
    resp.send(info);
});

export default router;
