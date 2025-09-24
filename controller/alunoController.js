import { Router } from 'express';
import { listaraluno, consultaraluno, filtraralunopornome, inseriraluno, alteraraluno, removeraluno } from '../repository/alunoRepository.js';

const router = Router();

router.get('/', async (req, resp) => {
    let registros = await listaraluno();
    resp.send(registros);
});

router.get('/:id', async (req, resp) => {
    let registro = await consultaraluno(req.params.id);
    resp.send(registro);
});

router.get('/filtro/nome/:nome', async (req, resp) => {
    let registros = await filtraralunopornome(req.params.nome);
    resp.send(registros);
});

router.post('/', async (req, resp) => {
    let novoaluno = req.body;
    let id = await inseriraluno(novoaluno);
    resp.send({novoId: id});
});

router.put('/:id', async (req, resp) => {
    let id = req.params.id;
    let novosdados = req.body;
    let info = await alteraraluno(id, novosdados);
    resp.send(info);
});

router.delete('/:id', async (req, resp) => {
    let info = await removeraluno(req.params.id);
    resp.send(info);
});

export default router;
