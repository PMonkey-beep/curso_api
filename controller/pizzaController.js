import { Router } from 'express';
import { listarpizzas, consultarpizza, filtrarpizzapornome, inserirpizza, alterarPizza, removerPizza } from '../repository/pizzasRepository.js';

const router = Router();

router.get('/', async (req, resp) => {
    let registros = await listarpizzas();
    resp.send(registros);
});

router.get('/:id', async (req, resp) => {
    let registro = await consultarpizza(req.params.id);
    resp.send(registro);
});

router.get('/filtro/nome/:nome', async (req, resp) => {
    let registros = await filtrarpizzapornome(req.params.nome);
    resp.send(registros);
});

router.post('/', async (req, resp) => {
    let novopizza = req.body;
    let id = await inserirpizza(novopizza);
    resp.send({novoId: id});
});

router.put('/:id', async (req, resp) => {
    let id = req.params.id;
    let novosdados = req.body;
    let info = await alterarPizza(id, novosdados);
    resp.send(info);
});

router.delete('/:id', async (req, resp) => {
    let info = await removerPizza(req.params.id);
    resp.send(info);
});

export default router;
