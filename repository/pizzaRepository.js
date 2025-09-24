import { conection } from './conection.js'


export async function listarpizzas() {
    const comando = `
        select *
            from pizzas
    `;

    const [registros] = await conection.query(comando);
    return registros;
}


export async function consultarpizza(id) {
    const comando = `
        select *
            from pizzas
            where id = ?
    `;

    const [registros] = await conection.query(comando, [id]);
    return registros[0];
}


export async function filtrarpizzapornome(nome) {
    const comando = `
        select *
            from pizzas
            where nome like ?
    `;

    const [registros] = await conection.query(comando, [`%${nome}%`]);
    return registros;
}


export async function inserirpizza(novapizza) {
    const comando = `
        insert into pizzas (nome, descricao, preco, tamanho, vegetariana, ingredientes, categoria)
            values (?, ?, ?, ?, ?, ?, ?)
    `;

    const [info] = await conection.query(comando, [
        novapizza.nome,
        novapizza.descricao,
        novapizza.preco,
        novapizza.tamanho,
        novapizza.vegetariana,
        novapizza.ingredientes,
        novapizza.categoria
    ]);
    return info.insertId;
}


export async function alterarpizza(id, novosdados) {
    const comando = `
        update pizzas
            set nome = ?,
                descricao = ?,
                preco = ?,
                tamanho = ?,
                vegetariana = ?,
                ingredientes = ?,
                categoria = ?
            where id = ?
    `;

    const [info] = await conection.query(comando, [
        novosdados.nome,
        novosdados.descricao,
        novosdados.preco,
        novosdados.tamanho,
        novosdados.vegetariana,
        novosdados.ingredientes,
        novosdados.categoria,
        id
    ]);
    return info;
}


export async function removerpizza(id) {
    const comando = `
        delete from pizzas
            where id = ?
    `;

    const [info] = await conection.query(comando, [id]);
    return info;
}
